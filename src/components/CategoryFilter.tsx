import { Category, categories } from "@/data/portfolioData";

interface CategoryFilterProps {
  activeCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
}

const categoryBgColors: Record<string, string> = {
  automotive: "bg-category-automotive/20 border-category-automotive text-category-automotive",
  video: "bg-category-video/20 border-category-video text-category-video",
  onboarding: "bg-category-onboarding/20 border-category-onboarding text-category-onboarding",
  it: "bg-category-it/20 border-category-it text-category-it",
};

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <button
        onClick={() => onCategoryChange("all")}
        className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
          activeCategory === "all"
            ? "bg-primary text-primary-foreground border-primary shadow-glow"
            : "bg-secondary/50 text-muted-foreground border-border hover:bg-secondary hover:text-foreground hover:border-muted-foreground/30"
        }`}
      >
        All Projects
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
            activeCategory === category.id
              ? `${categoryBgColors[category.id]} shadow-lg`
              : "bg-secondary/50 text-muted-foreground border-border hover:bg-secondary hover:text-foreground hover:border-muted-foreground/30"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
