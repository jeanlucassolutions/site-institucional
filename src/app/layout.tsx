import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://jeanlucaseletricista.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      'Jean Lucas Eletricista | Eletricista Residencial em São José dos Campos',
    template: '%s | Jean Lucas Eletricista',
  },

  description:
    'Eletricista residencial em São José dos Campos para instalações, manutenção e reparos elétricos. Atendimento em diversos bairros da cidade.',

  keywords: [
    'eletricista em São José dos Campos',
    'eletricista residencial São José dos Campos',
    'eletricista São José dos Campos',
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
    'quadro elétrico',
    'manutenção de quadro elétrico',
    'fiação elétrica',
    'manutenção elétrica',
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
      'Serviços de elétrica residencial em São José dos Campos. Instalações, manutenção e reparos elétricos.',

    images: [
      {
        url: '/images/hero-jean-lucas-eletricista.png',
        width: 1200,
        height: 630,
        alt:
          'Jean Lucas Eletricista Residencial em São José dos Campos',
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
    'Eletricista residencial em São José dos Campos especializado em instalações, manutenção e reparos elétricos residenciais.',

  telephone: '+55 12 98279-8846',

  address: {
    '@type': 'PostalAddress',
    addressLocality: 'São José dos Campos',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },

  areaServed: [
    {
      '@type': 'City',
      name: 'São José dos Campos',
      containedInPlace: {
        '@type': 'State',
        name: 'São Paulo',
      },
    },

    {
      '@type': 'Place',
      name: 'Jardim da Granja',
    },

    {
      '@type': 'Place',
      name: 'Jardim Uirá',
    },

    {
      '@type': 'Place',
      name: 'Putim',
    },

    {
      '@type': 'Place',
      name: 'Residencial Flamboyant',
    },

    {
      '@type': 'Place',
      name: 'Jardim São José',
    },

    {
      '@type': 'Place',
      name: 'Jardim Santa Inês',
    },

    {
      '@type': 'Place',
      name: 'DCTA',
    },
  ],

  serviceType: [
    'Elétrica residencial',
    'Instalação de tomadas e interruptores',
    'Instalação de chuveiro elétrico',
    'Instalação de luminárias',
    'Instalação de iluminação',
    'Instalação de ventilador de teto',
    'Instalação e troca de disjuntores',
    'Manutenção de quadro elétrico',
    'Manutenção elétrica residencial',
    'Reparos em fiação elétrica',
  ],

  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55 12 98279-8846',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },

  sameAs: [
    'https://share.google/slNMDMZYIq0BFv93d',
  ],
}


/* =========================================================
   DADOS ESTRUTURADOS — FAQ
   ========================================================= */

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: [
    {
      '@type': 'Question',
      name:
        'Quais serviços de elétrica residencial você realiza em São José dos Campos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A Jean Lucas Eletricista realiza serviços de elétrica residencial em São José dos Campos, incluindo instalação de tomadas e interruptores, chuveiros elétricos, luminárias e iluminação, ventiladores de teto, disjuntores, quadros elétricos, fiação, instalações elétricas, manutenção e reparos.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Quanto custa um serviço de eletricista em São José dos Campos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'O valor depende do tipo de serviço, das condições da instalação e da complexidade do problema. Para saber o valor do atendimento, entre em contato pelo WhatsApp e explique o que precisa ser feito.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Como solicitar um orçamento de eletricista?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Para solicitar um orçamento, entre em contato pelo WhatsApp e explique qual serviço elétrico você precisa. Se possível, envie fotos ou vídeos do problema para facilitar a avaliação inicial.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Vocês fazem instalação de tomadas e interruptores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação e substituição de tomadas, interruptores e pontos de luz em residências, avaliando a instalação existente e a necessidade do serviço.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Vocês fazem instalação de chuveiro elétrico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação e manutenção de chuveiros elétricos residenciais, incluindo avaliação das condições da instalação elétrica relacionada ao equipamento.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Por que o disjuntor fica desarmando?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Um disjuntor pode desarmar por diferentes motivos, como sobrecarga, curto-circuito ou algum problema na instalação ou equipamento conectado. O ideal é identificar a causa antes de simplesmente religá-lo repetidamente.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Vocês fazem troca e instalação de disjuntores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação e substituição de disjuntores residenciais. A escolha e a instalação devem considerar as características do circuito elétrico e a carga atendida.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Vocês fazem manutenção em quadro elétrico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação, manutenção e reparos em quadros elétricos residenciais, verificando os componentes e as condições gerais da instalação.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Por que uma tomada pode esquentar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Uma tomada pode apresentar aquecimento por diferentes motivos, como mau contato, conexão inadequada, sobrecarga ou problemas na instalação. Se a tomada estiver muito quente, com cheiro de queimado ou sinais de derretimento, é importante interromper o uso e solicitar uma avaliação.',
      },
    },

    {
      '@type': 'Question',
      name:
        'O que fazer quando uma tomada está dando choque?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Não continue utilizando uma tomada que esteja causando choque. O problema pode estar relacionado à instalação elétrica, aterramento ou equipamento conectado. O mais seguro é interromper o uso e solicitar uma avaliação profissional.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Vocês fazem instalação de luminárias e iluminação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação de luminárias, pontos de iluminação, arandelas e outros serviços relacionados à iluminação residencial.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Vocês instalam ventilador de teto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos instalação de ventiladores de teto em residências, verificando as condições necessárias para a instalação e conexão elétrica do equipamento.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Vocês fazem reparos em fiação elétrica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos serviços relacionados à fiação e instalações elétricas residenciais, incluindo manutenção e reparos conforme a necessidade identificada no atendimento.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Quando devo chamar um eletricista residencial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'É recomendado procurar um eletricista quando houver sinais como disjuntores desarmando com frequência, tomadas aquecendo, cheiro de queimado, faíscas, choques elétricos, quedas de energia em determinados circuitos ou outros comportamentos anormais na instalação.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Vocês fazem manutenção elétrica residencial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. Realizamos manutenção e reparos em instalações elétricas residenciais, buscando identificar problemas e realizar os serviços necessários com atenção à segurança e à qualidade.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Quais bairros de São José dos Campos vocês atendem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'O atendimento é realizado em São José dos Campos, principalmente em regiões como Jardim da Granja, Jardim Uirá, Putim, Residencial Flamboyant, Jardim São José, Jardim Santa Inês e DCTA, além de outras regiões da cidade conforme disponibilidade.',
      },
    },

    {
      '@type': 'Question',
      name:
        'O serviço de elétrica residencial possui garantia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sim. A Jean Lucas Eletricista oferece garantia para o serviço realizado, conforme as condições combinadas para cada atendimento.',
      },
    },

    {
      '@type': 'Question',
      name:
        'Como contratar a Jean Lucas Eletricista?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'É simples: entre em contato pelo WhatsApp, explique o serviço ou problema elétrico e envie fotos ou vídeos se tiver. Assim podemos conversar sobre a necessidade e o orçamento do atendimento.',
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

      <body>
        {children}
      </body>
    </html>
  )
}
