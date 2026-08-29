'use client'

import { Zap, Clock, CheckCircle, Shield, Wrench } from 'lucide-react'

const Differentials = () => {
  const differentials = [
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Resposta rápida às solicitações de orçamento.',
    },
    {
      icon: Zap,
      title: 'Orçamento',
      description: 'Orçamento detalhado e transparente para seus serviços.',
    },
    {
      icon: Wrench,
      title: 'Experiência',
      description: 'Profissional com experiência em serviços residenciais.',
    },
    {
      icon: CheckCircle,
      title: 'Serviço Residencial',
      description: 'Especializado em demandas de elétrica residencial.',
    },
    {
      icon: Shield,
      title: 'Garantia',
      description: 'Trabalho realizado com segurança e qualidade.',
    },
  ]

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Por que escolher a Jean Lucas Eletricista?
          </h2>
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
                <div className="w-16 h-16 bg-electric-500 bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-500 group-hover:bg-opacity-100 transition-all duration-300">
                  <Icon size={32} className="text-electric-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  {diff.title}
                </h3>
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
