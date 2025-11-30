import StaggeredMenu from '@/components/StaggeredMenu';
import Hero from '@/components/Hero';
import WhyThisFormation from '@/components/WhyThisFormation';
import AboutFormateur from '@/components/AboutFormateur';
import ResultatsProuves from '@/components/ResultatsProuves';
import BonusInclus from '@/components/BonusInclus';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
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
          { label: 'YouTube', link: 'https://youtube.com' },
          { label: 'Twitter', link: 'https://twitter.com' },
          { label: 'Instagram', link: 'https://instagram.com' }
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
      <Footer />
      <ScrollToTop />
    </>
  );
}