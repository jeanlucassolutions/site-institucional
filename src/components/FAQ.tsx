'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const FAQ = () => {
  const faqs = [
    {
      question: 'Quais serviços de elétrica residencial você realiza em São José dos Campos?',
      answer:
        'A Jean Lucas Eletricista realiza serviços de elétrica residencial em São José dos Campos, incluindo instalação de tomadas e interruptores, chuveiros elétricos, luminárias e iluminação, ventiladores de teto, disjuntores, quadros elétricos, fiação, instalações elétricas, manutenção e reparos.',
    },

    {
      question: 'Quanto custa um serviço de eletricista em São José dos Campos?',
      answer:
        'O valor depende do tipo de serviço, da instalação existente e da complexidade do reparo. Por isso, o orçamento é definido de acordo com a necessidade de cada atendimento. Entre em contato pelo WhatsApp, explique o problema e solicite um orçamento.',
    },

    {
      question: 'Como solicitar um orçamento de eletricista?',
      answer:
        'Você pode solicitar um orçamento pelo WhatsApp. Envie uma mensagem explicando o serviço que precisa ou o problema elétrico que está acontecendo. A partir dessas informações, podemos conversar sobre a necessidade do atendimento.',
    },

    {
      question: 'Vocês fazem instalação de chuveiro elétrico?',
      answer:
        'Sim. Realizamos instalação e manutenção de chuveiros elétricos residenciais. O serviço pode envolver a verificação da instalação elétrica, fiação, conexões, disjuntor e demais componentes necessários para uma instalação adequada.',
    },

    {
      question: 'Por que o disjuntor fica desarmando?',
      answer:
        'Um disjuntor pode desarmar por diferentes motivos, como sobrecarga no circuito, curto-circuito, problemas na fiação ou algum equipamento apresentando falha. O ideal é identificar a causa antes de simplesmente religar o disjuntor repetidamente.',
    },

    {
      question: 'Quando é necessário trocar o quadro elétrico?',
      answer:
        'A necessidade de troca ou adequação do quadro elétrico depende das condições da instalação, quantidade de circuitos, estado dos componentes e segurança do sistema. Um eletricista pode avaliar o quadro e identificar se é necessária manutenção, substituição ou adequação.',
    },

    {
      question: 'Vocês fazem instalação de tomadas e interruptores?',
      answer:
        'Sim. Realizamos instalação e substituição de tomadas, interruptores e pontos de luz em residências. Também podemos avaliar problemas como tomada aquecendo, mau contato, faíscas ou componentes danificados.',
    },

    {
      question: 'Vocês fazem manutenção e reparos elétricos residenciais?',
      answer:
        'Sim. Realizamos manutenção e reparos em instalações elétricas residenciais, incluindo problemas em tomadas, interruptores, iluminação, fiação, disjuntores e quadros elétricos.',
    },

    {
      question: 'Vocês instalam ventiladores de teto?',
      answer:
        'Sim. Realizamos instalação de ventiladores de teto em residências, verificando o ponto elétrico e as conexões necessárias para a instalação.',
    },

    {
      question: 'Quais bairros de São José dos Campos vocês atendem?',
      answer:
        'O atendimento é realizado em São José dos Campos, principalmente em regiões como Jardim da Granja, Jardim Uirá, Putim, Residencial Flamboyant, Jardim São José, Jardim Santa Inês, DCTA e outros bairros da cidade. Consulte a área de atendimento no menu do site ou entre em contato para confirmar a disponibilidade.',
    },

    {
      question: 'Vocês atendem Jardim da Granja, Jardim Uirá e Putim?',
      answer:
        'Sim. A Jean Lucas Eletricista atende essas regiões de São José dos Campos. Entre em contato pelo WhatsApp para explicar o serviço e confirmar o atendimento no seu endereço.',
    },

    {
      question: 'O serviço de elétrica residencial possui garantia?',
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

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
            <HelpCircle size={18} />
            Dúvidas frequentes
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Perguntas frequentes sobre elétrica residencial
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Encontre respostas para as principais dúvidas sobre serviços de
            eletricista residencial em São José dos Campos.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

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
                >
                  <span className="font-semibold text-navy-800 leading-relaxed">
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
                  <div className="px-5 md:px-6 pb-6">
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
