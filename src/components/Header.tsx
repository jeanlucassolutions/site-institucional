'use client'

import Image from 'next/image'
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [areaOpen, setAreaOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ]

  const neighborhoods = [
    'Bosque dos Eucaliptos',
    'Buquirinha',
    'Campo dos Alemães',
    'Centro',
    'DCTA',
    'Eugênio de Melo',
    'Floradas de São José',
    'Jardim Aquarius',
    'Jardim América',
    'Jardim da Granja',
    'Jardim das Indústrias',
    'Jardim Esplanada',
    'Jardim Imperial',
    'Jardim Morumbi',
    'Jardim Oriente',
    'Jardim Satélite',
    'Jardim São José',
    'Jardim Santa Inês',
    'Jardim Uirá',
    'Parque Industrial',
    'Putim',
    'Residencial Flamboyant',
    'Urbanova',
  ]

  const closeMenus = () => {
    setIsOpen(false)
    setAreaOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center"
            onClick={closeMenus}
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
          <nav className="hidden md:flex items-center gap-5">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-electric-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}

            {/* Área de Atendimento */}
            <div
              className="relative"
              onMouseEnter={() => setAreaOpen(true)}
              onMouseLeave={() => setAreaOpen(false)}
            >
              <button
                type="button"
                onClick={() => setAreaOpen(!areaOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-electric-600 transition-colors duration-300 py-3"
                aria-expanded={areaOpen}
              >
                Área de atendimento
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    areaOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown */}
              {areaOpen && (
                <div className="absolute right-0 top-full w-72 pt-2">
                  <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-xl">

                    <div className="px-3 py-2 mb-1 border-b border-gray-100">
                      <p className="text-xs font-bold uppercase tracking-wide text-electric-600">
                        Bairros atendidos
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        São José dos Campos - SP
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-1 max-h-80 overflow-y-auto">
                      {neighborhoods.map((neighborhood) => (
                        <a
                          key={neighborhood}
                          href="#atendimento"
                          onClick={() => setAreaOpen(false)}
                          className="rounded-lg px-3 py-2 text-xs text-gray-700 hover:bg-electric-50 hover:text-electric-600 transition-colors"
                        >
                          {neighborhood}
                        </a>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Ligar agora */}
            <a
              href="tel:+5512982798846"
              className="flex items-center gap-2 border-2 border-electric-500 text-electric-600 hover:bg-electric-500 hover:text-navy-900 font-semibold px-4 py-2.5 rounded-lg transition-all duration-300"
            >
              <Phone size={18} />
              Ligar agora
            </a>

            {/* Orçamento */}
            <a
              href="https://wa.me/5512982798846"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-electric-500 hover:bg-electric-600 text-navy-900 font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 shadow-sm"
            >
              <MessageCircle size={18} />
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
                  onClick={closeMenus}
                  className="px-3 py-3 text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}

              {/* Área de Atendimento Mobile */}
              <div className="border-t border-gray-100 mt-2 pt-2">

                <button
                  type="button"
                  onClick={() => setAreaOpen(!areaOpen)}
                  className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  <span>Área de atendimento</span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      areaOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {areaOpen && (
                  <div className="mt-1 mx-3 rounded-lg bg-gray-50 border border-gray-100 p-2">

                    <p className="px-2 py-2 text-xs font-bold uppercase tracking-wide text-electric-600">
                      Bairros atendidos
                    </p>

                    <div className="grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
                      {neighborhoods.map((neighborhood) => (
                        <a
                          key={neighborhood}
                          href="#atendimento"
                          onClick={closeMenus}
                          className="rounded-md px-2 py-2 text-xs text-gray-600 hover:bg-white hover:text-electric-600 transition-colors"
                        >
                          {neighborhood}
                        </a>
                      ))}
                    </div>

                  </div>
                )}

              </div>

              {/* Ligar agora - Mobile */}
              <a
                href="tel:+5512982798846"
                onClick={closeMenus}
                className="mt-2 flex items-center justify-center gap-2 border-2 border-electric-500 text-electric-600 hover:bg-electric-500 hover:text-navy-900 font-semibold px-5 py-3 rounded-lg transition-all"
              >
                <Phone size={20} />
                Ligar agora
              </a>

              {/* Orçamento - Mobile */}
              <a
                href="https://wa.me/5512982798846"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenus}
                className="mt-2 flex items-center justify-center gap-2 bg-electric-500 hover:bg-electric-600 text-navy-900 font-semibold px-5 py-3 rounded-lg text-center transition-all"
              >
                <MessageCircle size={20} />
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
