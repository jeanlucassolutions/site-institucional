'use client'

import { MessageCircle, Star } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const Testimonials = () => {
  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-gradient-to-br from-navy-50 to-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
            <Star size={18} />
            Avaliações
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            A opinião dos nossos clientes
          </h2>

          <p className="text-lg text-gray-600">
            A satisfação de cada cliente é parte importante do nosso trabalho.
          </p>
        </div>

        {/* Review Placeholder */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm text-center">

            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={22}
                  className="text-electric-500 fill-electric-500"
                />
              ))}
            </div>

            <MessageCircle
              size={42}
              className="text-electric-500 mx-auto mb-5"
            />

            <h3 className="text-xl font-bold text-navy-800 mb-3">
              Avaliações reais do Google
            </h3>

            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto mb-7">
              Confira as avaliações de clientes que já contrataram os serviços
              da Jean Lucas Eletricista.
            </p>

            <a
              href="https://share.google/slNMDMZYIq0BFv93d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-electric-500 text-navy-900 font-bold rounded-lg hover:bg-electric-400 transition-all duration-300 hover:scale-105"
            >
              Ver avaliações no Google
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-4">
            Precisa de um serviço elétrico residencial?
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
