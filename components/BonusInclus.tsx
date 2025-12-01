'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedContent from '@/components/AnimatedContent';
import SplitText from '@/components/SplitText';
import { Gift, Sparkles, Shield, CheckCircle2 } from 'lucide-react';

const BonusInclus = () => {
  const bonuses = [
    {
      id: 1,
      icon: Gift,
      title: 'Mini Formation Montage Offerte',
      description: 'Templates CapCut premium + tutoriels étape par étape pour créer des vidéos virales',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 2,
      icon: Sparkles,
      title: 'Accès  à la communauté School',
      description: 'Accès à la communauté School avec plus de 100 vidéos offertes',
      color: 'from-blue-500/20 to-cyan-500/20'
    }
  ];

  return (
    <section id="bonus" className="relative py-20 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">

          <div className="mb-4">
            <SplitText
              text="Bonus Inclus"
              tag="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
              delay={25}
              duration={0.7}
              splitType="words"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          <AnimatedContent
            direction="vertical"
            distance={20}
            duration={0.6}
            delay={0.4}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des ressources premium pour maximiser vos résultats dès le premier jour
            </p>
          </AnimatedContent>
        </div>

        {/* Bonus Grid 2x2 */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {bonuses.map((bonus, index) => (
            <AnimatedContent
              key={bonus.id}
              direction="vertical"
              distance={60}
              duration={0.7}
              delay={0.2 + index * 0.1}
            >
              <Card className={`group relative p-6 sm:p-8 bg-card border-border hover:border-accent/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,184,0,0.15)] h-full`}>
  
                {/* Gradient background effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${bonus.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <bonus.icon className="w-7 h-7 text-accent" />
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                      BONUS
                    </Badge>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {bonus.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {bonus.description}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </Card>
            </AnimatedContent>
          ))}
        </div>

        {/* Politique No Refund */}
        <AnimatedContent
          direction="vertical"
          distance={50}
          duration={0.8}
          delay={0.8}
        >
          <div className="max-w-3xl mx-auto">
            <Card className="relative p-8 sm:p-10 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 overflow-hidden group">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-red-500/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

              {/* Content */}
              <div className="relative z-10">
                {/* Shield icon + Badge */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center sm:text-left flex-1">
                    <Badge className="bg-primary text-white border-0 mb-3 text-sm px-4 py-1">
                      ENGAGEMENT TOTAL
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      No Refund Policy
                    </h3>
                    <p className="text-muted-foreground">
                      Engagement sérieux uniquement - Pas de remboursement
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-primary/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Aucun remboursement - Engagement total requis
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Politique stricte pour éviter les abus
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Places limitées aux personnes vraiment motivées
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Support email réactif 7j/7 pour toute question
                    </p>
                  </div>
                </div>

                {/* Trust message */}
                <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                  <p className="text-sm font-medium text-foreground">
                    Rejoignez <span className="text-primary font-bold">500+ créateurs</span> qui nous font confiance
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default BonusInclus;