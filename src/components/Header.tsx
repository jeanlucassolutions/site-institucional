'use client'

import Image from 'next/image'
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  ChevronDown,
} from 'lucide-react'
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

  const bairros = [
    'Bosque dos Eucaliptos',
    'Centro',
    'Cidade Morumbi',
    'DCTA',
    'Floradas de São José',
    'Jardim Alvorada',
    'Jardim América',
    'Jardim Aquarius',
    'Jardim Cassiano Ricardo',
    'Jardim da Granja',
    'Jardim das Colinas',
    'Jardim das Indústrias',
    'Jardim Esplanada',
    'Jardim Morumbi',
    'Jardim Oriente',
    'Jardim Santa Inês',
    'Jardim São José',
    'Jardim Satélite',
    'Jardim Uirá',
    'Parque Industrial',
    'Putim',
    'Residencial Flamboyant',
    'Urbanova',
    'Vila Adyana',
    'Vila Ema',
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
          <nav className="hidden md:flex items-center gap-5">

            {navItems.slice(0, 2).map((item) => (
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
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-electric-600 transition-colors duration-300"
                aria-expanded={areaOpen}
              >
                Área de Atendimento

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    areaOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown */}
              {areaOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                  <div className="w-[560px] max-h-[430px] overflow-y-auto rounded-xl border border-gray-200 bg-white p-5 shadow-xl">

                    {/* Cabeçalho do dropdown */}
                    <div className="mb-4 border-b border-gray-100 pb-3">
                      <p className="font-bold text-navy-800">
                        Área de Atendimento
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Eletricista residencial em São José dos Campos - SP
                      </p>
                    </div>

                    {/* Bairros */}
                    <div className="grid grid-cols-2 gap-1">
                      {bairros.map((bairro) => (
                        <a
                          key={bairro}
                          href="#atendimento"
                          onClick={() => setAreaOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-electric-500/10 hover:text-electric-600 transition-colors"
                        >
                          {bairro}
                        </a>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Restante do menu */}
            {navItems.slice(2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-electric-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}

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

              {navItems.slice(0, 2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-3 text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}

              {/* Área de Atendimento Mobile */}
              <button
                type="button"
                onClick={() => setAreaOpen(!areaOpen)}
                className="flex items-center justify-between px-3 py-3 text-left text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span>Área de Atendimento</span>

                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    areaOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Lista de bairros Mobile */}
              {areaOpen && (
                <div className="ml-3 mb-2 max-h-72 overflow-y-auto rounded-lg bg-gray-50 border border-gray-100 p-2">

                  <div className="px-3 py-2 mb-1">
                    <p className="text-xs font-semibold text-electric-600">
                      São José dos Campos - SP
                    </p>
                  </div>

                  {bairros.map((bairro) => (
                    <a
                      key={bairro}
                      href="#atendimento"
                      onClick={() => {
                        setAreaOpen(false)
                        setIsOpen(false)
                      }}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-electric-600 hover:bg-white rounded-md transition-colors"
                    >
                      {bairro}
                    </a>
                  ))}

                </div>
              )}

              {/* Sobre */}
              <a
                href="#sobre"
                onClick={() => setIsOpen(false)}
                className="px-3 py-3 text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Sobre
              </a>

              {/* FAQ */}
              <a
                href="#faq"
                onClick={() => setIsOpen(false)}
                className="px-3 py-3 text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                FAQ
              </a>

              {/* Contato */}
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="px-3 py-3 text-gray-700 hover:text-electric-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Contato
              </a>

              {/* Ligar agora - Mobile */}
              <a
                href="tel:+5512982798846"
                onClick={() => setIsOpen(false)}
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
                onClick={() => setIsOpen(false)}
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
