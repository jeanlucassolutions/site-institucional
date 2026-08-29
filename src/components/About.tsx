'use client'

import { CheckCircle, ShieldCheck, Home, MessageCircle } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const About = () => {
  const highlights = [
    'Atendimento para serviços de elétrica residencial',
    'Orçamento antes da execução do serviço',
    'Atendimento em São José dos Campos',
    'Garantia no serviço realizado',
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
              <Home size={18} />
              Elétrica Residencial
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              Soluções elétricas para sua residência
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A Jean Lucas Eletricista oferece serviços de elétrica residencial
              em São José dos Campos, desde pequenas instalações até
              manutenção e reparos elétricos.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              O objetivo é proporcionar um atendimento rápido, com orçamento
              e execução do serviço com atenção à segurança e à qualidade.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    size={20}
                    className="text-electric-600 flex-shrink-0 mt-0.5"
                  />

                  <span className="text-sm text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <WhatsAppButton
              variant="cta"
              text="Solicitar orçamento"
            />
          </div>

          {/* Trust Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-2xl p-8 md:p-10 text-white shadow-xl">
              
              <div className="w-14 h-14 bg-electric-500 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck
                  size={30}
                  className="text-navy-900"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Atendimento residencial
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Precisa instalar, reparar ou resolver algum problema elétrico
                em sua casa? Entre em contato pelo WhatsApp e explique o que
                está acontecendo.
              </p>

              <div className="flex items-center gap-3 text-electric-400">
                <MessageCircle size={22} />
                <span className="font-semibold">
                  Fale diretamente pelo WhatsApp
                </span>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-electric-500/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
