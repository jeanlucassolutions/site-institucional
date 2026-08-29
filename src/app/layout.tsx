import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jean Lucas Eletricista | Eletricista Residencial em São José dos Campos',
  description:
    'Jean Lucas Eletricista — serviços de elétrica residencial em São José dos Campos. Instalação de tomadas, chuveiros, iluminação, ventiladores, disjuntores, quadros elétricos, fiação, manutenção e reparos.',
  keywords: [
    'eletricista em São José dos Campos',
    'eletricista residencial São José dos Campos',
    'eletricista Jardim da Granja',
    'eletricista Jardim Uirá',
    'eletricista Putim',
    'instalação de tomadas',
    'instalação de chuveiro',
    'quadro elétrico',
    'manutenção elétrica residencial',
  ],
  authors: [{ name: 'Jean Lucas Eletricista' }],
  openGraph: {
    title: 'Jean Lucas Eletricista | São José dos Campos',
    description:
      'Serviços de elétrica residencial em São José dos Campos. Solicite seu orçamento pelo WhatsApp.',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
