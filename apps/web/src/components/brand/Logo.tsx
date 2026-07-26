import Link from 'next/link';
import Image from 'next/image';
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
    <Link href="/" className={cn('group flex items-center gap-3.5', className)} aria-label={company.name}>
      <div className="flex items-center gap-3.5 transition-transform duration-300 group-hover:scale-[1.02]">
        {/* Exact User GPT-Generated Logo Mark Asset */}
        <div className="relative flex items-center justify-center shrink-0">
          <Image
            src="/logo-mark.png"
            alt="Ashvill Logo Icon"
            width={40}
            height={42}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>

        {/* Wordmark Typography */}
        {showText && (
          <div className="flex flex-col justify-center leading-none">
            <span
              className={cn(
                'font-display text-[22px] font-extrabold tracking-[0.12em] uppercase leading-none',
                isLight ? 'text-white' : 'text-surface-950'
              )}
            >
              ASHVILL
            </span>
            <span
              className={cn(
                'text-[9.5px] font-bold tracking-[0.24em] uppercase mt-1 leading-none',
                isLight ? 'text-brand-400' : 'text-brand-600'
              )}
            >
              IT SOLUTIONS
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
