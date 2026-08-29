'use client'

import { AlertCircle, Zap, Lightbulb, Wind, ShieldAlert, Box, Wrench, Flame } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const Problems = () => {
  const problems = [
    { icon: AlertCircle, label: 'Tomada com Problema' },
    { icon: Zap, label: 'Interruptor com Problema' },
    { icon: Lightbulb, label: 'Chuveiro Elétrico' },
    { icon: ShieldAlert, label: 'Disjuntor Desarmando' },
    { icon: Lightbulb, label: 'Problemas de Iluminação' },
    { icon: Wind, label: 'Ventilador de Teto' },
    { icon: Wrench, label: 'Problemas na Fiação' },
    { icon: Box, label: 'Quadro Elétrico' },
    { icon: Zap, label: 'Manutenção Elétrica' },
  ]

  return (
    <section id="problemas" className="py-16 md:py-24 bg-gradient-to-br from-navy-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Está com algum problema elétrico em casa?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Não sabe exatamente qual é o problema? Entre em contato e explique o que está acontecendo.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md-light hover:border-electric-500 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              >
                <div className="w-12 h-12 bg-electric-500 bg-opacity-10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-electric-500 group-hover:bg-opacity-100 transition-all duration-300">
                  <Icon size={24} className="text-electric-600 group-hover:text-white" />
                </div>
                <p className="text-sm font-medium text-navy-800">
                  {problem.label}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton variant="cta" />
          <p className="text-sm text-gray-500 mt-4">
            Falar com o eletricista
          </p>
        </div>
      </div>
    </section>
  )
}

export default Problems
