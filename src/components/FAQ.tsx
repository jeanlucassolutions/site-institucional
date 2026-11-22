
'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const FAQ = () => {
  const faqs = [
    {
      question: 'Quais serviços de elétrica residencial você realiza em São José dos Campos?',
      answer:
        'A Jean Lucas Eletricista realiza instalações, manutenção e reparos elétricos residenciais em São José dos Campos - SP. Entre os serviços estão instalação de tomadas, interruptores, chuveiros elétricos, luminárias, ventiladores de teto, disjuntores, manutenção de quadros elétricos e reparos na fiação.',
    },

    {
      question: 'Quanto custa um serviço de eletricista em São José dos Campos?',
      answer:
        'O valor depende do tipo de serviço, das condições da instalação elétrica e da complexidade do trabalho. Entre em contato pelo WhatsApp, explique o que precisa e solicite um orçamento antes de iniciar o serviço.',
    },

    {
      question: 'Como solicitar um orçamento de eletricista residencial?',
      answer:
        'Você pode solicitar seu orçamento diretamente pelo WhatsApp. Envie uma mensagem explicando o problema elétrico ou o serviço que deseja realizar. Se possível, envie fotos ou vídeos para facilitar a avaliação inicial.',
    },

    {
      question: 'Vocês fazem instalação de chuveiro elétrico?',
      answer:
        'Sim. Realizamos instalação e substituição de chuveiros elétricos residenciais. O serviço pode incluir a verificação da fiação, das conexões, do disjuntor e dos demais componentes necessários para uma instalação adequada.',
    },

    {
      question: 'Por que o disjuntor fica desarmando?',
      answer:
        'Um disjuntor pode desarmar por diferentes motivos, como sobrecarga no circuito, curto-circuito, problemas na fiação ou falha em algum equipamento. É importante identificar a causa do problema antes de tentar religar o disjuntor repetidamente.',
    },

    {
      question: 'Quando é necessário trocar ou fazer manutenção no quadro elétrico?',
      answer:
        'A necessidade de manutenção, substituição ou adequação do quadro elétrico depende das condições da instalação, do estado dos componentes e da distribuição dos circuitos. Uma avaliação pode identificar quais serviços são necessários.',
    },

    {
      question: 'Vocês fazem instalação de tomadas e interruptores?',
      answer:
        'Sim. Realizamos instalação e substituição de tomadas, interruptores e pontos de luz em residências. Também atendemos problemas como tomadas aquecendo, mau contato, faíscas e componentes danificados.',
    },

    {
      question: 'Vocês fazem manutenção e reparos elétricos residenciais?',
      answer:
        'Sim. Realizamos manutenção e reparos em instalações elétricas residenciais em São José dos Campos, incluindo problemas em tomadas, interruptores, iluminação, fiação, disjuntores e quadros elétricos.',
    },

    {
      question: 'Vocês instalam ventiladores de teto?',
      answer:
        'Sim. Realizamos instalação de ventiladores de teto em residências, verificando as condições do ponto elétrico e as conexões necessárias para a instalação.',
    },

    {
      question: 'Quais regiões vocês atendem em São José dos Campos?',
      answer:
        'A Jean Lucas Eletricista atende serviços de elétrica residencial em toda São José dos Campos - SP. Entre em contato pelo WhatsApp para informar seu endereço e consultar a disponibilidade do atendimento.',
    },

    {
      question: 'O serviço de elétrica residencial possui garantia?',
      answer:
        'Sim. A Jean Lucas Eletricista oferece garantia para o serviço realizado, conforme as condições combinadas para cada atendimento. Entre em contato para esclarecer as condições referentes ao serviço solicitado.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
            <HelpCircle size={18} />
            Dúvidas frequentes
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Perguntas Frequentes sobre Serviços de Eletricista
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Tire suas dúvidas sobre instalações, manutenção e reparos
            elétricos residenciais com atendimento em São José dos Campos.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`

            return (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-electric-500/50 transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="font-semibold text-navy-800 leading-relaxed">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className={`flex-shrink-0 text-electric-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    className="px-5 md:px-6 pb-6"
                  >
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-4">
            Não encontrou a resposta que procura?
          </p>

          <WhatsAppButton
            variant="cta"
            text="Falar com o eletricista"
          />
        </div>

      </div>
    </section>
  )
}

export default FAQ
