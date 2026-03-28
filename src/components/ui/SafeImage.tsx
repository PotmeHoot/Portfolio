import { useState } from "react";
import { cn } from "../../lib/utils";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
  [key: string]: any; // Allow other standard props
}

export const SafeImage = ({ 
  src, 
  alt, 
  className, 
  fallbackSrc, 
  containerClassName,
  ...props 
}: SafeImageProps) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Default fallback to a themed placeholder if none provided
  const finalFallback = fallbackSrc || `https://picsum.photos/seed/${encodeURIComponent(alt || "placeholder")}/800/1000`;

  return (
    <div className={cn("relative overflow-hidden bg-white/5", containerClassName)}>
      {/* Loading Shimmer/Placeholder */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      )}
      
      <img
        src={error ? finalFallback : src}
        alt={alt}
        className={cn(
          "transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!error) {
            setError(true);
          }
        }}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
};
