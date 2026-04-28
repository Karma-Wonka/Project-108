type NavigationProps = {
  scrolled: boolean;
};

export function Navigation({ scrolled }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/70 backdrop-blur-lg py-4 border-b border-ink/5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="eyebrow opacity-60 mb-0.5">Project</span>
          <span className="text-2xl md:text-3xl font-serif font-bold italic tracking-tight text-ink leading-none">
            108
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 lg:gap-12 xl:gap-16">
          <a
            href="#project"
            className="eyebrow text-ink/70 hover:text-gold transition-colors"
          >
            The Project
          </a>
          <a
            href="#chorten"
            className="eyebrow text-ink/70 hover:text-gold transition-colors"
          >
            The Chorten
          </a>
          <a
            href="#scale"
            className="eyebrow text-ink/70 hover:text-gold transition-colors"
          >
            Scale
          </a>
          <a
            href="#single-day"
            className="eyebrow text-ink/70 hover:text-gold transition-colors"
          >
            Single Day
          </a>
          <a
            href="#take-part"
            className="btn btn-primary px-6 py-2.5 whitespace-nowrap"
          >
            Take Part
          </a>
        </div>
        <a href="#take-part" className="md:hidden btn btn-primary px-4 py-2">
          Take Part
        </a>
      </div>
    </nav>
  );
}
