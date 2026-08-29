'use client'

import { ArrowRight, Zap } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-900 text-white py-20 md:py-28"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-electric-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-electric-500/5 rounded-full blur-3xl" />

        <div className="absolute top-20 right-10 opacity-10">
          <Zap size={180} className="text-electric-500" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-electric-500/30 bg-electric-500/10 text-electric-400 text-sm font-semibold">
            <Zap size={16} />
            Elétrica Residencial em São José dos Campos
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Eletricista Residencial em{' '}
            <span className="text-electric-500">
              São José dos Campos
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Serviços elétricos residenciais com atendimento rápido,
            orçamento e garantia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppButton
              variant="cta"
              text="Solicitar orçamento pelo WhatsApp"
            />

            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Ver serviços
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Supporting text */}
          <p className="mt-6 text-sm text-gray-400">
            Atendimento residencial em São José dos Campos e regiões próximas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
