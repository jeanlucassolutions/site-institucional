'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const FAQ = () => {
  const faqs = [
    {
      question: 'Quais serviços de elétrica residencial você realiza?',
      answer:
        'Realizamos instalação de tomadas e interruptores, chuveiros elétricos, luminárias e iluminação, ventiladores de teto, disjuntores, quadros elétricos, fiação, instalações elétricas, manutenção e reparos.',
    },
    {
      question: 'Você atende em São José dos Campos?',
      answer:
        'Sim. O atendimento é realizado em São José dos Campos, principalmente nas regiões do Jardim da Granja, Jardim Uirá, Putim, Residencial Flamboyant, Jardim São José, Jardim Santa Inês e DCTA.',
    },
    {
      question: 'Como faço para solicitar um orçamento?',
      answer:
        'Você pode entrar em contato pelo WhatsApp e explicar o serviço que precisa. Assim podemos conversar sobre a sua necessidade e o orçamento.',
    },
    {
      question: 'Vocês fazem instalação de chuveiro elétrico?',
      answer:
        'Sim. Realizamos instalação e manutenção de chuveiros elétricos residenciais.',
    },
    {
      question: 'Vocês fazem manutenção em quadro elétrico?',
      answer:
        'Sim. Realizamos instalação, manutenção e reparos em quadros elétricos residenciais.',
    },
    {
      question: 'Vocês instalam tomadas e interruptores?',
      answer:
        'Sim. Realizamos instalação de tomadas, interruptores e pontos de luz em residências.',
    },
    {
      question: 'O serviço possui garantia?',
      answer:
        'Sim. A Jean Lucas Eletricista oferece garantia para o serviço realizado, conforme as condições combinadas para cada atendimento.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
            <HelpCircle size={18} />
            Dúvidas frequentes
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Perguntas frequentes
          </h2>

          <p className="text-lg text-gray-600">
            Tire suas principais dúvidas sobre serviços de elétrica residencial.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy-800">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-electric-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
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
