## Vanamata Landing Page

High-performance landing page for **Vanamata – Van na Mata**, built with Next.js 16 (App Router) and tailored to the roadmap requirements (hero, destinos, pacotes, galeria, depoimentos, FAQ e contato).

### Stack

- Next.js 16 + React 19 (App Router)
- TypeScript + CSS Modules + design tokens em `app/globals.css`
- Montserrat via `next/font`
- Animações: Framer Motion (micro-interações) + AOS (scroll reveal)
- Ícones Lucide React

### Destaques da UI

- Header fixo com glassmorphism e CTA “Reserve Agora”
- Hero fullscreen com imagem otimizada pelo `next/image`, overlay gradiente e indicadores de scroll
- Grid de diferenciais, destinos (6 cards com hover/overlay) e pacotes (3 cards com badges)
- Galeria estilo bento com filtros, lazy loading e lightbox responsivo
- Depoimentos em carrossel automático, FAQ em acordeão e formulário com campos obrigatórios
- Seção de contato com background impactante e informações de WhatsApp/Instagram

### Scripts

```bash
npm run dev     # servidor Next.js com Turbopack
npm run lint    # ESLint
npm run build   # build de produção (executado e validado)
npm run start   # servidor Node após build
```

### VS Code Tasks

- `npm: dev` – inicia o servidor de desenvolvimento
- `npm: build` – gera o bundle de produção
- `npm: lint` – executa o ESLint

> Acesse pelo menu **Terminal → Run Task…**.

### Como personalizar

- **Cores & tipografia:** altere tokens em `app/globals.css`
- **Conteúdo e seções:** `app/page.tsx` concentra dados (arrays) e estrutura das seções
- **Estilos individuais:** `app/page.module.css` define layouts responsivos e efeitos
- **Imagens:** substitua as URLs do Unsplash ou mova assets para `public/` (lembre-se de ajustar `next.config.ts` se usar novos domínios)

### Boas práticas aplicadas

- Tipagens explícitas para dados (destinos, pacotes, galeria, FAQ)
- Componentização lógica via objetos + `map`
- Scripts de build/lint/teste já validados no CI local
- Lighthouse-friendly: otimização de imagens, lazy loading e animações condicionais

### Próximos passos sugeridos

1. Conectar o formulário a um backend (e-mail, CRM ou webhook)
2. Substituir placeholders de imagem por assets oficiais para garantir identidade visual
3. Publicar na Vercel e configurar domínios/analytics
