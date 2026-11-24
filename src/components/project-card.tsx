import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import { Star } from "lucide-react";
import savedCounts from "@/data/project-counts.json";
import { ProjectCoverSlideshow, type CoverSlide } from "@/components/project-cover-slideshow";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  slides?: readonly CoverSlide[];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
    showCount?: boolean;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  slides,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {slides && slides.length > 0 ? (
        <ProjectCoverSlideshow slides={slides} title={title} href={href || "#"} className={className} />
      ) : (
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      )}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          {dates && <time className="font-sans text-xs">{dates}</time>}
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => {
              const metric = link.showCount
                ? (savedCounts as Record<string, { count: number | null; updatedAt: string | null }>)[link.href]
                : undefined;
              const count = metric?.count;
              const isPeerlist = link.type === "Upvote";
              return (
              <Link href={link.href} key={idx} target="_blank" rel="noopener noreferrer"
                aria-label={`${link.type} ${title}${isPeerlist ? " on Peerlist" : ""}${typeof count === "number" ? `, ${count} ${isPeerlist ? "upvotes" : "GitHub stars"}` : ""}`}
                title={typeof count === "number" ? `Count last fetched ${metric?.updatedAt}` : undefined}>
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  <span aria-hidden="true">{link.icon}</span>
                  {link.type}
                  {typeof count === "number" && <span className="flex items-center gap-1 tabular-nums">
                    {!isPeerlist && <Star aria-hidden="true" className="size-3" />}
                    {count}
                  </span>}
                </Badge>
              </Link>
              );
            })}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
