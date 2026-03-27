import { PillLabel } from "./ui/PillLabel";

export const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/5 text-center text-white/40 text-sm">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="font-bold uppercase tracking-[0.3em] text-[10px]">© 2026 JURAJ ŽÁČEK. ALL RIGHTS RESERVED.</div>
      <div className="flex items-center gap-4">
        <PillLabel className="cursor-default border-transparent bg-transparent hover:text-white transition-colors">Privacy</PillLabel>
        <PillLabel className="cursor-default border-transparent bg-transparent hover:text-white transition-colors">Terms</PillLabel>
        <PillLabel className="cursor-default border-transparent bg-transparent hover:text-white transition-colors">Cookie Policy</PillLabel>
      </div>
    </div>
  </footer>
);
