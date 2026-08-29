'use client'

import Image from 'next/image'
import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5512982798846'

  const whatsappLink = `https://wa.me/${whatsappNumber}`

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
                  src="/images/logo-jean-lucas-eletricista.png"
                  alt="Jean Lucas Eletricista"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="font-bold text-white">
                Jean Lucas
              </span>
            </div>

            <p className="text-sm text-gray-400">
              Eletricista residencial em São José dos Campos
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Menu
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
              Contato
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-electric-500 transition-colors duration-300 flex items-center gap-2"
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
              Localização
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              São José dos Campos - SP, Brasil
            </p>

            <div className="text-xs text-gray-500">
              <p>Atendimento em:</p>

              <p className="text-electric-500 font-semibold mt-2">
                Jardim da Granja, Jardim Uirá, Putim,
                Residencial Flamboyant, Jardim São José,
                Jardim Santa Inês, DCTA
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
