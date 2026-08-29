'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const FAQ = () => {
  const faqs = [
    {
      question: 'Qual eletricista atende em São José dos Campos?',
      answer:
        'A Jean Lucas Eletricista oferece atendimento para serviços de elétrica residencial em São José dos Campos - SP. O atendimento é voltado para instalações, manutenções e reparos elétricos em residências, principalmente nas regiões do Jardim da Granja, Jardim Uirá, Putim, Residencial Flamboyant, Jardim São José, Jardim Santa Inês e DCTA.',
    },
    {
      question: 'Quais serviços de elétrica residencial a Jean Lucas Eletricista realiza?',
      answer:
        'A Jean Lucas Eletricista realiza serviços de elétrica residencial como instalação de tomadas e interruptores, pontos de luz, luminárias, chuveiros elétricos, ventiladores de teto, disjuntores, quadros elétricos, fiação e instalações elétricas, além de manutenção e reparos.',
    },
    {
      question: 'Vocês fazem instalação de chuveiro elétrico?',
      answer:
        'Sim. A Jean Lucas Eletricista realiza instalação e manutenção de chuveiros elétricos residenciais. O serviço pode envolver a avaliação do ponto elétrico, fiação, disjuntor e demais componentes relacionados à instalação, conforme a necessidade do imóvel.',
    },
    {
      question: 'O que fazer quando o disjuntor fica desarmando?',
      answer:
        'Um disjuntor que desarma repetidamente pode indicar sobrecarga, problema em algum equipamento ou alguma falha na instalação elétrica. Evite insistir em religá-lo várias vezes sem identificar a causa. O ideal é solicitar uma avaliação de um eletricista para verificar a instalação e identificar o problema.',
    },
    {
      question: 'Vocês fazem instalação e troca de tomadas e interruptores?',
      answer:
        'Sim. A Jean Lucas Eletricista realiza instalação e substituição de tomadas, interruptores e pontos de luz em residências. O serviço pode ser realizado tanto em instalações novas quanto em pontos que precisam ser substituídos ou reparados.',
    },
    {
      question: 'Vocês fazem manutenção em quadro elétrico?',
      answer:
        'Sim. A Jean Lucas Eletricista realiza serviços relacionados a quadros elétricos residenciais, incluindo manutenção, reparos, instalação e substituição de componentes conforme a necessidade identificada durante a avaliação.',
    },
    {
      question: 'Vocês fazem instalação de luminárias e iluminação?',
      answer:
        'Sim. São realizados serviços de instalação de luminárias, pontos de iluminação e outros componentes de iluminação residencial, sempre considerando as condições da instalação elétrica existente.',
    },
    {
      question: 'Vocês instalam ventilador de teto?',
      answer:
        'Sim. A Jean Lucas Eletricista realiza instalação de ventiladores de teto em residências, verificando as condições necessárias para a instalação e o funcionamento adequado do equipamento.',
    },
    {
      question: 'Vocês fazem serviços de fiação elétrica?',
      answer:
        'Sim. A Jean Lucas Eletricista realiza serviços relacionados à fiação e às instalações elétricas residenciais, incluindo distribuição e adequação de circuitos conforme a necessidade do serviço.',
    },
    {
      question: 'Quanto custa um eletricista residencial?',
      answer:
        'O valor de um serviço elétrico depende do tipo de problema ou instalação, dos materiais necessários, das condições encontradas no local e da complexidade do serviço. Por isso, o orçamento é analisado de acordo com cada necessidade antes da execução.',
    },
    {
      question: 'Como solicitar um orçamento de eletricista?',
      answer:
        'Para solicitar um orçamento, entre em contato pelo WhatsApp e explique qual serviço você precisa ou qual problema está acontecendo. Se possível, envie fotos ou vídeos do local para ajudar na avaliação inicial. A partir dessas informações, podemos conversar sobre a necessidade do atendimento.',
    },
    {
      question: 'Quais bairros de São José dos Campos vocês atendem?',
      answer:
        'O atendimento é realizado em São José dos Campos, principalmente no Jardim da Granja, Jardim Uirá, Putim, Residencial Flamboyant, Jardim São José, Jardim Santa Inês e DCTA. Se você estiver em outra região da cidade, entre em contato para verificar a possibilidade de atendimento.',
    },
    {
      question: 'Quando devo chamar um eletricista?',
      answer:
        'É recomendado procurar um eletricista quando houver problemas como tomadas ou interruptores com mau funcionamento, disjuntores desarmando repetidamente, falhas na iluminação, problemas de fiação, necessidade de instalar chuveiro ou ventilador de teto, alterações no quadro elétrico ou outras situações que envolvam a instalação elétrica da residência.',
    },
    {
      question: 'O serviço possui garantia?',
      answer:
        'A Jean Lucas Eletricista oferece garantia para o serviço realizado, conforme as condições combinadas em cada atendimento. As condições da garantia podem variar de acordo com o tipo de serviço e devem ser esclarecidas no momento do orçamento.',
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-electric-600 mb-4">
            <HelpCircle size={18} />
            Dúvidas sobre elétrica residencial
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Perguntas frequentes sobre eletricista residencial
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Encontre respostas para as principais dúvidas sobre serviços
            elétricos, instalações, manutenção, orçamento e atendimento em
            São José dos Campos.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-electric-500 shadow-sm'
                    : 'border-gray-200'
                }`}
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
        <div className="max-w-2xl mx-auto text-center mt-12">
          <div className="bg-gradient-to-br from-navy-50 to-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-navy-800 mb-2">
              Ainda ficou com alguma dúvida?
            </h3>

            <p className="text-gray-600 mb-6">
              Explique sua necessidade pelo WhatsApp e veja como podemos
              ajudar com seu serviço de elétrica residencial.
            </p>

            <WhatsAppButton
              variant="cta"
              text="Falar com o eletricista"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default FAQ
