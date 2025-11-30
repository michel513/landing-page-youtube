'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import AnimatedContent from '@/components/AnimatedContent';
import SplitText from '@/components/SplitText';
import {
  AlertCircle,
  Ban,
  TrendingDown,
  HelpCircle,
  Shield,
  Network,
  Zap,
  Sparkles
} from 'lucide-react';

const WhyThisFormation = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Chaînes désactivées sans raison',
      description: 'Pertes financières et démotivation',
      color: 'text-red-500'
    },
    {
      icon: Ban,
      title: 'Shadowbans et restrictions',
      description: 'Visibilité réduite et croissance limitée',
      color: 'text-red-500'
    },
    {
      icon: TrendingDown,
      title: 'Rétention faible, pas de vues',
      description: 'Contenu qui ne performe pas',
      color: 'text-red-500'
    },
    {
      icon: HelpCircle,
      title: 'Confusion sur les outils IA 2025',
      description: 'Trop d\'options, aucune clarté',
      color: 'text-red-500'
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: 'Configuration multi-comptes sécurisée',
      description: 'Protégez vos chaînes efficacement',
      color: 'text-accent'
    },
    {
      icon: Network,
      title: 'Proxies et antidetect professionnels',
      description: 'Anonymat et sécurité maximale',
      color: 'text-accent'
    },
    {
      icon: Zap,
      title: 'Scripts viraux 50-60% rétention',
      description: 'Contenus optimisés pour performer',
      color: 'text-accent'
    },
    {
      icon: Sparkles,
      title: 'Outils IA dernière génération',
      description: 'Stack complète et maîtrisée',
      color: 'text-accent'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

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
                La Différence
              </span>
            </div>
          </AnimatedContent>

          <div className="mb-4">
            <SplitText
              text="Pourquoi Cette Formation ?"
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
              Nous résolvons les vrais problèmes que rencontrent les créateurs de chaînes YouTube automation
            </p>
          </AnimatedContent>
        </div>

        {/* Two columns layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Left Column - Problems */}
          <div className="space-y-4">
            <AnimatedContent
              direction="horizontal"
              distance={50}
              duration={0.6}
              delay={0.2}
              reverse={true}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Les Problèmes</h3>
                </div>
                <p className="text-muted-foreground">
                  Ce qui bloque 90% des créateurs
                </p>
              </div>
            </AnimatedContent>

            {problems.map((problem, index) => (
              <AnimatedContent
                key={index}
                direction="horizontal"
                distance={60}
                duration={0.7}
                delay={0.3 + index * 0.1}
                reverse={true}
              >
                <Card className="group p-6 bg-card border-border hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] cursor-pointer transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors duration-300">
                        <problem.icon className={`w-6 h-6 ${problem.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-red-500 transition-colors duration-300">
                        {problem.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedContent>
            ))}
          </div>

          {/* Right Column - Solutions */}
          <div className="space-y-4">
            <AnimatedContent
              direction="horizontal"
              distance={50}
              duration={0.6}
              delay={0.2}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Les Solutions</h3>
                </div>
                <p className="text-muted-foreground">
                  Ce que vous apprendrez dans la formation
                </p>
              </div>
            </AnimatedContent>

            {solutions.map((solution, index) => (
              <AnimatedContent
                key={index}
                direction="horizontal"
                distance={60}
                duration={0.7}
                delay={0.3 + index * 0.1}
              >
                <Card className="group p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,184,0,0.1)] cursor-pointer transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <solution.icon className={`w-6 h-6 ${solution.color}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {solution.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedContent>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.8}
          delay={1}
        >
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-5 h-5 text-accent animate-pulse" />
              <span className="font-semibold text-foreground">
                Passez des problèmes aux solutions dès aujourd&apos;hui
              </span>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default WhyThisFormation;