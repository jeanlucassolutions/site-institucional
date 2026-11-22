
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
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}
