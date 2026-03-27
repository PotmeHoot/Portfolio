import { ReactNode, AnchorHTMLAttributes } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  href,
  ...props 
}: ButtonProps) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <a 
      href={href}
      className={`${baseClass} ${className}`} 
      {...props}
    >
      {children}
    </a>
  );
};
