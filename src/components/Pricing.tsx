import { CheckCircle2 } from "lucide-react";
import { PRICING_PACKAGES } from "../data/pricing";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { CardShell } from "./ui/CardShell";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Reveal } from "./ui/Reveal";

export const Pricing = () => {
  return (
    <SectionWrapper id="pricing" showGlow={false} className="py-10 md:py-20 bg-bg-secondary">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <Reveal>
        <SectionHeader 
          eyebrow="Investment"
          title="Pricing"
          description="Simple and flexible packages built for brands that want to grow."
          centered
        />

        <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-[400px] md:max-w-none mx-auto">
          {PRICING_PACKAGES.map((pkg, i) => (
            <Reveal key={i} delay={i * 0.05} className="h-full">
              <CardShell 
                variant={pkg.popular ? "premium" : "glass"}
                className={`relative flex flex-col h-full group text-center md:text-left p-8 md:p-10 ${
                  pkg.popular 
                    ? "!bg-white !text-black scale-100 md:scale-105 z-10 shadow-[0_40px_100px_rgba(255,255,255,0.15)] !border-transparent" 
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-xl">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8 md:mb-10">
                  <h3 className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 ${pkg.popular ? "text-black/40" : "text-text-muted"}`}>
                    {pkg.name}
                  </h3>
                  <div className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                    {pkg.price === "Tailored" ? pkg.price : <><span className="text-base md:text-lg font-medium opacity-40 mr-1">from</span>{pkg.price}</>}
                  </div>
                </div>

                <ul className="space-y-4 md:space-y-5 mb-10 md:mb-12 flex-grow flex flex-col items-center md:items-start">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className={`flex items-start md:items-center justify-center md:justify-start gap-3 text-sm md:text-base font-medium leading-tight ${pkg.popular ? "text-black/70" : "text-text-secondary"}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 md:mt-0 ${pkg.popular ? "text-black" : "text-white/20"}`} />
                      <span className="max-w-[200px] md:max-w-none">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button 
                    href="#contact" 
                    variant={pkg.popular ? "primary" : "secondary"}
                    className="w-full justify-center py-4 md:py-6"
                  >
                    Get Started
                  </Button>
                </div>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
};
