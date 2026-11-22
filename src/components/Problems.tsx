
'use client'

import {
  AlertCircle,
  Zap,
  Lightbulb,
  Wind,
  ShieldAlert,
  Box,
  Wrench,
} from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const Problems = () => {
  const whatsappNumber = '5512982798846'

  const problems = [
    {
      icon: AlertCircle,
      label: 'Tomada esquentando ou sem funcionar',
      message: 'Olá, Jean! Estou com uma tomada esquentando ou sem funcionar e gostaria de solicitar uma avaliação.',
    },
    {
      icon: Zap,
      label: 'Interruptor com defeito',
      message: 'Olá, Jean! Estou com um problema em um interruptor da minha residência e gostaria de solicitar um orçamento.',
    },
    {
      icon: Lightbulb,
      label: 'Chuveiro elétrico com problema',
      message: 'Olá, Jean! Estou com um problema no chuveiro elétrico e gostaria de solicitar uma avaliação.',
    },
    {
      icon: ShieldAlert,
      label: 'Disjuntor desarmando',
      message: 'Olá, Jean! Meu disjuntor está desarmando frequentemente e gostaria de solicitar uma avaliação.',
    },
    {
      icon: Lightbulb,
      label: 'Lâmpadas piscando ou sem energia',
      message: 'Olá, Jean! Estou com problemas na iluminação da minha residência e gostaria de solicitar um orçamento.',
    },
    {
      icon: Wind,
      label: 'Instalação de ventilador',
      message: 'Olá, Jean! Preciso instalar ou realizar manutenção em um ventilador de teto.',
    },
    {
      icon: Wrench,
      label: 'Problema na fiação elétrica',
      message: 'Olá, Jean! Estou com um problema na fiação elétrica da minha residência e gostaria de solicitar uma avaliação.',
    },
    {
      icon: Box,
      label: 'Problema no quadro elétrico',
      message: 'Olá, Jean! Estou com um problema no quadro elétrico da minha residência e gostaria de solicitar uma avaliação.',
    },
    {
      icon: Zap,
      label: 'Curto-circuito ou falta de energia',
      message: 'Olá, Jean! Estou com um possível curto-circuito ou falta de energia na minha residência e preciso de ajuda.',
    },
  ]

  const handleProblemClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    )
  }

  return (
    <section
      id="problemas"
      className="py-16 md:py-24 bg-gradient-to-br from-navy-50 to-white"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Está com algum problema elétrico em casa?
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Problemas com tomadas, chuveiro, disjuntores, fiação ou falta de
            energia? Selecione uma opção e solicite seu orçamento pelo WhatsApp.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleProblemClick(problem.message)}
                className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-electric-500 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-electric-500/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-electric-500 transition-all duration-300">
                  <Icon
                    size={24}
                    className="text-electric-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                {/* Label */}
                <p className="text-sm font-medium text-navy-800 group-hover:text-electric-600 transition-colors">
                  {problem.label}
                </p>
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton variant="cta" />

          <p className="text-sm text-gray-500 mt-4">
            Solicite seu orçamento com Jean Lucas Eletricista em São José dos Campos.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Problems
