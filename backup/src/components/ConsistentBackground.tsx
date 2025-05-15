import React from 'react';
import { cn } from '@/lib/utils';

interface ConsistentBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function ConsistentBackground({ children, className }: ConsistentBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-background to-background"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
} 