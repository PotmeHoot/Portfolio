import { SERVICES } from "../data/services";
import { Icon } from "./ui/Icon";
import { SectionHeader } from "./ui/SectionHeader";
import { CardShell } from "./ui/CardShell";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Reveal } from "./ui/Reveal";

export const Services = () => {
  return (
    <SectionWrapper id="services">
      <Reveal>
        <SectionHeader 
          eyebrow="Expertise"
          title="Services"
          description="Specialized content creation designed to stop the scroll and drive growth."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <CardShell className="group h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Icon name={service.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-text-secondary group-hover:text-white/70 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardShell>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
};
