import { SectionHeader } from "./ui/SectionHeader";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Reveal } from "./ui/Reveal";

export const About = () => {
  return (
    <SectionWrapper id="about" glowPosition="left" className="bg-black">
      <Reveal className="max-w-5xl mx-auto">
        <SectionHeader 
          eyebrow="Personal Story"
          className="!mb-12"
        />
        
        <div className="space-y-10 md:space-y-16">
          <p className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-white/90">
            I’m a graphic designer with over <span className="text-white">10 years of experience</span>, working across gaming, advertising and social media.
          </p>
          
          <p className="text-xl md:text-3xl font-medium leading-[1.4] text-text-secondary max-w-4xl">
            I’ve worked in agencies and production environments, creating content for brands in <span className="text-white/80">healthcare, banking, and technology.</span>
          </p>
          
          <p className="text-xl md:text-3xl font-medium leading-[1.4] text-text-secondary max-w-4xl">
            Today, I focus on creating social media content that is both <span className="text-white/80 font-bold">visually strong and effective.</span>
          </p>
        </div>
      </Reveal>
    </SectionWrapper>
  );
};
