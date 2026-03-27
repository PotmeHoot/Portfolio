import { PillLabel } from "../ui/PillLabel";

interface ProjectMetaOverlayProps {
  category: string;
  title: string;
  description: string;
}

export const ProjectMetaOverlay = ({
  category,
  title,
  description,
}: ProjectMetaOverlayProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-30 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
      <PillLabel className="mb-4">
        {category}
      </PillLabel>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-white/40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
