'use client'

import Image from 'next/image'
import { Zap, Lightbulb, Wind, Wrench, ShieldAlert, Box } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'

const Services = () => {
  const services = [
    {
      image: '/images/servico-tomadas.png',
      icon: Zap,
      title: 'Instalação de Tomadas e Interruptores',
      description:
        'Instalação profissional de tomadas, interruptores e pontos de luz com segurança.',
    },
    {
      image: '/images/servico-chuveiro.png',
      icon: Lightbulb,
      title: 'Chuveiros Elétricos',
      description:
        'Instalação e manutenção de chuveiros elétricos residenciais.',
    },
    {
      image: '/images/servico-iluminacao.png',
      icon: Lightbulb,
      title: 'Luminárias e Iluminação',
      description:
        'Instalação de luminárias, arandelas e sistemas de iluminação residencial.',
    },
    {
      image: null,
      icon: Wind,
      title: 'Ventiladores de Teto',
      description:
        'Instalação e manutenção de ventiladores de teto.',
    },
    {
      image: '/images/servico-quadro-eletrico.png',
      icon: ShieldAlert,
      title: 'Disjuntores',
      description:
        'Instalação e substituição de disjuntores com segurança.',
    },
    {
      image: '/images/servico-quadro-eletrico.png',
      icon: Box,
      title: 'Quadros Elétricos',
      description:
        'Instalação, manutenção e reparos em quadros elétricos residenciais.',
    },
    {
      image: null,
      icon: Zap,
      title: 'Fiação e Instalações Elétricas',
      description:
        'Instalação e distribuição de fiação elétrica conforme normas de segurança.',
    },
    {
      image: null,
      icon: Wrench,
      title: 'Manutenção e Reparos',
      description:
        'Manutenção preventiva e reparos em instalações elétricas residenciais.',
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
                className="group overflow-hidden bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-electric-500"
              >

                {/* Image */}
                {service.image ? (
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                  </div>
                ) : (
                  <div className="h-44 w-full bg-gradient-to-br from-navy-50 to-gray-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-electric-500/10 rounded-2xl flex items-center justify-center">
                      <Icon
                        size={32}
                        className="text-electric-600"
                      />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">

                  {/* Icon */}
                  <div className="w-10 h-10 bg-electric-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-electric-500 transition-all duration-300">
                    <Icon
                      size={20}
                      className="text-electric-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-navy-800 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                </div>
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
