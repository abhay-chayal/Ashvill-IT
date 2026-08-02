import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoIconProps {
  className?: string;
  variant?: 'default' | 'light';
  size?: number;
}

export function LogoIcon({ className, variant = 'default', size = 40 }: LogoIconProps) {
  const isLight = variant === 'light';

  return (
    <div className={cn('relative flex items-center justify-center shrink-0', className)}>
      <Image
        src={isLight ? '/logo-mark-light.png' : '/logo-mark.png'}
        alt="Ashvill Logo Mark"
        width={size}
        height={size}
        className="h-full max-h-full w-auto object-contain transition-all duration-300"
        priority
      />
    </div>
  );
}
