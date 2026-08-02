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

  // Split tagline into individual words for proportional word-gap & letter distribution
  const taglineWords = tagline ? tagline.split(' ') : [];

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
                'font-display text-[17.5px] sm:text-[21px] font-black tracking-[0.14em] uppercase leading-none self-center',
                isLight ? 'text-white' : 'text-surface-950'
              )}
            >
              ASHVILL
            </span>
          )}
        </div>

        {/* Bottom Row: Proportional Justified Tagline spanning perfectly flush from left to right */}
        {showText && showTagline && tagline && (
          <div className="w-full mt-2 sm:mt-2.5 flex items-center justify-between select-none">
            {taglineWords.map((word, wordIdx) => (
              <div key={wordIdx} className="contents">
                {wordIdx > 0 && <span className="w-2.5 sm:w-3 shrink-0" />}
                <div className="flex items-center justify-between flex-1 min-w-0">
                  {word.split('').map((char, charIdx) => (
                    <span
                      key={charIdx}
                      className={cn(
                        'text-[6.25px] sm:text-[7.5px] font-bold uppercase leading-none transition-colors',
                        styleVariant === 'muted'
                          ? isLight
                            ? 'text-surface-400 group-hover:text-surface-300'
                            : 'text-surface-500 group-hover:text-surface-700'
                          : isLight
                          ? 'text-brand-400 group-hover:text-brand-300'
                          : 'text-brand-600 group-hover:text-brand-700'
                      )}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
