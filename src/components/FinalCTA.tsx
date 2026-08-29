'use client'

import { ArrowRight, MessageCircle, Zap } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 border border-white/10 p-8 md:p-12">

          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-56 h-56 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-20 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center">

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 bg-electric-500 rounded-full flex items-center justify-center">
              <Zap size={30} className="text-navy-900" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de um eletricista residencial?
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
              Entre em contato pelo WhatsApp, explique o que você precisa
              e solicite seu orçamento.
            </p>

            {/* CTA */}
            <WhatsAppButton
              variant="cta"
              text="Solicitar orçamento pelo WhatsApp"
            />

            {/* Supporting information */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 text-sm text-gray-400">

              <div className="flex items-center gap-2">
                <MessageCircle size={17} className="text-electric-500" />
                Atendimento pelo WhatsApp
              </div>

              <div className="hidden sm:block text-gray-600">
                •
              </div>

              <div className="flex items-center gap-2">
                <ArrowRight size={17} className="text-electric-500" />
                São José dos Campos
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
