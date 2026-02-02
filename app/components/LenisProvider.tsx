'use client';  

import { ReactNode } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenis = useLenis();  

  return (
    <ReactLenis
      root  
      options={{
        autoRaf: true, 
        lerp: 0.1,  
        duration: 1.2,  
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  
        smoothWheel: true,  
        touchMultiplier: 2, 
        infinite: false, 
      }}
    >
      {children}
    </ReactLenis>
  );
}