import { memo, RefObject } from "react";
import { Project } from "../../types";
import { ImagePreview } from "./ImagePreview";
import { VideoPreview } from "./VideoPreview";
import { ImagePlaceholder, VideoPlaceholder } from "./ProjectPlaceholders";

interface ProjectInteractionPreviewProps {
  item: Project;
  isActive: boolean;
  isImageSequenceActive: boolean;
  isVideoActive: boolean;
  activeSegmentIndex: number;
  shouldReduceMotion: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
  handleLoadedMetadata: () => void;
  handleVideoError: () => void;
  isHoverSupported: boolean;
}

export const ProjectInteractionPreview = memo(({
  item,
  isActive,
  isImageSequenceActive,
  isVideoActive,
  activeSegmentIndex,
  shouldReduceMotion,
  videoRef,
  handleLoadedMetadata,
  handleVideoError,
  isHoverSupported
}: ProjectInteractionPreviewProps) => {
  const previewImages = item.previewImages || [];
  const hasVideo = !!item.previewVideo;
  
  // Logic for placeholders based on type
  const isVideoType = item.type === 'video' || item.type === 'motion' || item.type === 'AR';
  const isGraphicType = item.type === 'graphic' || !item.type;

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      {/* Image Sequence Preview Layer */}
      {previewImages.length > 0 && !hasVideo && (
        <ImagePreview
          images={previewImages}
          activeSegmentIndex={activeSegmentIndex}
          isVisible={isImageSequenceActive}
          shouldReduceMotion={shouldReduceMotion}
          projectTitle={item.title}
          isHoverSupported={isHoverSupported}
        />
      )}

      {/* Video Preview Layer */}
      {hasVideo && (
        <VideoPreview
          src={item.previewVideo!}
          isVisible={isVideoActive}
          onLoadedMetadata={handleLoadedMetadata}
          onError={handleVideoError}
          videoRef={videoRef}
        />
      )}

      {/* Fallback Placeholders when active but no content */}
      {isActive && isGraphicType && previewImages.length === 0 && !hasVideo && (
        <ImagePlaceholder />
      )}

      {isActive && isVideoType && !hasVideo && (
        <VideoPlaceholder />
      )}
    </div>
  );
});

ProjectInteractionPreview.displayName = "ProjectInteractionPreview";
