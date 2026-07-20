import Link from 'next/link';
import { company } from '@/config/company';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
  showText?: boolean;
}

export function Logo({ className, variant = 'default', showText = true }: LogoProps) {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={cn('group flex items-center', className)} aria-label={company.name}>
      <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
        {/* Geometric 'A' Mark */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="text-brand-600"
        >
          <path d="M18 2L34 34H22L18 26L14 34H2L18 2Z" fill="currentColor"/>
        </svg>
        
        {/* Sleek Wordmark */}
        {showText && (
          <span className={cn(
            "-ml-0.5 mt-1 font-display text-[26px] font-extrabold tracking-tight",
            isLight ? "text-white" : "text-surface-950"
          )}>
            shvill
          </span>
        )}
      </div>
    </Link>
  );
}
