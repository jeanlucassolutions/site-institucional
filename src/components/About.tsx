
'use client'

import { CheckCircle, ShieldCheck, Home } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const About = () => {
  const highlights = [
    'Instalações elétricas residenciais',
    'Manutenção e reparos elétricos',
    'Orçamento antes de iniciar o serviço',
    'Atendimento em toda São José dos Campos',
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
              <Home size={18} />
              Jean Lucas Eletricista
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-6">
              Eletricista Residencial em São José dos Campos
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              A Jean Lucas Eletricista oferece serviços de elétrica
              residencial em São José dos Campos - SP. Realizamos
              instalações, manutenção e reparos elétricos para casas
              e apartamentos, ajudando a resolver problemas e atender
              às necessidades da sua instalação elétrica.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Cada atendimento começa com a compreensão do que você
              precisa. Antes de iniciar o serviço, você recebe
              informações claras sobre a solução indicada e o
              orçamento, para decidir com tranquilidade.
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
                Segurança em primeiro lugar
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8">
                Uma instalação elétrica precisa de avaliação e
                cuidados adequados. Por isso, cada serviço é
                considerado de acordo com as condições da instalação
                e a necessidade do imóvel, priorizando uma execução
                organizada e segura.
              </p>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400 mb-2">
                  Precisa de um eletricista residencial?
                </p>

                <p className="text-electric-400 font-semibold">
                  Solicite seu orçamento pelo WhatsApp.
                </p>
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
