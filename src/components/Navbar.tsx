import { NAVIGATION_LINKS, OBSERVER_SECTIONS } from "../data/navigation";
import { Button } from "./ui/Button";
import { useActiveSection } from "../hooks/useActiveSection";

export const Navbar = () => {
  const activeSection = useActiveSection(OBSERVER_SECTIONS);

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

        <Button 
          href="#contact" 
          variant="primary"
          className="!px-4 !py-1.5 !text-[10px] !rounded-full"
          aria-label="Inquire about a project"
        >
          Inquire
        </Button>
      </nav>
    </header>
  );
};
