import { CheckCircle2 } from "lucide-react";
import { EXPERIENCE_ITEMS, TOOL_ITEMS } from "../data/expertise";
import { SCALE_VARIANTS } from "../constants/motion";
import { Icon } from "./ui/Icon";
import { SectionHeader } from "./ui/SectionHeader";
import { CardShell } from "./ui/CardShell";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Reveal } from "./ui/Reveal";

export const Expertise = () => {
  return (
    <SectionWrapper id="experience" glowPosition="right" glowColor="purple" className="border-t border-white/5">
      <Reveal className="grid lg:grid-cols-2 gap-16 md:gap-32">
        {/* Left: Experience */}
        <div>
          <SectionHeader 
            eyebrow="Experience"
            title="Career"
            className="!mb-12"
          />
          <div className="space-y-8">
            {EXPERIENCE_ITEMS.map((item, i) => (
              <Reveal key={i} variants={{ initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 } }} delay={i * 0.05}>
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/30 group-hover:bg-white group-hover:text-black transition-all duration-500 shrink-0">
                    <Icon name={item.icon} className="w-4 h-4" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-base font-bold mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: Tools */}
        <div>
          <SectionHeader 
            eyebrow="Tools & AI"
            title="Stack"
            className="!mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TOOL_ITEMS.map((tool, i) => (
              <Reveal key={i} variants={SCALE_VARIANTS} delay={i * 0.05}>
                <CardShell variant="premium" className="hover:bg-white/[0.05] group h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[9px] uppercase tracking-widest font-bold text-white/20">{tool.level}</div>
                    <CheckCircle2 className="w-3 h-3 text-white/20 group-hover:text-white/40 transition-colors" />
                  </div>
                  <h4 className="text-base font-bold mb-1">{tool.name}</h4>
                  <p className="text-xs text-text-muted leading-tight">{tool.desc}</p>
                </CardShell>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
};
