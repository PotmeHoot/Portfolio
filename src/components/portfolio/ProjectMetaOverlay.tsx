import { PillLabel } from "../ui/PillLabel";
import { IconName, ProjectType } from "../../types";
import * as LucideIcons from "lucide-react";
import { WorkCategoryIcon } from "./WorkCategoryIcon";

interface ProjectMetaOverlayProps {
  category: string;
  title: string;
  description: string;
  icon?: IconName;
  type?: ProjectType;
}

export const ProjectMetaOverlay = ({
  category,
  title,
  description,
  icon,
  type,
}: ProjectMetaOverlayProps) => {
  const IconComponent = icon ? LucideIcons[icon] as LucideIcons.LucideIcon : null;

  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-30 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
          {IconComponent ? (
            <IconComponent className="w-4 h-4 text-white/40" strokeWidth={1.5} />
          ) : (
            <WorkCategoryIcon category={category} type={type} className="text-white/40" />
          )}
        </div>
        <PillLabel>
          {category}
        </PillLabel>
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-xs sm:text-sm text-white/40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
