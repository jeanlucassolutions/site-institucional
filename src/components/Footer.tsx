
'use client'

import Image from 'next/image'
import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react'
import { trackWhatsAppClick } from '../lib/googleAds'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5512982798846'

  const whatsappMessage = encodeURIComponent(
    'Olá, Jean! Gostaria de solicitar um orçamento para serviços elétricos residenciais em São José dos Campos.'
  )

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const instagramUrl =
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    'https://www.instagram.com/jeanlucas_eletricista/'

  const googleBusinessUrl =
    process.env.NEXT_PUBLIC_GOOGLE_BUSINESS ||
    'https://share.google/slNMDMZYIq0BFv93d'

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <footer className="bg-navy-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Marca */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo-jean-lucas-eletricista.webp"
                  alt="Jean Lucas Eletricista residencial em São José dos Campos"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>

              <span className="font-bold text-white">
                Jean Lucas Eletricista
              </span>
            </div>

            <p className="text-sm text-gray-400">
              Serviços de instalação, manutenção e reparos elétricos residenciais em São José dos Campos - SP.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Navegação
            </h3>

            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-electric-500 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Entre em contato
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="text-gray-400 hover:text-electric-500 transition-colors duration-300 flex items-center gap-2"
                  aria-label="Entrar em contato pelo WhatsApp"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="mailto:jeanlucas.solutions@gmail.com"
                  className="text-gray-400 hover:text-electric-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={16} />
                  E-mail
                </a>
              </li>

              <li>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-electric-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href={googleBusinessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-electric-500 transition-colors duration-300 flex items-center gap-2"
                >
                  <MapPin size={16} />
                  Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Área de atendimento
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              São José dos Campos - SP, Brasil.
            </p>

            <div className="text-xs text-gray-500">
              <p>Atendimento residencial em:</p>

              <p className="text-electric-500 font-semibold mt-2">
                Toda São José dos Campos - SP
              </p>
            </div>
          </div>

        </div>

        {/* Divisor */}
        <div className="border-t border-navy-800 my-8"></div>

        {/* Rodapé inferior */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">

          <p>
            © {currentYear} Jean Lucas Eletricista.
            Todos os direitos reservados.
          </p>

          <p>
            Desenvolvido com{' '}
            <span className="text-electric-500">♡</span>{' '}
            para profissionais que se importam.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
