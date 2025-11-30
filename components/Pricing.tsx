'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedContent from '@/components/AnimatedContent';
import SplitText from '@/components/SplitText';
import { Check, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null);

  useEffect(() => {
    // Generate random number only on client side
    setSpotsLeft(Math.floor(Math.random() * 5) + 3);
  }, []);
  const plans = [
    {
      id: 'formation',
      name: 'Formation Seule',
      icon: Zap,
      price: 497, // TODO: À définir par l'utilisateur
      currency: '€',
      description: 'Tout ce dont vous avez besoin pour démarrer',
      features: [
        '10 modules complets (10h de contenu)',
        'Tous les bonus inclus (1994€ de valeur)',
        'Templates et checklists prêts à l\'emploi',
        'Accès à vie à la formation',
        'Mises à jour gratuites à vie',
        'Support par email',
        'Communauté privée Discord'
      ],
      cta: 'Commencer Maintenant',
      popular: false,
      highlighted: false
    },
    {
      id: 'coaching',
      name: 'Formation + Coaching',
      icon: Crown,
      price: 1497, // TODO: À définir (Formation + 1000€)
      currency: '€',
      description: 'Pour des résultats maximaux et accélérés',
      features: [
        'Tout de la Formation Seule',
        'Coaching premium individuel (1000€)',
        'Sessions 1-on-1 personnalisées',
        'Suivi personnalisé de vos chaînes',
        'Analyse de performances détaillée',
        'Priorisation des réponses support',
        'Accès aux mises à jour en avant-première',
        'Garantie résultats ou coaching prolongé'
      ],
      cta: 'Réserver Ma Place',
      popular: true,
      highlighted: true,
      badge: 'POPULAIRE'
    }
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-32 bg-muted/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <AnimatedContent
            direction="vertical"
            distance={30}
            duration={0.6}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Tarifs Simples
              </span>
            </div>
          </AnimatedContent>

          <div className="mb-4">
            <SplitText
              text="Choisissez Votre Formule"
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
              Investissez dans votre réussite avec une formation qui a déjà changé des centaines de vies
            </p>
          </AnimatedContent>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <AnimatedContent
              key={plan.id}
              direction="vertical"
              distance={60}
              duration={0.7}
              delay={0.3 + index * 0.2}
            >
              <Card
                className={`group relative p-8 bg-card border-2 transition-all duration-500 h-full flex flex-col ${
                  plan.highlighted
                    ? 'border-accent lg:-translate-y-4 shadow-[0_20px_60px_rgba(255,184,0,0.2)] hover:shadow-[0_25px_70px_rgba(255,184,0,0.3)]'
                    : 'border-border hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]'
                } transform hover:scale-[1.02]`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-accent to-amber-600 text-white px-4 py-1.5 text-sm font-bold shadow-lg">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-accent/5 to-amber-500/5'
                    : 'bg-gradient-to-br from-primary/5 to-accent/5'
                }`} />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${
                      plan.highlighted
                        ? 'bg-accent/10 group-hover:bg-accent/20'
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    } transition-colors duration-300`}>
                      <plan.icon className={`w-7 h-7 ${plan.highlighted ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl sm:text-6xl font-bold ${
                        plan.highlighted ? 'text-accent' : 'text-primary'
                      }`}>
                        {plan.price}
                      </span>
                      <span className="text-2xl font-semibold text-muted-foreground">
                        {plan.currency}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Paiement unique • Accès à vie
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              plan.highlighted
                                ? 'bg-accent/10'
                                : 'bg-green-500/10'
                            }`}>
                              <Check className={`w-3.5 h-3.5 ${
                                plan.highlighted ? 'text-accent' : 'text-green-600'
                              }`} />
                            </div>
                          </div>
                          <span className="text-sm text-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className={`w-full font-semibold text-base py-6 transition-all duration-300 transform hover:scale-105 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-accent to-amber-600 hover:from-accent/90 hover:to-amber-700 text-white shadow-[0_10px_30px_rgba(255,184,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,184,0,0.4)]'
                        : 'bg-primary hover:bg-primary/90 text-white shadow-[0_10px_30px_rgba(255,0,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,0,0,0.4)]'
                    }`}
                  >
                    {plan.cta}
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

                  {/* Additional info for popular plan */}
                  {plan.highlighted && spotsLeft !== null && (
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      Places limitées • {spotsLeft} places restantes ce mois
                    </p>
                  )}
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </Card>
            </AnimatedContent>
          ))}
        </div>

        {/* Bottom trust indicators */}
        <AnimatedContent
          direction="vertical"
          distance={30}
          duration={0.6}
          delay={0.8}
        >
          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Paiement sécurisé SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Garantie 30 jours</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span>Support réactif 7j/7</span>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Pricing;