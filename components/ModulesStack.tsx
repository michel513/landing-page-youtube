'use client';

import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
import SplitText from '@/components/SplitText';
import { PlayCircle, Zap, Target, Crown, Shield, Rocket } from 'lucide-react';

const ModulesStack = () => {
  const modules = [
    {
      id: 1,
      icon: PlayCircle,
      title: 'Les Fondamentaux',
      description: 'Maîtrisez les bases de YouTube Automation et comprenez le modèle économique des chaînes faceless.',
      gradient: 'from-red-500 to-orange-500',
      features: ['Modèle économique', 'Niches rentables', 'Mindset gagnant']
    },
    {
      id: 2,
      icon: Shield,
      title: 'Configuration Sécurisée',
      description: 'Configurez vos comptes de manière professionnelle avec proxies et antidetect pour éviter les bans.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Proxies résidentiels', 'Navigateurs antidetect', 'Protection maximale']
    },
    {
      id: 3,
      icon: Target,
      title: 'Recherche de Niches',
      description: 'Trouvez les niches les plus rentables et analysez la concurrence comme un pro.',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Analyse CPM', 'Validation niche', 'Micro-niches']
    },
    {
      id: 4,
      icon: Zap,
      title: 'Scripts Viraux',
      description: 'Créez des scripts qui captivent et maintiennent l\'attention avec 50-60% de rétention.',
      gradient: 'from-yellow-500 to-amber-500',
      features: ['Hooks magnétiques', 'Storytelling', 'Templates prêts']
    },
    {
      id: 5,
      icon: Rocket,
      title: 'Stack IA Complète',
      description: 'Maîtrisez tous les outils IA pour créer des vidéos pro : voix, images, montage.',
      gradient: 'from-green-500 to-emerald-500',
      features: ['ElevenLabs', 'Midjourney', 'ChatGPT & Claude']
    },
    {
      id: 6,
      icon: Crown,
      title: 'Monétisation & Scaling',
      description: 'Accélérez vers les 1000 abonnés, maximisez vos RPM et scalez jusqu\'à 10 chaînes.',
      gradient: 'from-orange-500 to-red-600',
      features: ['AdSense rapide', 'Sponsoring', 'Automatisation']
    }
  ];

  return (
    <section id="modules-stack" className="relative">
      {/* Header */}
      <div className="container mx-auto px-4 pt-20 text-center">
        <SplitText
          text="Parcours de Formation"
          tag="h2"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
          delay={40}
          duration={0.8}
          splitType="chars"
          from={{ opacity: 0, y: 100, rotateX: -90 }}
          to={{ opacity: 1, y: 0, rotateX: 0 }}
        />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Scrollez pour découvrir les 6 modules clés de votre transformation
        </p>
      </div>

      {/* ScrollStack Component */}
      <ScrollStack
        itemDistance={150}
        itemScale={0.05}
        itemStackDistance={40}
        stackPosition="20%"
        scaleEndPosition="10%"
        baseScale={0.8}
        useWindowScroll={true}
      >
        {modules.map((module) => (
          <ScrollStackItem
            key={module.id}
            itemClassName={`bg-gradient-to-br ${module.gradient} text-white`}
          >
            <div className="flex flex-col h-full">
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <module.icon className="w-8 h-8" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4">{module.title}</h3>

              {/* Description */}
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                {module.description}
              </p>

              {/* Features */}
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {module.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Module number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-white/10">
                {String(module.id).padStart(2, '0')}
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default ModulesStack;
