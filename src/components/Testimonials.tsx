'use client'

import { Star, MapPin, ExternalLink } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const Testimonials = () => {
  return (
    <section
      id="avaliacoes"
      className="py-16 md:py-24 bg-gradient-to-br from-navy-50 to-white"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
            <Star size={18} />
            Avaliações no Google
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Veja o que os clientes dizem
          </h2>

          <p className="text-lg text-gray-600">
            Confira diretamente no Google as experiências de clientes que
            contrataram os serviços da Jean Lucas Eletricista.
          </p>
        </div>

        {/* Google Review Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm text-center">

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={24}
                  className="text-electric-500 fill-electric-500"
                />
              ))}
            </div>

            {/* Google */}
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 mb-5">
              <MapPin size={18} className="text-electric-600" />
              Google
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-navy-800 mb-3">
              Avaliações reais de clientes
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto mb-7">
              Quer conhecer a experiência de quem já contratou nossos
              serviços? Acesse nosso perfil no Google e confira as avaliações
              publicadas pelos clientes.
            </p>

            {/* Google Button */}
            <a
              href="https://share.google/slNMDMZYIq0BFv93d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-electric-500 text-navy-900 font-bold rounded-lg hover:bg-electric-400 transition-all duration-300 hover:scale-105"
            >
              Ver avaliações no Google
              <ExternalLink size={17} />
            </a>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-4">
            Precisa de um eletricista residencial?
          </p>

          <WhatsAppButton
            variant="cta"
            text="Solicitar orçamento"
          />
        </div>

      </div>
    </section>
  )
}

export default Testimonials
