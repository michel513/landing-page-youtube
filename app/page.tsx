import StaggeredMenu from '@/components/StaggeredMenu';
import Hero from '@/components/Hero';
import WhyThisFormation from '@/components/WhyThisFormation';
import AboutFormateur from '@/components/AboutFormateur';
import ResultatsProuves from '@/components/ResultatsProuves';
import BonusInclus from '@/components/BonusInclus';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import ScrollToTop from '@/components/ScrollToTop';
import ModulesStack from '@/components/ModulesStack';

export default function Home() {
  return (
    <>
      <StaggeredMenu
        position="right"
        isFixed={true}
        logoUrl="/images/logo.png"
        items={[
          { label: 'Programme', ariaLabel: 'Voir le programme complet', link: '#programme' },
          { label: 'Résultats', ariaLabel: 'Voir les résultats', link: '#resultats' },
          { label: 'Bonus', ariaLabel: 'Découvrir les bonus', link: '#bonus' },
          { label: 'Tarifs', ariaLabel: 'Voir les tarifs', link: '#pricing' },
          { label: 'FAQ', ariaLabel: 'Questions fréquentes', link: '#faq' }
        ]}
        socialItems={[
          { label: 'YouTube', link: 'https://youtube.com/@daviddalyy?si=0Ke4-7FJjxy6vN9_' },
          { label: 'Twitter', link: 'https://x.com/element_221?s=21' },
          { label: 'Instagram', link: 'https://www.instagram.com/_daviddaly?igsh=eW9kaHZ6NmNlcDg3&utm_source=qr' }
        ]}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#FF0000"
        accentColor="#FF0000"
      />
      <main className="min-h-screen">
        <Hero />
        <WhyThisFormation />
        <AboutFormateur />
        <ModulesStack />
        <ResultatsProuves />
        <BonusInclus />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <ScrollToTop />
    </>
  );
}