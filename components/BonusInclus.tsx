'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AnimatedContent from '@/components/AnimatedContent';
import SplitText from '@/components/SplitText';
import { Gift, Sparkles, FileText, Crown, Shield, CheckCircle2 } from 'lucide-react';

const BonusInclus = () => {
  const bonuses = [
    {
      id: 1,
      icon: Gift,
      title: 'Mini Formation Montage Offerte',
      description: 'Templates CapCut premium + tutoriels étape par étape pour créer des vidéos virales',
      value: '197€',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      id: 2,
      icon: Sparkles,
      title: 'Accès Logiciels IA Gratuits',
      description: 'Comptes et crédits gratuits pour ElevenLabs, ChatGPT, Midjourney et + (valeur 500€)',
      value: '500€',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 3,
      icon: FileText,
      title: 'Templates + Checklists Prêts',
      description: 'Scripts, miniatures, descriptions, SOPs complètes pour démarrer immédiatement',
      value: '297€',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 4,
      icon: Crown,
      title: 'Coaching Premium 1000€',
      description: 'Sessions 1-on-1 personnalisées pour accélérer vos résultats (places limitées)',
      value: '1000€',
      color: 'from-amber-500/20 to-orange-500/20',
      isPremium: true
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
          <AnimatedContent
            direction="vertical"
            distance={30}
            duration={0.6}
          >
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Valeur Totale : 1994€
              </span>
            </div>
          </AnimatedContent>

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
              <Card className={`group relative p-6 sm:p-8 bg-card border-border hover:border-accent/50 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(255,184,0,0.15)] h-full ${bonus.isPremium ? 'ring-2 ring-accent/20' : ''}`}>
                {/* Premium badge for coaching */}
                {bonus.isPremium && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-accent to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      PREMIUM
                    </div>
                  </div>
                )}

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

                  {/* Value */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">Valeur :</span>
                    <span className="text-lg font-bold text-accent">{bonus.value}</span>
                  </div>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </Card>
            </AnimatedContent>
          ))}
        </div>

        {/* Garantie Section */}
        <AnimatedContent
          direction="vertical"
          distance={50}
          duration={0.8}
          delay={0.8}
        >
          <div className="max-w-3xl mx-auto">
            <Card className="relative p-8 sm:p-10 bg-gradient-to-br from-accent/5 via-background to-accent/5 border-2 border-accent/30 hover:border-accent/50 transition-all duration-500 overflow-hidden group">
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 via-amber-500/20 to-accent/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

              {/* Content */}
              <div className="relative z-10">
                {/* Shield icon + Badge */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping" />
                      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="text-center sm:text-left flex-1">
                    <Badge className="bg-accent text-white border-0 mb-3 text-sm px-4 py-1">
                      GARANTIE 30 JOURS
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      Satisfait ou Remboursé
                    </h3>
                    <p className="text-muted-foreground">
                      Essayez la formation sans risque pendant 30 jours
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-accent/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Remboursement intégral si vous n'êtes pas satisfait
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Aucune question posée, processus simple et rapide
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Gardez tous les bonus même en cas de remboursement
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Support email réactif 7j/7 pour toute question
                    </p>
                  </div>
                </div>

                {/* Trust message */}
                <div className="mt-6 pt-6 border-t border-accent/20 text-center">
                  <p className="text-sm font-medium text-foreground">
                    Rejoignez <span className="text-accent font-bold">500+ créateurs</span> qui nous font confiance
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
