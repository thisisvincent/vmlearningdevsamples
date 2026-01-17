import { ExternalLink } from "lucide-react";
import { PortfolioItem, categories, isYouTubeUrl, getYouTubeVideoId } from "@/data/portfolioData";

// Import all thumbnails
import electricVehicles from "@/assets/thumbnails/electric-vehicles.jpg";
import xtrail from "@/assets/thumbnails/xtrail.jpg";
import nissanTech from "@/assets/thumbnails/nissan-tech.jpg";
import gtr from "@/assets/thumbnails/gtr.jpg";
import parkAssist from "@/assets/thumbnails/park-assist.png";
import privacy from "@/assets/thumbnails/privacy.jpg";
import copyright from "@/assets/thumbnails/copyright.jpg";
import aml from "@/assets/thumbnails/aml.jpg";
import comptia from "@/assets/thumbnails/comptia.jpg";
import ai from "@/assets/thumbnails/ai.jpg";
import crypto from "@/assets/thumbnails/crypto.jpg";
import cybersecurity from "@/assets/thumbnails/cybersecurity.jpg";
import transformTech from "@/assets/thumbnails/transform-tech.jpg";

const thumbnailMap: Record<string, string> = {
  "electric-vehicles": electricVehicles,
  "xtrail": xtrail,
  "nissan-tech": nissanTech,
  "gtr": gtr,
  "park-assist": parkAssist,
  "privacy": privacy,
  "copyright": copyright,
  "aml": aml,
  "comptia": comptia,
  "ai": ai,
  "crypto": crypto,
  "cybersecurity": cybersecurity,
  "transform-tech": transformTech,
};

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

const categoryColors: Record<string, string> = {
  automotive: "bg-category-automotive",
  video: "bg-category-video",
  onboarding: "bg-category-onboarding",
  it: "bg-category-it",
};

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  const category = categories.find((c) => c.id === item.category);
  const thumbnailSrc = thumbnailMap[item.thumbnail] || thumbnailMap["nissan-tech"];
  const isVideo = isYouTubeUrl(item.url);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <article className="relative h-full overflow-hidden rounded-lg bg-card border border-border/50 shadow-card transition-all duration-500 hover:border-primary/30 hover:shadow-glow hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={thumbnailSrc}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />

          {/* Category Badge */}
          <div
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]} text-primary-foreground`}
          >
            {category?.label}
          </div>

          {/* Play Button for Videos */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xl">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}

          {/* External Link Icon for non-videos */}
          {!isVideo && (
            <div className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <ExternalLink className="h-4 w-4 text-foreground" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 transition-colors group-hover:text-primary">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>

        {/* Bottom Accent Line */}
        <div
          className={`absolute bottom-0 left-0 h-1 w-0 ${categoryColors[item.category]} transition-all duration-500 group-hover:w-full`}
        />
      </article>
    </a>
  );
}
