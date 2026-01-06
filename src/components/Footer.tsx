export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-foreground">
              VincentM
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Creating impactful learning experiences
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vincent M. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
