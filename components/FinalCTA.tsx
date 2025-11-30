'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedContent from '@/components/AnimatedContent';
import { ArrowRight, Zap, Users } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] overflow-hidden">
      {/* Subtle red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      {/* Animated red glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Scarcity badge */}
          <AnimatedContent
            direction="vertical"
            distance={30}
            duration={0.6}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-8 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </div>
              <span className="text-white font-semibold text-sm">
                Places Limitées • Derniers Jours
              </span>
            </div>
          </AnimatedContent>

          {/* Main Title */}
          <AnimatedContent
            direction="vertical"
            distance={50}
            duration={0.7}
            delay={0.2}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Prêt à Lancer Tes Chaînes <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">
                YouTube en 2025 ?
              </span>
            </h2>
          </AnimatedContent>

          {/* Subtitle */}
          <AnimatedContent
            direction="vertical"
            distance={40}
            duration={0.7}
            delay={0.4}
          >
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoins des centaines de créateurs qui génèrent déjà{' '}
              <span className="text-accent font-semibold">5K-20K$/mois</span>{' '}
              avec YouTube Automation
            </p>
          </AnimatedContent>

          {/* CTA Button */}
          <AnimatedContent
            direction="vertical"
            distance={50}
            duration={0.8}
            delay={0.6}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg font-bold shadow-[0_0_40px_rgba(255,0,0,0.4)] hover:shadow-[0_0_60px_rgba(255,0,0,0.6)] transition-all duration-300 transform hover:scale-105 group"
              >
                Rejoindre la Formation
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-7 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Voir les Prix
              </Button>
            </div>
          </AnimatedContent>

          {/* Trust indicators */}
          <AnimatedContent
            direction="vertical"
            distance={30}
            duration={0.7}
            delay={0.8}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-black flex items-center justify-center"
                    >
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium">
                  <span className="text-white font-bold">500+</span> élèves actifs
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">
                  <span className="text-white font-bold">4.9/5</span> (200+ avis)
                </span>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>

      {/* Bottom shadow separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default FinalCTA;
