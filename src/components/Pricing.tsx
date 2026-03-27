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

        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PACKAGES.map((pkg, i) => (
            <Reveal key={i} delay={i * 0.05} className="h-full">
              <CardShell 
                variant={pkg.popular ? "premium" : "glass"}
                className={`relative flex flex-col h-full group ${
                  pkg.popular 
                    ? "!bg-white !text-black scale-100 md:scale-105 z-10 shadow-[0_20px_50px_rgba(255,255,255,0.1)] !border-transparent" 
                    : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-4 md:mb-6">
                  <h3 className={`text-lg md:text-xl font-bold uppercase tracking-widest mb-2 ${pkg.popular ? "text-black/40" : "text-text-muted"}`}>
                    {pkg.name}
                  </h3>
                  <div className="text-4xl md:text-5xl font-bold tracking-tighter">
                    {pkg.price === "Tailored" ? pkg.price : <><span className="text-lg font-medium">from</span> {pkg.price}</>}
                  </div>
                </div>

                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 flex-grow">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className={`flex items-center gap-4 text-sm font-medium ${pkg.popular ? "text-black/60" : "text-text-secondary"}`}>
                      <CheckCircle2 className={`w-4 h-4 ${pkg.popular ? "text-black" : "text-white/20"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  href="#contact" 
                  variant={pkg.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
};
