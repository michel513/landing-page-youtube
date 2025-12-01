'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import AnimatedContent from '@/components/AnimatedContent';
import SplitText from '@/components/SplitText';
import { Award, TrendingUp, Users, Target } from 'lucide-react';

const AboutFormateur = () => {
  const achievements = [
    {
      icon: TrendingUp,
      stat: '10K+',
      label: '$/mois générés'
    },
    {
      icon: Users,
      stat: '500+',
      label: 'Élèves formés'
    },
    {
      icon: Award,
      stat: '10+',
      label: 'Chaînes gérées'
    },
    {
      icon: Target,
      stat: '4.9/5',
      label: 'Note moyenne'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

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
                Votre Formateur
              </span>
            </div>
          </AnimatedContent>

          <div className="mb-4">
            <SplitText
              text="Expert YouTube Automation"
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
              Entrepreneur à succès dans l&apos;automatisation YouTube depuis 2020
            </p>
          </AnimatedContent>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Formateur Image */}
          <AnimatedContent
            direction="horizontal"
            distance={80}
            duration={0.8}
            delay={0.2}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image container */}
              <Card className="relative overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-500">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/photo-du-presentateur-la-formation.jpg"
                    alt="Formateur Expert YouTube Automation"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </Card>
            </div>
          </AnimatedContent>

          {/* Content */}
          <div className="space-y-8">
            <AnimatedContent
              direction="horizontal"
              distance={80}
              duration={0.8}
              delay={0.4}
            >
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Transformez Votre Vie avec YouTube Automation
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Depuis 2020, j&apos;ai bâti un empire de chaînes YouTube faceless générant
                    plus de <span className="text-primary font-semibold">10K$/mois</span> en
                    revenus passifs.
                  </p>

                  <p>
                    Ma mission : vous transmettre <span className="text-accent font-semibold">
                      exactement la même méthode</span> que j&apos;utilise pour créer et gérer
                    mes 10 chaînes rentables, sans jamais apparaître devant la caméra.
                  </p>

                  <p>
                    J&apos;ai formé plus de 500 élèves qui génèrent aujourd&apos;hui des revenus
                    récurrents grâce à YouTube Automation. C&apos;est maintenant votre tour.
                  </p>
                </div>

                {/* Key points */}
                <div className="space-y-3 pt-4">
                  {[
                    '✅ Aucune expérience technique requise',
                    '✅ Méthode 100% reproductible',
                    '✅ Support illimité pendant 1 an',
                    '✅ Mises à jour gratuites à vie'
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-foreground font-medium"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>

            {/* Stats grid */}
            <AnimatedContent
              direction="vertical"
              distance={40}
              duration={0.8}
              delay={0.6}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-background/50 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <achievement.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {achievement.stat}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFormateur;