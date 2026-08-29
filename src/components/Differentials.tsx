'use client'

import { Zap, Clock, CheckCircle, Shield, Wrench } from 'lucide-react'

const Differentials = () => {
  const differentials = [
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description:
        'Resposta ágil para entender sua necessidade e combinar o atendimento.',
    },
    {
      icon: Zap,
      title: 'Orçamento Transparente',
      description:
        'Você recebe informações claras sobre o serviço antes da execução.',
    },
    {
      icon: Wrench,
      title: 'Experiência',
      description:
        'Experiência em instalações, manutenções e reparos elétricos residenciais.',
    },
    {
      icon: CheckCircle,
      title: 'Especialista Residencial',
      description:
        'Atendimento focado em soluções elétricas para casas e apartamentos.',
    },
    {
      icon: Shield,
      title: 'Segurança e Qualidade',
      description:
        'Serviços realizados com atenção à segurança e ao bom funcionamento da instalação.',
    },
  ]

  return (
    <section
      id="diferenciais"
      className="py-16 md:py-24 bg-white"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-electric-600 uppercase tracking-wider mb-3">
            Por que contratar?
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Por que escolher Jean Lucas Eletricista?
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendimento residencial com foco em segurança, qualidade e
            transparência em cada serviço.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((diff, index) => {
            const Icon = diff.icon

            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-navy-50 to-white border border-gray-200 rounded-xl hover:shadow-lg-light hover:border-electric-500 transition-all duration-300 text-center"
              >

                {/* Icon */}
                <div className="w-16 h-16 bg-electric-500/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-electric-500 transition-all duration-300">
                  <Icon
                    size={32}
                    className="text-electric-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {diff.description}
                </p>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Differentials
