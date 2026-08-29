'use client'

import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  variant?: 'default' | 'cta'
  text?: string
}

const WhatsAppButton = ({
  variant = 'default',
  text,
}: WhatsAppButtonProps) => {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5512982798846'

  const message = encodeURIComponent(
    'Olá! Gostaria de solicitar um orçamento para serviços elétricos residenciais.'
  )

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  const isCTA = variant === 'cta'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className={
        isCTA
          ? 'inline-flex items-center justify-center gap-2 px-6 py-3 bg-electric-500 text-navy-900 font-bold rounded-lg hover:bg-electric-400 transition-all duration-300 hover:scale-105 shadow-lg-light'
          : 'inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-electric-500 text-navy-900 font-semibold rounded-lg hover:bg-electric-400 transition-all duration-300'
      }
    >
      <MessageCircle size={20} />
      {text || (isCTA ? 'Solicitar orçamento' : 'WhatsApp')}
    </a>
  )
}

export default WhatsAppButton
