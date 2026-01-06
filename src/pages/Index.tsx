import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryFilter } from "@/components/CategoryFilter";
import { PortfolioCard } from "@/components/PortfolioCard";
import { portfolioItems, Category } from "@/data/portfolioData";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container pb-20">
        {/* Category Filter */}
        <section className="mb-12">
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </section>

        {/* Portfolio Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </section>

        {/* Stats Section */}
        <section className="mt-20 py-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">
                50+
              </p>
              <p className="text-sm text-muted-foreground mt-2">Learning Modules & Workshops</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">
                10
              </p>
              <p className="text-sm text-muted-foreground mt-2">Categories</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">
                8+
              </p>
              <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient">
                100%
              </p>
              <p className="text-sm text-muted-foreground mt-2">Client Satisfaction</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
