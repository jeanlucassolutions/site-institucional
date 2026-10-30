

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      parameters: Record<string, unknown>
    ) => void
  }
}

export function trackWhatsAppClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18473251308/a7zNCNC13IUdEOzj3ehE',
      value: 1.0,
      currency: 'BRL',
    })
  }
}

export function trackPhoneClick(url: string) {
  if (typeof window === 'undefined') return

  if (!window.gtag) {
    window.location.href = url
    return
  }

  let navigated = false

  const continueToPhone = () => {
    if (navigated) return
    navigated = true
    window.location.href = url
  }

  window.gtag('event', 'conversion', {
    send_to: 'AW-18473251308/bivcCPO-7q4dEOzj3ehE',
    value: 1.0,
    currency: 'BRL',
    event_callback: continueToPhone,
    event_timeout: 1000,
  })

  window.setTimeout(continueToPhone, 1200)
}

export {}
