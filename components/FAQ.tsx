'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AnimatedContent from '@/components/AnimatedContent';
import SplitText from '@/components/SplitText';
import { HelpCircle, MessageCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Combien de temps pour être monétisé ?',
      answer: 'En moyenne, nos élèves atteignent les 1000 abonnés et 4000h de visionnage en 45-60 jours en suivant la méthode pas à pas. Certains élèves très assidus y parviennent même en 30 jours. Tout dépend de votre engagement et de la régularité de publication (nous recommandons 3-4 vidéos/semaine).'
    },
    {
      id: 'faq-2',
      question: 'Ai-je besoin d\'expérience préalable ?',
      answer: 'Absolument pas ! Le Coaching est conçue pour les débutants complets. Nous partons de zéro et vous guidons étape par étape. Même si vous n\'avez jamais créé de vidéo ou utilisé d\'outils IA, vous serez capable de lancer votre première chaîne dès la fin du Module 3. Plus de 70% de nos élèves n\'avaient aucune expérience avant de commencer.'
    },
    {
      id: 'faq-3',
      question: 'Quels sont les coûts mensuels des outils ?',
      answer: 'Pour démarrer efficacement, comptez entre 50-100€/mois pour les outils essentiels (ElevenLabs, proxies, antidetect, stockage). Nous vous donnons accès à des crédits gratuits et des alternatives low-cost dans les bonus. Une fois monétisé, ces coûts sont largement couverts par vos revenus YouTube. Nous détaillons tous les coûts dans le Module 5.'
    },
    {
      id: 'faq-4',
      question: 'Comment éviter les désactivations de chaînes ?',
      answer: 'C\'est notre priorité n°1 ! Le Module 2 est entièrement dédié à la configuration sécurisée multi-comptes. Vous apprendrez à utiliser les proxies résidentiels, navigateurs antidetect, et à gérer les empreintes digitales. En suivant notre checklist de sécurité, le risque de ban est quasiment nul. Plus de 95% de nos élèves n\'ont jamais eu de problème de désactivation.'
    },
    {
      id: 'faq-5',
      question: 'Le Coaching est-il mis à jour ?',
      answer: 'Oui, absolument ! YouTube et les outils IA évoluent constamment. Le Coaching est mis à jour gratuitement tous les trimestres avec les dernières stratégies, outils et changements d\'algorithme. Vous recevez un email à chaque mise à jour. L\'accès à vie signifie que vous bénéficiez de toutes les futures améliorations sans payer un centime de plus.'
    },
    {
      id: 'faq-6',
      question: 'Y a-t-il un support après achat ?',
      answer: 'Bien sûr ! Vous avez accès à notre support email 7j/7 avec un délai de réponse moyen de 24h. La formule Coaching inclut un support prioritaire (réponse sous 12h) et des sessions 1-on-1. Vous rejoignez également notre communauté Discord privée où vous pouvez échanger avec d\'autres élèves et notre équipe.'
    }
  ];

  return (
    <section id="faq" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />

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
                Questions Fréquentes
              </span>
            </div>
          </AnimatedContent>

          <div className="mb-4">
            <SplitText
              text="Vos Questions, Nos Réponses"
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
              Tout ce que vous devez savoir avant de commencer votre aventure YouTube Automation
            </p>
          </AnimatedContent>
        </div>

        {/* FAQ Accordion */}
        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.8}
          delay={0.3}
        >
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className={`rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    index % 2 === 0 ? 'bg-background' : 'bg-muted/50'
                  }`}
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-start gap-4 text-left w-full">
                      {/* Question icon */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <HelpCircle className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Question text */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-base sm:text-lg group-hover:text-primary transition-colors pr-4">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-14 pr-4">
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedContent>

        {/* Contact CTA */}
        <AnimatedContent
          direction="vertical"
          distance={40}
          duration={0.8}
          delay={0.8}
        >
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-foreground font-semibold">
                    Une autre question ?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Notre équipe est là pour vous répondre
                  </p>
                </div>
              </div>
              <a
                href="mailto:support@youtubeautomation.com"
                className="text-sm text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
              >
                support@youtubeautomation.com
              </a>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default FAQ;