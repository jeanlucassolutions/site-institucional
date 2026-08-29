'use client'

import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5512982798846'
  const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para serviços elétricos residenciais.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-fade-in"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-electric-500 rounded-full animate-pulse opacity-75"></div>
        
        {/* Button */}
        <div className="relative w-14 h-14 bg-electric-500 text-white rounded-full flex items-center justify-center shadow-lg-light hover:bg-electric-600 transition-all duration-300 hover:shadow-xl-light hover:scale-110">
          <MessageCircle size={24} />
        </div>
      </div>
    </a>
  )
}

export default FloatingWhatsApp
