
'use client'

import Image from 'next/image'
import {
  MessageCircle,
  ShieldCheck,
  Zap,
  MapPin,
  Phone,
  AlertCircle,
} from 'lucide-react'
import { type MouseEvent } from 'react'
import {
  trackWhatsAppClick,
  trackPhoneClick,
} from '../lib/googleAds'

const Hero = () => {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5512982798846'

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá, Jean Lucas! Gostaria de solicitar um orçamento de serviço elétrico.'
  )}`

  const handlePhoneClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault()
    trackPhoneClick(event.currentTarget.href)
  }

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      {/* Fundo */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          {/* TEXTO */}
          <div className="relative z-10 max-w-2xl">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-2 text-sm font-medium text-electric-400">
              <Zap size={16} />
              Eletricista residencial em São José dos Campos
            </div>

            {/* Título */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Instalações elétricas com{' '}
              <span className="text-electric-500">
                segurança e confiança
              </span>
            </h1>

            {/* Descrição */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Serviços de elétrica residencial para instalações, reparos e
              manutenção em toda São José dos Campos - SP.
            </p>

            {/* Botões principais */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-500"
              >
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </a>

              {/* Telefone - Emergência */}
              <a
                href="tel:+5512982798846"
                onClick={handlePhoneClick}
                className="inline-flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-red-500 bg-red-600 px-6 py-3 font-bold text-white shadow-lg shadow-red-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 sm:min-w-[220px]"
              >
                <span className="flex items-center gap-2">
                  <Phone size={20} />
                  Ligar agora
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-red-100">
                  <AlertCircle size={13} />
                  Emergência elétrica?
                </span>
              </a>

            </div>

            {/* Indicadores de confiança */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-electric-500">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Atendimento profissional
                  </p>

                  <p className="text-sm text-gray-400">
                    Serviço elétrico residencial
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-electric-500">
                  <Zap size={22} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Orçamento rápido
                  </p>

                  <p className="text-sm text-gray-400">
                    Fale diretamente com o eletricista
                  </p>
                </div>
              </div>

            </div>

            {/* Localização */}
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-400">
              <MapPin
                size={20}
                className="shrink-0 text-electric-500"
              />

              <span>
                Atendimento em toda São José dos Campos - SP
              </span>
            </div>

          </div>

          {/* IMAGEM */}
          <div className="relative z-10">

            <div className="absolute -inset-4 rounded-3xl bg-electric-500/10 blur-3xl" />

            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:h-[520px] lg:h-[580px]">

              <Image
                src="/images/hero-jean-lucas-eletricista.png"
                alt="Eletricista residencial realizando manutenção em quadro elétrico"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{
                  objectPosition: '78% center',
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/30 via-transparent to-transparent" />

              {/* Selo */}
              <div className="absolute bottom-5 left-5 w-fit max-w-[280px] rounded-xl border border-white/10 bg-navy-900/85 p-3 backdrop-blur-md shadow-lg">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-electric-500 text-navy-900">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      Segurança em primeiro lugar
                    </p>

                    <p className="mt-0.5 text-xs text-gray-300">
                      Serviço elétrico residencial
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Faixa inferior */}
      <div className="relative border-t border-white/10 bg-navy-950/60">
        <div className="container mx-auto grid grid-cols-1 gap-4 px-4 py-5 sm:grid-cols-3">

          <div className="flex items-center justify-center gap-3 text-sm">
            <ShieldCheck
              size={20}
              className="text-electric-500"
            />
            <span className="font-medium text-gray-200">
              Atendimento profissional
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 text-sm">
            <Zap
              size={20}
              className="text-electric-500"
            />
            <span className="font-medium text-gray-200">
              Soluções elétricas residenciais
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 text-sm">
            <MapPin
              size={20}
              className="text-electric-500"
            />
            <span className="font-medium text-gray-200">
              São José dos Campos - SP
            </span>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero
