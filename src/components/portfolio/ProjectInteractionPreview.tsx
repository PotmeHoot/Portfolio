import { memo, RefObject } from "react";
import { Project } from "../../types";
import { ImagePreview } from "./ImagePreview";
import { VideoPreview } from "./VideoPreview";

interface ProjectInteractionPreviewProps {
  item: Project;
  isImageSequenceActive: boolean;
  isVideoActive: boolean;
  activeSegmentIndex: number;
  shouldReduceMotion: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
  handleLoadedMetadata: () => void;
  handleVideoError: () => void;
}

export const ProjectInteractionPreview = memo(({
  item,
  isImageSequenceActive,
  isVideoActive,
  activeSegmentIndex,
  shouldReduceMotion,
  videoRef,
  handleLoadedMetadata,
  handleVideoError
}: ProjectInteractionPreviewProps) => {
  const previewImages = item.previewImages || [];
  const hasVideo = !!item.previewVideo;

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
    </div>
  );
});

ProjectInteractionPreview.displayName = "ProjectInteractionPreview";
