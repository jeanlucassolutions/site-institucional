'use client'

import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const Contact = () => {
  const whatsappNumber = '5512982798846'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para serviços elétricos residenciais.'
  )}`

  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
              <MessageCircle size={18} />
              Entre em contato
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Solicite seu orçamento
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entre em contato e explique o serviço elétrico que você precisa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-electric-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-electric-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric-500 transition-all duration-300">
                <MessageCircle
                  size={24}
                  className="text-electric-600 group-hover:text-white"
                />
              </div>

              <h3 className="text-lg font-bold text-navy-800 mb-2">
                WhatsApp
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                Fale diretamente para solicitar um orçamento.
              </p>

              <span className="text-electric-600 font-semibold text-sm">
                Solicitar orçamento →
              </span>
            </a>

            {/* E-mail */}
            <a
              href="mailto:jeanlucas.solutions@gmail.com"
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-electric-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-electric-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric-500 transition-all duration-300">
                <Mail
                  size={24}
                  className="text-electric-600 group-hover:text-white"
                />
              </div>

              <h3 className="text-lg font-bold text-navy-800 mb-2">
                E-mail
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                Envie sua solicitação por e-mail.
              </p>

              <span className="text-electric-600 font-semibold text-sm break-all">
                jeanlucas.solutions@gmail.com
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/jeanlucas_eletricista/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-electric-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-electric-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric-500 transition-all duration-300">
                <Instagram
                  size={24}
                  className="text-electric-600 group-hover:text-white"
                />
              </div>

              <h3 className="text-lg font-bold text-navy-800 mb-2">
                Instagram
              </h3>

              <p className="text-gray-600 text-sm mb-3">
                Acompanhe nossos serviços e conteúdos.
              </p>

              <span className="text-electric-600 font-semibold text-sm">
                @jeanlucas_eletricista →
              </span>
            </a>

            {/* Localização */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-electric-500/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin
                  size={24}
                  className="text-electric-600"
                />
              </div>

              <h3 className="text-lg font-bold text-navy-800 mb-2">
                Área de atendimento
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                São José dos Campos - SP, principalmente Jardim da Granja,
                Jardim Uirá, Putim, Residencial Flamboyant, Jardim São José,
                Jardim Santa Inês e DCTA.
              </p>
            </div>

          </div>

          {/* Main CTA */}
          <div className="text-center mt-10">
            <WhatsAppButton
              variant="cta"
              text="Falar com Jean Lucas pelo WhatsApp"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
