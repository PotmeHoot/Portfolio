import { PROCESS_STEPS } from "../data/process";
import { SectionHeader } from "./ui/SectionHeader";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Reveal } from "./ui/Reveal";

export const Process = () => {
  return (
    <SectionWrapper id="process" showGlow={false} className="py-16 md:py-20 border-t border-white/5">
      <Reveal className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        <div className="shrink-0">
          <SectionHeader 
            eyebrow="Process"
            title="How we work."
            className="!mb-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
          {PROCESS_STEPS.map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-[10px] font-bold text-white/10 mb-2 group-hover:text-white/30 transition-colors">{item.step}</div>
              <h3 className="text-sm font-bold mb-1">{item.title}</h3>
              <p className="text-[11px] text-text-muted leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
};
