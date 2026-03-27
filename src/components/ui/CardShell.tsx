import { ReactNode } from "react";

interface CardShellProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'premium';
}

export const CardShell = ({ 
  children, 
  className = "", 
  variant = 'glass' 
}: CardShellProps) => {
  const baseClass = variant === 'glass' ? 'card-glass' : 'card-premium';
  return (
    <div className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
};
