'use client'

import { MessageCircle, ShieldCheck, Zap } from 'lucide-react'

const Hero = () => {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5512982798846'

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá, Jean Lucas! Gostaria de solicitar um orçamento de serviço elétrico.'
  )}`

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-electric-500/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Texto */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-2 text-sm font-medium text-electric-400">
              <Zap size={16} />
              Eletricista residencial em São José dos Campos
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Instalações elétricas com{' '}
              <span className="text-electric-500">segurança e confiança</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Serviços de elétrica residencial para instalações, reparos e
              manutenção em São José dos Campos e região.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-electric-500 px-6 py-4 font-bold text-navy-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-electric-400"
              >
                <MessageCircle size={20} />
                Solicitar orçamento
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition-all duration-300 hover:border-electric-500 hover:text-electric-500"
              >
                Ver serviços
              </a>
            </div>

            {/* Confiança */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-electric-500">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <p className="font-semibold text-white">Atendimento profissional</p>
                  <p className="text-sm text-gray-400">
                    Serviço residencial
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-electric-500">
                  <Zap size={21} />
                </div>
                <div>
                  <p className="font-semibold text-white">Orçamento pelo WhatsApp</p>
                  <p className="text-sm text-gray-400">
                    Atendimento rápido
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Destaque visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-4 rounded-3xl bg-electric-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Jean Lucas</p>
                    <p className="text-xl font-bold text-white">
                      Eletricista Residencial
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-500 text-2xl font-bold text-navy-900 shadow-lg">
                    JL
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <Zap className="text-electric-500" size={24} />
                      <div>
                        <p className="font-semibold text-white">
                          Serviços elétricos
                        </p>
                        <p className="text-sm text-gray-400">
                          Residenciais e manutenção
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="text-electric-500" size={24} />
                      <div>
                        <p className="font-semibold text-white">
                          Segurança em primeiro lugar
                        </p>
                        <p className="text-sm text-gray-400">
                          Soluções para sua residência
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-electric-500 p-5 text-center">
                    <p className="font-bold text-navy-900">
                      Atendimento em São José dos Campos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
