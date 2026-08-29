'use client'

import { Menu, X, Zap } from 'lucide-react'
import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Problemas', href: '#problemas' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Atendimento', href: '#atendimento' },
  ]

  const handleClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo / Brand */}
          <a
            href="#inicio"
            className="flex items-center gap-3"
            onClick={handleClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-electric-500 to-electric-600 rounded-lg flex items-center justify-center">
              <Zap size={22} className="text-navy-900" />
            </div>

            <div className="leading-tight">
              <span className="block font-bold text-navy-900">
                Jean Lucas
              </span>
              <span className="block text-xs font-medium text-gray-500">
                Eletricista Residencial
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-electric-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <WhatsAppButton text="Orçamento" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-navy-900 hover:text-electric-600 transition-colors"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleClick}
                  className="px-3 py-3 text-sm font-medium text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-3 px-3">
                <WhatsAppButton
                  variant="cta"
                  text="Solicitar orçamento"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
