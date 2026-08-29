'use client'

import { MapPin, MessageCircle } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const ServiceArea = () => {
  const regions = [
  'Jardim da Granja',
  'Jardim Uirá',
  'Putim',
  'Residencial Flamboyant',
  'Jardim São José',
  'Jardim Santa Inês',
  'DCTA',
  'Jardim Satélite',
  'Bosque dos Eucaliptos',
  'Parque Industrial',
  'Jardim América',
  'Floradas de São José',
  'Jardim Oriente',
  'Jardim Morumbi',
  'Cidade Morumbi',
  'Jardim Aquarius',
  'Jardim das Indústrias',
  'Jardim das Colinas',
  'Urbanova',
  'Vila Ema',
  'Vila Adyana',
  'Jardim Esplanada',
  'Jardim Alvorada',
  'Jardim Cassiano Ricardo',
  'Centro',
]

  return (
    <section
      id="atendimento"
      className="py-16 md:py-24 bg-gradient-to-br from-navy-800 to-navy-700 text-white"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-electric-400 font-semibold text-sm mb-4">
            <MapPin size={18} />
            Área de atendimento
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Eletricista residencial em São José dos Campos
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Atendimento para serviços de elétrica residencial em São José dos
            Campos, com foco nas regiões e bairros abaixo.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {regions.map((region) => (
            <div
              key={region}
              className="group p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-electric-500/50 transition-all duration-300 text-center"
            >
              <MapPin
                size={20}
                className="text-electric-400 mx-auto mb-2 group-hover:scale-110 transition-transform"
              />

              <p className="font-semibold text-white">
                {region}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                São José dos Campos - SP
              </p>
            </div>
          ))}
        </div>

        {/* Location + CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm text-center">

            <div className="w-14 h-14 bg-electric-500 rounded-full flex items-center justify-center mx-auto mb-5">
              <MessageCircle
                size={28}
                className="text-navy-900"
              />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Precisa de um eletricista?
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Entre em contato pelo WhatsApp, explique o que está acontecendo
              e informe seu bairro. Vamos verificar a possibilidade de
              atendimento na sua região.
            </p>

            <WhatsAppButton
              variant="cta"
              text="Solicitar orçamento"
            />

            <p className="text-sm text-gray-400 mt-4">
              Atendimento residencial em São José dos Campos - SP
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default ServiceArea
