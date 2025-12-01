'use client';

import { Youtube, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    legal: [
      { label: 'Conditions Générales de Vente', href: '#cgv' },
      { label: 'Politique de Confidentialité', href: '#privacy' },
      { label: 'Mentions Légales', href: '#legal' },
      { label: 'Contact', href: '#contact' }
    ],
    social: [
      { icon: Youtube, label: 'YouTube', href: 'https://youtube.com', color: 'hover:text-primary' },
      { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-blue-400' },
      { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-500' },
      { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-600' },
      { icon: Mail, label: 'Email', href: 'mailto:contact@youtubeautomation.com', color: 'hover:text-accent' }
    ]
  };

  return (
    <footer className="relative bg-[#1A1A1A] border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Youtube className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                YouTube Automation 2025
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Le coaching complète pour créer et gérer des chaînes YouTube faceless rentables.
              De 0 à 10K$/mois avec l&apos;IA et l&apos;automatisation.
            </p>
          </div>

          {/* Column 2 - Legal Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Informations
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Suivez-nous
            </h4>
            <div className="flex gap-3">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 transform hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter signup (optional) */}
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-3">
                Restez informé des dernières nouveautés
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                <button
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-semibold transition-colors duration-200"
                  type="button"
                >
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          {/* Bottom bar - Copyright & Additional info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} YouTube Automation. Tous droits réservés.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#top"
                className="hover:text-white transition-colors duration-200"
              >
                Retour en haut
              </a>
              <span className="hidden sm:inline">•</span>
              <p className="text-xs">
                Fait avec ❤️ pour les créateurs ambitieux
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-xs text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              <strong className="text-gray-500">Avertissement :</strong> Les résultats présentés sur ce site sont des exemples réels mais ne constituent pas une garantie de résultats identiques.
              Vos revenus dépendent de nombreux facteurs incluant votre engagement, votre travail, et les conditions du marché.
              Nous ne garantissons aucun revenu spécifique. Cette formation est destinée à des fins éducatives uniquement.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle gradient at top for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </footer>
  );
};

export default Footer;
