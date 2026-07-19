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
      <div 
        className={cn(
          "transition-transform duration-300 group-hover:scale-105",
          isLight ? "bg-white" : "gradient-brand",
          "h-[40px] w-[110px] md:h-[52px] md:w-[150px]"
        )}
        style={{
          maskImage: 'url(/logo-new.png)',
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'left center',
          WebkitMaskImage: 'url(/logo-new.png)',
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'left center',
        }}
        aria-hidden
      />
    </Link>
  );
}
