'use client';

import { Button } from '@/components/ui/button';
import AnimatedContent from '@/components/AnimatedContent';
import SplitText from '@/components/SplitText';

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#2A2A2A]">
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)] animate-pulse" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Video placeholder - will be replaced with actual video */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-black/90 via-black/50 to-black/90" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main title with SplitText animation */}
          <div className="mb-6">
            <SplitText
              text="YouTube Automation 2025 : De 0 à 10K$/mois avec l'IA"
              tag="h1"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4"
              delay={50}
              duration={1}
              ease="back.out(2)"
              splitType="words, chars"
              from={{ opacity: 0, y: 150, rotateX: -90, scale: 0.5 }}
              to={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              threshold={0.3}
              rootMargin="-50px"
            />
          </div>

          {/* Subtitle */}
          <AnimatedContent
            direction="vertical"
            distance={40}
            duration={0.8}
            delay={0.8}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Coaching complète pour créer et gérer{' '}
              <span className="text-accent font-semibold">1 à 10 chaînes faceless</span>{' '}
              rentables en 2025
            </p>
          </AnimatedContent>

          {/* CTA Buttons */}
          <AnimatedContent
            direction="vertical"
            distance={50}
            duration={0.8}
            delay={1.2}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                Reserver un appel
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                Prendre un coaching
              </Button>
            </div>
          </AnimatedContent>

          {/* Scroll indicator */}
          <AnimatedContent
            direction="vertical"
            distance={20}
            duration={1}
            delay={2}
          >
            <div className="absolute -bottom-25 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer">
                <span className="text-sm font-medium">Découvrir</span>
                <svg
                  className="w-6 h-6 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;