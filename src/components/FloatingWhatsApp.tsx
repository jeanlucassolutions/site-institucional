
'use client'

import { MessageCircle } from 'lucide-react'
import { trackWhatsAppClick } from '../lib/googleAds'

const FloatingWhatsApp = () => {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5512982798846'

  const message = encodeURIComponent(
    'Olá, Jean! Gostaria de solicitar um orçamento para instalação, manutenção ou reparo elétrico residencial em São José dos Campos.'
  )

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      aria-label="Solicitar orçamento de serviços elétricos pelo WhatsApp"
      title="Solicite seu orçamento pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <MessageCircle size={28} />
    </a>
  )
}

export default FloatingWhatsApp
