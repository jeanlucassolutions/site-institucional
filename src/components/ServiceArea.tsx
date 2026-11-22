
'use client'

import { MapPin } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const ServiceArea = () => {
  return (
    <section
      id="atendimento"
      className="py-16 md:py-24 bg-gradient-to-br from-navy-800 to-navy-700 text-white"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-electric-400 font-semibold text-sm mb-4">
            <MapPin size={18} aria-hidden="true" />
            Área de atendimento
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Eletricista Residencial em Toda São José dos Campos - SP
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Serviços de instalações, manutenção e reparos elétricos
            residenciais para casas e apartamentos em toda São José dos Campos.
          </p>
        </div>

        {/* Localização */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm text-center">

            <div className="w-14 h-14 bg-electric-500 rounded-full flex items-center justify-center mx-auto mb-5">
              <MapPin
                size={28}
                aria-hidden="true"
                className="text-navy-900"
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Atendimento em toda São José dos Campos
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Precisa de um eletricista residencial em São José dos Campos?
              A Jean Lucas Eletricista realiza instalações, manutenção
              e reparos elétricos em casas e apartamentos por toda a cidade.
              Entre em contato, explique sua necessidade e solicite
              um orçamento antes de iniciar o serviço.
            </p>

            <WhatsAppButton
              variant="cta"
              text="Solicitar orçamento pelo WhatsApp"
            />

            <p className="text-sm text-gray-400 mt-4">
              São José dos Campos - SP
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ServiceArea
