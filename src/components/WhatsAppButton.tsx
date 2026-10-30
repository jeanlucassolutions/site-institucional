
'use client'

import { MessageCircle } from 'lucide-react'
import { trackWhatsAppClick } from '../lib/googleAds'

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
      onClick={trackWhatsAppClick}
      aria-label="Solicitar orçamento pelo WhatsApp"
      className={
        isCTA
          ? 'inline-flex items-center justify-center gap-2 bg-electric-500 hover:bg-electric-600 text-navy-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-sm'
          : 'inline-flex items-center justify-center gap-2 bg-electric-500 hover:bg-electric-600 text-navy-900 font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm'
      }
    >
      <MessageCircle size={20} />
      {text || (isCTA ? 'Solicitar orçamento' : 'WhatsApp')}
    </a>
  )
}

export default WhatsAppButton
