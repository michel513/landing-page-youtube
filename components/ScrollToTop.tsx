'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldShow = window.scrollY > 500;

      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow);

        // GSAP animation for button appearance
        if (buttonRef.current) {
          if (shouldShow) {
            gsap.to(buttonRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              ease: 'back.out(1.7)',
              pointerEvents: 'auto'
            });
          } else {
            gsap.to(buttonRef.current, {
              opacity: 0,
              y: 40,
              scale: 0.9,
              duration: 0.3,
              ease: 'power2.in',
              pointerEvents: 'none'
            });
          }
        }
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [isVisible]);

  const scrollToTop = () => {
    // Use Lenis if available, fallback to window.scrollTo
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, {
        duration: 2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4)
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    // Button click animation
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut'
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_30px_rgba(255,0,0,0.5)] hover:shadow-[0_0_40px_rgba(255,0,0,0.7)] transition-shadow duration-300 opacity-0 pointer-events-none group"
      style={{ transform: 'translateY(40px) scale(0.9)' }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />

      {/* Pulsing ring effect */}
      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
    </button>
  );
};

export default ScrollToTop;