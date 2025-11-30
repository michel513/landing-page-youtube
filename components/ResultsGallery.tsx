'use client';

import Masonry from '@/components/Masonry';
import SplitText from '@/components/SplitText';

const ResultsGallery = () => {
  // Placeholder images - remplacez par vos vraies captures d'écran
  const results = [
    {
      id: '1',
      img: 'https://picsum.photos/seed/yt1/800/600',
      url: '#',
      height: 600
    },
    {
      id: '2',
      img: 'https://picsum.photos/seed/yt2/800/900',
      url: '#',
      height: 900
    },
    {
      id: '3',
      img: 'https://picsum.photos/seed/yt3/800/700',
      url: '#',
      height: 700
    },
    {
      id: '4',
      img: 'https://picsum.photos/seed/yt4/800/500',
      url: '#',
      height: 500
    },
    {
      id: '5',
      img: 'https://picsum.photos/seed/yt5/800/800',
      url: '#',
      height: 800
    },
    {
      id: '6',
      img: 'https://picsum.photos/seed/yt6/800/650',
      url: '#',
      height: 650
    },
    {
      id: '7',
      img: 'https://picsum.photos/seed/yt7/800/750',
      url: '#',
      height: 750
    },
    {
      id: '8',
      img: 'https://picsum.photos/seed/yt8/800/550',
      url: '#',
      height: 550
    },
    {
      id: '9',
      img: 'https://picsum.photos/seed/yt9/800/700',
      url: '#',
      height: 700
    },
    {
      id: '10',
      img: 'https://picsum.photos/seed/yt10/800/600',
      url: '#',
      height: 600
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">

          <SplitText
            text="Chaînes de Nos Élèves"
            tag="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            delay={30}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 50, rotateX: -45 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques captures des chaînes créées par nos élèves
            <br />
            <span className="text-sm text-primary font-semibold">
              (Cliquez sur une image pour l&apos;agrandir)
            </span>
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="max-w-7xl mx-auto" style={{ minHeight: '800px' }}>
          <Masonry
            items={results}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="random"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={true}
          />
        </div>

        {/* Bottom note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground italic">
            * Toutes les chaînes présentées ont été créées avec la méthode enseignée dans la formation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;
