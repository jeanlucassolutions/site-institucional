
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const siteUrl = 'https://jean-lucas-eletricista.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      'Jean Lucas Eletricista | Eletricista Residencial em São José dos Campos',
    template: '%s | Jean Lucas Eletricista',
  },

  description:
    'Precisa de eletricista residencial em São José dos Campos? Serviços de instalação, manutenção e reparos elétricos para casas e apartamentos. Solicite um orçamento.',

  keywords: [
    'eletricista em São José dos Campos',
    'eletricista residencial São José dos Campos',
    'eletricista SJC',
    'eletricista perto de mim',
    'eletricista residencial',
    'instalação elétrica residencial',
    'manutenção elétrica residencial',
    'reparo elétrico residencial',
    'instalação de tomadas',
    'instalação de interruptores',
    'instalação de chuveiro elétrico',
    'instalação de luminárias',
    'instalação de iluminação',
    'instalação de ventilador de teto',
    'troca de disjuntor',
    'instalação de disjuntor',
    'manutenção de quadro elétrico',
    'reparos em fiação elétrica',
  ],

  authors: [
    {
      name: 'Jean Lucas Eletricista',
    },
  ],

  creator: 'Jean Lucas Eletricista',

  applicationName: 'Jean Lucas Eletricista',

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Jean Lucas Eletricista',

    title:
      'Jean Lucas Eletricista | Eletricista Residencial em São José dos Campos',

    description:
      'Instalações, manutenção e reparos elétricos residenciais em São José dos Campos - SP. Entre em contato e solicite um orçamento.',

    images: [
      {
        url: '/images/hero-jean-lucas-eletricista.png',
        width: 1200,
        height: 630,
        alt:
          'Jean Lucas Eletricista - Serviços de elétrica residencial em São José dos Campos',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Jean Lucas Eletricista | Eletricista Residencial em São José dos Campos',

    description:
      'Eletricista residencial em São José dos Campos para instalações, manutenção e reparos elétricos.',

    images: ['/images/hero-jean-lucas-eletricista.png'],
  },

  icons: {
    icon: '/images/logo-jean-lucas-eletricista.png',
    shortcut: '/images/logo-jean-lucas-eletricista.png',
    apple: '/images/logo-jean-lucas-eletricista.png',
  },
}

/* =========================================================
   DADOS ESTRUTURADOS — EMPRESA
   ========================================================= */

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',

  '@id': `${siteUrl}/#business`,

  name: 'Jean Lucas Eletricista',

  url: siteUrl,

  logo: `${siteUrl}/images/logo-jean-lucas-eletricista.png`,

  image: `${siteUrl}/images/hero-jean-lucas-eletricista.png`,

  description:
    'Eletricista residencial em São José dos Campos - SP. Serviços de instalação, manutenção e reparos elétricos residenciais.',

  telephone: '+55 12 98279-8846',

  areaServed: {
    '@type': 'City',
    name: 'São José dos Campos',
    containedInPlace: {
      '@type': 'State',
      name: 'São Paulo',
    },
  },

  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55 12 98279-8846',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },

  sameAs: [
    'https://www.instagram.com/jeanlucas_eletricista/',
    'https://share.google/slNMDMZYIq0BFv93d',
  ],
}

/* =========================================================
   DADOS ESTRUTURADOS — PERGUNTAS FREQUENTES
   ========================================================= */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quais serviços de elétrica residencial você realiza em São José dos Campos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A Jean Lucas Eletricista realiza instalações, manutenção e reparos elétricos residenciais em São José dos Campos - SP. Entre os serviços estão instalação de tomadas, interruptores, chuveiros elétricos, luminárias, ventiladores de teto, disjuntores, manutenção de quadros elétricos e reparos na fiação.',
      },
    },

    {
      '@type': 'Question',
      name: 'Quanto custa um serviço de eletricista em São José dos Campos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'O valor depende do tipo de serviço, das condições da instalação elétrica e da complexidade do trabalho. Entre em contato pelo WhatsApp, explique o que precisa e solicite um orçamento antes de iniciar o serviço.',
      },
    },

    {
      '@type': 'Question',
      name: 'Como solicitar um orçamento de eletricista residencial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Você pode solicitar seu orçamento diretamente pelo WhatsApp. Envie uma mensagem explicando o problema elétrico ou o serviço que deseja realizar. Se possível, envie fotos ou vídeos para facilitar a avaliação inicial.',
      },
    },

    {
      '@type': 'Question',
      name: 'Vocês fazem instalação de chuveiro elétrico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação e substituição de chuveiros elétricos residenciais. O serviço pode incluir a verificação da fiação, das conexões, do disjuntor e dos demais componentes necessários para uma instalação adequada.',
      },
    },

    {
      '@type': 'Question',
      name: 'Por que o disjuntor fica desarmando?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Um disjuntor pode desarmar por diferentes motivos, como sobrecarga no circuito, curto-circuito, problemas na fiação ou falha em algum equipamento. É importante identificar a causa do problema antes de tentar religar o disjuntor repetidamente.',
      },
    },

    {
      '@type': 'Question',
      name: 'Quando é necessário trocar ou fazer manutenção no quadro elétrico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A necessidade de manutenção, substituição ou adequação do quadro elétrico depende das condições da instalação, do estado dos componentes e da distribuição dos circuitos. Uma avaliação pode identificar quais serviços são necessários.',
      },
    },

    {
      '@type': 'Question',
      name: 'Vocês fazem instalação de tomadas e interruptores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação e substituição de tomadas, interruptores e pontos de luz em residências. Também atendemos problemas como tomadas aquecendo, mau contato, faíscas e componentes danificados.',
      },
    },

    {
      '@type': 'Question',
      name: 'Vocês fazem manutenção e reparos elétricos residenciais?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos manutenção e reparos em instalações elétricas residenciais em São José dos Campos, incluindo problemas em tomadas, interruptores, iluminação, fiação, disjuntores e quadros elétricos.',
      },
    },

    {
      '@type': 'Question',
      name: 'Vocês instalam ventiladores de teto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação de ventiladores de teto em residências, verificando as condições do ponto elétrico e as conexões necessárias para a instalação.',
      },
    },

    {
      '@type': 'Question',
      name: 'Quais regiões vocês atendem em São José dos Campos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A Jean Lucas Eletricista atende serviços de elétrica residencial em toda São José dos Campos - SP. Entre em contato pelo WhatsApp para informar seu endereço e consultar a disponibilidade do atendimento.',
      },
    },

    {
      '@type': 'Question',
      name: 'O serviço de elétrica residencial possui garantia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. A Jean Lucas Eletricista oferece garantia para o serviço realizado, conforme as condições combinadas para cada atendimento. Entre em contato para esclarecer as condições referentes ao serviço solicitado.',
      },
    },
  ],
}

/* =========================================================
   ROOT LAYOUT
   ========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18473251308"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18473251308');
          `}
        </Script>

        {/* Verificação do Google Search Console */}
        <meta
          name="google-site-verification"
          content="gSGIRVUyhd5aECoJeRSgGaqRhFlVOsnvKoln75jwA0w"
        />

        {/* Dados estruturados da empresa */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Dados estruturados do FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
