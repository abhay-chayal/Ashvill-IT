import Link from 'next/link';
import { company } from '@/config/company';
import { LogoIcon } from './LogoIcon';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'light';
  showText?: boolean;
  tagline?: string;
  showTagline?: boolean;
  styleVariant?: 'clean' | 'muted';
}

export function Logo({
  className,
  variant = 'default',
  showText = true,
  tagline = 'ENGINEERING EXCELLENCE',
  showTagline = true,
  styleVariant = 'clean',
}: LogoProps) {
  const isLight = variant === 'light';

  // Prepare characters for sub-pixel flex justification across the exact top-row width
  const taglineChars = tagline.split('');

  return (
    <Link
      href="/"
      className={cn('group inline-flex items-center shrink-0 select-none transition-all', className)}
      aria-label={company.name}
    >
      <div className="inline-flex flex-col items-stretch transition-transform duration-300 group-hover:scale-[1.015]">
        {/* Top Row: Logo Mark Icon + ASHVILL Wordmark (Vertically centered) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <LogoIcon variant={variant} size={36} className="h-7 sm:h-8.5 w-auto shrink-0" />

          {showText && (
            <span
              className={cn(
                'font-display text-[18px] sm:text-[21px] font-black tracking-[0.14em] uppercase leading-none self-center pt-0.5',
                isLight ? 'text-white' : 'text-surface-950'
              )}
            >
              ASHVILL
            </span>
          )}
        </div>

        {/* Bottom Row: Sub-pixel Justified Tagline spanning perfectly flush from left to right */}
        {showText && showTagline && tagline && (
          <div className="w-full mt-1.5 sm:mt-2 flex items-center justify-between select-none">
            {taglineChars.map((char, index) => (
              <span
                key={index}
                className={cn(
                  'text-[7px] sm:text-[7.5px] font-bold uppercase leading-none transition-colors',
                  char === ' ' ? 'w-1 sm:w-1.5' : '',
                  styleVariant === 'muted'
                    ? isLight
                      ? 'text-surface-400 group-hover:text-surface-300'
                      : 'text-surface-500 group-hover:text-surface-700'
                    : isLight
                    ? 'text-brand-400 group-hover:text-brand-300'
                    : 'text-brand-600 group-hover:text-brand-700'
                )}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
