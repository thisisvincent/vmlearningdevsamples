import { Briefcase } from "lucide-react";

export function Header() {
  return (
    <header className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Learning & Development Portfolio</span>
          </div>

          {/* Title */}
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-foreground">Vincent M</span>
            <span className="text-gradient block mt-2">Samples of Learning & Modules</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            A curated collection of eLearning modules, training videos, and educational content 
            developed for enterprise clients across various industries.
          </p>

        </div>
      </div>
    </header>
  );
}
