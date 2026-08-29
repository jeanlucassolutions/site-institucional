'use client'

import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Atendimento', href: '#atendimento' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/images/logo-jean-lucas-eletricista.png"
              alt="Jean Lucas Eletricista Residencial"
              width={180}
              height={60}
              priority
              className="h-14 w-auto object-contain"
            />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-electric-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://wa.me/5512982798846"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-electric-500 hover:bg-electric-600 text-navy-900 font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm"
            >
              Orçamento
            </a>
          </nav>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-electric-600 transition-colors"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <nav className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/5512982798846"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-electric-500 hover:bg-electric-600 text-navy-900 font-semibold px-5 py-3 rounded-lg text-center transition-all"
              >
                Solicitar orçamento
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
