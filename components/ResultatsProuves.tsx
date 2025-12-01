'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import AnimatedContent from '@/components/AnimatedContent';
import SplitText from '@/components/SplitText';
import { Star, User } from 'lucide-react';

const ResultatsProuves = () => {
  const statsImages = [
    {
      src: '/images/state-1.png',
      alt: 'Revenus YouTube - $23,265.08',
      title: 'Revenus Réels',
      description: 'Captures d\'écran de revenus YouTube authentiques'
    },
    {
      src: '/images/state-2.png',
      alt: 'Statistiques YouTube - 481K vues',
      title: 'Vues Massives',
      description: 'Des millions de vues générées par nos stratégies'
    },
    {
      src: '/images/state-3.png',
      alt: 'Statistiques YouTube Analytics',
      title: 'Croissance Prouvée',
      description: 'Résultats mesurables et reproductibles'
    },
    {
      src: '/images/state-4.png',
      alt: 'Statistiques YouTube Analytics',
      title: 'Croissance Prouvée',
      description: 'Résultats mesurables et reproductibles'
    },
    {
      src: '/images/state-5.png',
      alt: 'Statistiques YouTube Analytics',
      title: 'Croissance Prouvée',
      description: 'Résultats mesurables et reproductibles'
    },
    {
      src: '/images/state-6.png',
      alt: 'Statistiques YouTube Analytics',
      title: 'Croissance Prouvée',
      description: 'Résultats mesurables et reproductibles'
    },
    {
      src: '/images/state-7.png',
      alt: 'Statistiques YouTube Analytics',
      title: 'Croissance Prouvée',
      description: 'Résultats mesurables et reproductibles'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Thomas M.',
      result: '12K$/mois en 4 mois',
      quote: 'La formation la plus complète sur YouTube Automation. J\'ai pu monétiser 3 chaînes en parallèle.',
      rating: 5,
      image: '/placeholder-avatar-1.jpg' // TODO: Remplacer par vraie photo
    },
    {
      id: 2,
      name: 'Sarah L.',
      result: '8K$/mois avec 2 chaînes',
      quote: 'Les scripts viraux et la stack IA ont changé ma vie. Résultats incroyables dès le premier mois.',
      rating: 5,
      image: '/placeholder-avatar-2.jpg' // TODO: Remplacer par vraie photo
    },
    {
      id: 3,
      name: 'Marc D.',
      result: '15K$/mois en 6 mois',
      quote: 'Configuration multi-comptes impeccable. Aucun problème de ban, croissance stable et rentable.',
      rating: 5,
      image: '/placeholder-avatar-3.jpg' // TODO: Remplacer par vraie photo
    }
  ];

  return (
    <section id="resultats" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Minimalist background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <AnimatedContent
            direction="vertical"
            distance={30}
            duration={0.6}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Résultats Concrets
              </span>
            </div>
          </AnimatedContent>

          <div className="mb-4">
            <SplitText
              text="Résultats Prouvés"
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
              Des métriques réelles obtenues par nos élèves en appliquant la méthode
            </p>
          </AnimatedContent>
        </div>

        {/* Real YouTube Analytics Screenshots */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {statsImages.map((stat, index) => (
            <AnimatedContent
              key={index}
              direction="vertical"
              distance={60}
              duration={0.7}
              delay={0.2 + index * 0.15}
            >
              <Card className="group relative overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-500 cursor-pointer hover:shadow-[0_20px_60px_rgba(255,0,0,0.1)] transform hover:scale-105">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Screenshot Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={stat.src}
                    alt={stat.alt}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </Card>
            </AnimatedContent>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto">
          <AnimatedContent
            direction="vertical"
            distance={30}
            duration={0.6}
            delay={0.6}
          >
            <div className="text-center mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ce Que Disent Nos Élèves
              </h3>
              <p className="text-muted-foreground">
                Rejoignez des centaines de créateurs qui transforment leur vie
              </p>
            </div>
          </AnimatedContent>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedContent
                key={testimonial.id}
                direction="vertical"
                distance={50}
                duration={0.7}
                delay={0.8 + index * 0.15}
              >
                <Card className="p-8 bg-card border-border hover:border-accent/30 transition-all duration-300 h-full flex flex-col">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground italic mb-6 flex-1 leading-relaxed">
                    &ldquo;{testimonial.quote}&ldquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    {/* Avatar placeholder */}
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                      <User className="w-6 h-6 text-muted-foreground" />
                      {/* TODO: Replace with actual image */}
                      {/* <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" /> */}
                    </div>

                    <div className="flex-1">
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-accent font-medium">
                        {testimonial.result}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimatedContent>
            ))}
          </div>

          {/* Bottom note */}
          <AnimatedContent
            direction="vertical"
            distance={30}
            duration={0.6}
            delay={1.4}
          >
            <div className="mt-16 text-center">
              <p className="text-sm text-muted-foreground italic max-w-2xl mx-auto">
                * Les résultats peuvent varier selon l&apos;engagement et l&apos;application de la méthode.
                Ces témoignages représentent des cas réels d&apos;élèves ayant suivi intégralement la formation.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default ResultatsProuves;
