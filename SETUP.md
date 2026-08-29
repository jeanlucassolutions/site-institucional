# Jean Lucas Eletricista - Setup Local

## Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/jeanlucassolutions/site-institucional.git
cd site-institucional
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar em desenvolvimento

```bash
npm run dev
```

O site estará disponível em: `http://localhost:3000`

### 4. Build para produção

```bash
npm run build
npm start
```

## Variáveis de Ambiente

Crie um arquivo `.env.local` baseado em `.env.example`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5512982798846
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/jeanlucas_eletricista/
NEXT_PUBLIC_GOOGLE_BUSINESS=https://share.google/slNMDMZYIq0BFv93d
NEXT_PUBLIC_EMAIL=jeanlucas.solutions@gmail.com
```

## Deploy na Vercel

1. Push para GitHub
2. Conectar repositório na [Vercel](https://vercel.com)
3. Vercel detectará automaticamente:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

## Customizações

### Adicionar Logo

1. Salvar logo em `public/logo.png` ou `public/logo.svg`
2. Atualizar `src/components/Header.tsx` para importar a imagem

### Adicionar Foto

1. Salvar foto em `public/`
2. Atualizar `src/components/About.tsx` com a imagem

### Adicionar Avaliações

1. Copiar avaliações do Google Business
2. Atualizar `src/components/Testimonials.tsx`

## Performance

- [x] Mobile First
- [x] Imagens Otimizadas
- [x] Core Web Vitals
- [x] SEO Local
- [x] Estrutura Semântica
- [x] Responsividade Total

## Suporte

Para dúvidas ou problemas, entre em contato:

- **WhatsApp**: +55 12 98279-8846
- **E-mail**: jeanlucas.solutions@gmail.com
- **Instagram**: @jeanlucas_eletricista
