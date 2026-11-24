import { readFile, writeFile } from "node:fs/promises";

const snapshotPath = new URL("./src/data/project-counts.json", import.meta.url);
const snapshot = JSON.parse(await readFile(snapshotPath, "utf8"));

export function parsePeerlistUpvotes(html) {
  // Read the explicitly labelled project statistic, never rank, views or comments.
  const text = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&(?:nbsp|#160);/g, " ")
    .replace(/\s+/g, " ");
  const matches = [...text.matchAll(/\b([\d,]+)\s+Upvotes\b/g)];
  if (matches.length !== 1) throw new Error("No unambiguous labelled Peerlist upvote statistic");
  return Number(matches[0][1].replaceAll(",", ""));
}

await Promise.all(Object.entries(snapshot).map(async ([url, previous]) => {
  try {
    const endpoint = previous.provider === "github"
      ? `https://api.github.com/repos${new URL(url).pathname}`
      : url;
    const response = await fetch(endpoint, {
      headers: previous.provider === "github"
        ? { Accept: "application/vnd.github+json", "User-Agent": "arpan-portfolio" }
        : { Accept: "text/html" },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const count = previous.provider === "github"
      ? (await response.json()).stargazers_count
      : parsePeerlistUpvotes(await response.text());
    if (!Number.isSafeInteger(count) || count < 0) throw new Error("Invalid count");
    snapshot[url] = { ...previous, count, updatedAt: new Date().toISOString() };
    console.log(`[project counts] ${url}: ${count}`);
  } catch (error) {
    console.warn(`[project counts] ${url}: ${error.message}; ${previous.count === null ? "no saved count available" : `using saved count ${previous.count} from ${previous.updatedAt}`}`);
  }
}));

await writeFile(snapshotPath, JSON.stringify(snapshot, null, 2) + "\n");
