import { ReactNode, AnchorHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className, 
  href,
  ...props 
}: ButtonProps) => {
  return (
    <a 
      href={href}
      className={cn(variant === 'primary' ? 'btn-primary' : 'btn-secondary', className)} 
      {...props}
    >
      {children}
    </a>
  );
};
