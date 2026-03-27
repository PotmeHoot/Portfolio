import { useState, useEffect, useRef } from "react";
import { NAVIGATION_LINKS, OBSERVER_SECTIONS } from "../data/navigation";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Avoid unnecessary work if no sections are defined
    if (!OBSERVER_SECTIONS || OBSERVER_SECTIONS.length === 0) return;

    // Track intersection ratios to determine the most prominent section
    const sectionRatios: Record<string, number> = {};

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        sectionRatios[entry.target.id] = entry.intersectionRatio;
      });

      // Find the section with the highest intersection ratio
      const mostProminent = Object.entries(sectionRatios).reduce(
        (acc, [id, ratio]) => (ratio > acc.ratio ? { id, ratio } : acc),
        { id: "", ratio: 0 }
      );

      if (mostProminent.ratio > 0) {
        setActiveSection(mostProminent.id);
      }
    };

    // Create observer with a rootMargin to trigger slightly before the section hits the top
    // and multiple thresholds for smoother detection
    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -70% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    });

    // Observe each section that exists in the DOM
    const observedElements: HTMLElement[] = [];
    OBSERVER_SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
        observedElements.push(element);
      }
    });

    // Explicit cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <nav className="bg-black/40 backdrop-blur-md border border-white/5 px-4 py-2 rounded-full flex items-center gap-6 md:gap-10 pointer-events-auto shadow-2xl" aria-label="Main navigation">
        <div className="text-sm font-bold tracking-widest text-white/90">JURAJ ŽÁČEK</div>
        
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-white/40">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`transition-colors ${activeSection === link.id ? "text-white" : "hover:text-white"}`}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a 
          href="#contact" 
          className="bg-white/90 text-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-black hover:bg-white transition-all"
          aria-label="Inquire about a project"
        >
          Inquire
        </a>
      </nav>
    </header>
  );
};
