# Portfolio

My personal portfolio site, live at [arpantaneja.dev](https://arpantaneja.dev)

Project counts are optional (`showCount` on a project link). `npm run dev` and
`npm run build` refresh the configured GitHub stars and Peerlist upvotes before
Next.js starts. Pages render the resulting JSON snapshot without browser requests.

`src/data/project-counts.json` stores each public URL, provider, last successfully
observed count, and timestamp. Keep this file in Git so a clean deployment has a
fallback; include automatically refreshed values in your normal commits. A failed
fetch preserves the previous value and logs a warning. If a count has never been
available, the link still renders without a number. Zero is a valid count.

GitHub uses its unauthenticated repository API. Peerlist reads the explicitly
labelled Upvotes statistic on its public project page; this is not a documented
API, and Cloudflare may block it. Saved Peerlist values can therefore remain stale
until a successful server fetch. Initial counts were verified from public pages.
Counts refresh at dev startup and build time, not continuously or after a vote.

---

template [here](https://magicui.design/docs/templates/portfolio)
