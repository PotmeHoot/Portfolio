import { useState, useEffect, useRef, useCallback } from "react";
import { Project } from "../types";

export const useProjectPreviewLoop = (item: Project, isActive: boolean) => {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);
  const [activeSegmentProgress, setActiveSegmentProgress] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoDuration, setVideoDuration] = useState(10);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);

  // Robust hover support detection
  const [isHoverSupported, setIsHoverSupported] = useState(false);
  useEffect(() => {
    setIsHoverSupported(window.matchMedia("(hover: hover)").matches);
  }, []);

  const previewImages = item.previewImages || [];
  const hasPreviewImages = previewImages.length > 0;
  const hasVideo = !!item.previewVideo && !videoError;

  const isVideoActive = hasVideo && isVideoPlaying;
  const isImageSequenceActive = isActive && hasPreviewImages && (!hasVideo || videoError);
  const isIdle = !isActive || (!isVideoActive && !isImageSequenceActive);

  // Manual Advance for Mobile - strictly isolated to non-hover environments
  const manualAdvance = useCallback(() => {
    if (!isHoverSupported && isImageSequenceActive && previewImages.length > 1) {
      setActiveSegmentIndex((prev) => (prev + 1) % previewImages.length);
      setActiveSegmentProgress(0);
    }
  }, [isHoverSupported, isImageSequenceActive, previewImages.length]);

  useEffect(() => {
    // Only run the automatic loop if hover is supported (Desktop)
    const shouldLoop = isHoverSupported && isImageSequenceActive && previewImages.length >= 1;

    if (shouldLoop) {
      const totalDuration = 3000;
      const cycleDuration = totalDuration * previewImages.length;
      const startTime = performance.now();

      const updateProgress = () => {
        const elapsed = performance.now() - startTime;
        const cycleElapsed = elapsed % cycleDuration;
        const totalProgress = (cycleElapsed / totalDuration) * 100;
        
        const segmentIndex = Math.floor(totalProgress / 100);
        const segmentProgress = totalProgress % 100;
        
        setActiveSegmentIndex(segmentIndex);
        setActiveSegmentProgress(segmentProgress);
        
        rafRef.current = requestAnimationFrame(updateProgress);
      };

      rafRef.current = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      
      if (!isActive) {
        setActiveSegmentIndex(0);
        setActiveSegmentProgress(0);
      }
    };
  }, [isActive, isImageSequenceActive, previewImages.length, isHoverSupported]);

  useEffect(() => {
    if (isActive && hasVideo && !videoError) {
      const playVideo = async () => {
        try {
          if (videoRef.current) {
            await videoRef.current.play();
            setIsVideoPlaying(true);
            setVideoError(false);
          }
        } catch (error) {
          console.warn("Video play failed, falling back to image sequence:", error);
          setIsVideoPlaying(false);
          setVideoError(true);
        }
      };
      playVideo();
    }

    return () => {
      if (!isActive) {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        setIsVideoPlaying(false);
      }
    };
  }, [isActive, hasVideo, videoError]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDuration(videoRef.current.duration);
    }
  };

  const handleVideoError = () => {
    console.warn(`Video resource not found or unsuitable: ${item.previewVideo}`);
    setVideoError(true);
    setIsVideoPlaying(false);
  };

  return {
    activeSegmentIndex,
    activeSegmentProgress,
    isVideoPlaying,
    videoDuration,
    videoRef,
    handleLoadedMetadata,
    handleVideoError,
    manualAdvance,
    isVideoActive,
    isImageSequenceActive,
    isIdle,
    hasPreviewImages,
    hasVideo,
    previewImages,
    isHoverSupported
  };
};
