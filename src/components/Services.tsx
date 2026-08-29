'use client'

import { Zap, Lightbulb, Wind, Wrench, ShieldAlert, Box } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Instalação de Tomadas e Interruptores',
      description: 'Instalação profissional de tomadas, interruptores e pontos de luz com segurança.',
    },
    {
      icon: Lightbulb,
      title: 'Chuveiros Elétricos',
      description: 'Instalação e manutenção de chuveiros elétricos residenciais.',
    },
    {
      icon: Lightbulb,
      title: 'Luminárias e Iluminação',
      description: 'Instalação de luminárias, arandelas e sistemas de iluminação residencial.',
    },
    {
      icon: Wind,
      title: 'Ventiladores de Teto',
      description: 'Instalação e manutenção de ventiladores de teto.',
    },
    {
      icon: ShieldAlert,
      title: 'Disjuntores',
      description: 'Instalação e substituição de disjuntores com segurança.',
    },
    {
      icon: Box,
      title: 'Quadros Elétricos',
      description: 'Instalação, manutenção e reparos em quadros elétricos residenciais.',
    },
    {
      icon: Zap,
      title: 'Fiação e Instalações Elétricas',
      description: 'Instalação e distribuição de fiação elétrica conforme normas de segurança.',
    },
    {
      icon: Wrench,
      title: 'Manutenção e Reparos',
      description: 'Manutenção preventiva e reparos em instalações elétricas residenciais.',
    },
  ]

  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Serviços de Elétrica Residencial
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções elétricas para instalações, manutenções e reparos em sua residência.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-navy-50 to-white border border-gray-200 rounded-xl hover:shadow-lg-light transition-all duration-300 hover:border-electric-500"
              >
                <div className="w-12 h-12 bg-electric-500 bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric-500 group-hover:bg-opacity-100 transition-all duration-300">
                  <Icon size={24} className="text-electric-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <WhatsAppButton variant="cta" />
          <p className="text-sm text-gray-500 mt-4">
            Preciso de um eletricista
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
