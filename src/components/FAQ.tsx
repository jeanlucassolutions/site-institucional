'use client'

import { ChevronDown, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const FAQ = () => {
  const faqs = [
    {
      question: 'Quais serviços de elétrica residencial você realiza?',
      answer:
        'A Jean Lucas Eletricista realiza serviços de elétrica residencial como instalação de tomadas e interruptores, chuveiros elétricos, luminárias, iluminação, ventiladores de teto, disjuntores, quadros elétricos, fiação, instalações elétricas, manutenção e reparos.',
    },
    {
      question: 'Você atende como eletricista em São José dos Campos?',
      answer:
        'Sim. A Jean Lucas Eletricista realiza atendimento de elétrica residencial em São José dos Campos, com atendimento principalmente nas regiões informadas neste site.',
    },
    {
      question: 'Quais regiões de São José dos Campos você atende?',
      answer:
        'O atendimento é realizado principalmente no Jardim da Granja, Jardim Uirá, Putim, Residencial Flamboyant, Jardim São José, Jardim Santa Inês e região do DCTA. Para outros locais de São José dos Campos, consulte a disponibilidade.',
    },
    {
      question: 'Como solicitar um orçamento de eletricista?',
      answer:
        'Para solicitar um orçamento, entre em contato pelo WhatsApp e explique qual serviço elétrico você precisa. Se possível, envie fotos ou vídeos do problema para facilitar a avaliação inicial.',
    },
    {
      question: 'É possível enviar fotos do problema elétrico pelo WhatsApp?',
      answer:
        'Sim. Você pode enviar fotos e explicar o que está acontecendo pelo WhatsApp. As informações ajudam a entender melhor a situação antes do atendimento.',
    },
    {
      question: 'Vocês fazem instalação de tomadas e interruptores?',
      answer:
        'Sim. Realizamos instalação e substituição de tomadas, interruptores e pontos de luz em residências, avaliando a instalação existente e a necessidade do serviço.',
    },
    {
      question: 'Vocês fazem instalação de chuveiro elétrico?',
      answer:
        'Sim. Realizamos instalação e manutenção de chuveiros elétricos residenciais, incluindo avaliação das condições da instalação elétrica relacionada ao equipamento.',
    },
    {
      question: 'Por que o disjuntor fica desarmando?',
      answer:
        'Um disjuntor pode desarmar por diferentes motivos, como sobrecarga, curto-circuito ou algum problema na instalação ou equipamento conectado. O ideal é identificar a causa antes de simplesmente religá-lo repetidamente.',
    },
    {
      question: 'Vocês fazem troca e instalação de disjuntores?',
      answer:
        'Sim. Realizamos instalação e substituição de disjuntores residenciais. A escolha e a instalação devem considerar as características do circuito elétrico e a carga atendida.',
    },
    {
      question: 'Vocês fazem manutenção em quadro elétrico?',
      answer:
        'Sim. Realizamos instalação, manutenção e reparos em quadros elétricos residenciais, verificando os componentes e as condições gerais da instalação.',
    },
    {
      question: 'Por que uma tomada pode esquentar?',
      answer:
        'Uma tomada pode apresentar aquecimento por diferentes motivos, como mau contato, conexão inadequada, sobrecarga ou problemas na instalação. Se a tomada estiver muito quente, com cheiro de queimado ou sinais de derretimento, é importante interromper o uso e solicitar uma avaliação.',
    },
    {
      question: 'O que fazer quando uma tomada está dando choque?',
      answer:
        'Não continue utilizando uma tomada que esteja causando choque. O problema pode estar relacionado à instalação elétrica, aterramento ou equipamento conectado. O mais seguro é interromper o uso e solicitar uma avaliação profissional.',
    },
    {
      question: 'Vocês fazem instalação de luminárias e iluminação?',
      answer:
        'Sim. Realizamos instalação de luminárias, pontos de iluminação, arandelas e outros serviços relacionados à iluminação residencial.',
    },
    {
      question: 'Vocês instalam ventilador de teto?',
      answer:
        'Sim. Realizamos instalação de ventiladores de teto em residências, verificando as condições necessárias para a instalação e conexão elétrica do equipamento.',
    },
    {
      question: 'Vocês fazem reparos em fiação elétrica?',
      answer:
        'Sim. Realizamos serviços relacionados à fiação e instalações elétricas residenciais, incluindo manutenção e reparos conforme a necessidade identificada no atendimento.',
    },
    {
      question: 'Quando devo chamar um eletricista residencial?',
      answer:
        'É recomendado procurar um eletricista quando houver sinais como disjuntores desarmando com frequência, tomadas aquecendo, cheiro de queimado, faíscas, choques elétricos, quedas de energia em determinados circuitos ou outros comportamentos anormais na instalação.',
    },
    {
      question: 'Vocês fazem manutenção elétrica residencial?',
      answer:
        'Sim. Realizamos manutenção e reparos em instalações elétricas residenciais, buscando identificar problemas e realizar os serviços necessários com atenção à segurança e à qualidade.',
    },
    {
      question: 'O serviço de elétrica residencial possui garantia?',
      answer:
        'Sim. A Jean Lucas Eletricista oferece garantia para o serviço realizado, conforme as condições combinadas para cada atendimento.',
    },
    {
      question: 'Quanto custa um serviço de eletricista em São José dos Campos?',
      answer:
        'O valor depende do tipo de serviço, das condições da instalação e da complexidade do problema. Para saber o valor do seu atendimento, entre em contato pelo WhatsApp e explique o que precisa ser feito.',
    },
    {
      question: 'Como contratar a Jean Lucas Eletricista?',
      answer:
        'É simples: entre em contato pelo WhatsApp, explique o serviço ou problema elétrico e envie fotos ou vídeos se tiver. Assim podemos conversar sobre a necessidade e o orçamento do atendimento.',
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
            Perguntas frequentes sobre elétrica residencial
          </h2>

          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre serviços de eletricista, instalações,
            manutenção e problemas elétricos em São José dos Campos.
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
                  aria-controls={`faq-answer-${index}`}
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
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 pb-5"
                  >
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
