
**Objetivo:** Criar uma landing page visualmente impactante e de alto desempenho para "Vanamata - Van na Mata", focada em conversão e experiência premium.

---

## 1. Stack Técnico

* **Framework:** Next.js 15+ (App Router)
* **Estilização:** CSS Modules
* **Animações:**
  * Framer Motion (micro-interações, transições de página)
  * AOS (scroll reveals)

---

## 2. Design System

### Paleta de Cores

```
Primary Background: #FDFCFA (Off-white quente)
Text Primary: #1A2F23 (Verde escuro profundo)
Accent/CTA: #2D7A4C (Verde floresta vibrante)
Secondary: #8B9D83 (Verde musgo)
Neutral: #E8E4DC (Bege terroso)
```

### Tipografia

* **Headings:** Montserrat Bold/ExtraBold (impacto visual)
* **Body:** Montserrat Regular/Light (legibilidade)
* **Hierarquia:** H1 (56-64px), H2 (40-48px), H3 (28-32px), Body (16-18px)

### Princípios Visuais

* Espaçamento generoso (breathing room)
* Imagens fullscreen de alta qualidade
* Overlays sutis (gradientes escuros 40-60% opacity)
* Border-radius: 12-16px
* Box-shadows suaves para profundidade
* Ícones: Lucide React (montanhas, árvores, bússola, mapa)

---

## 3. Estrutura da Página

### A) Header (Fixed)

* Logo à esquerda com ícone de van + montanha
* Nav center: Destinos | Pacotes | Galeria | Contato
* CTA destaque direita: "Reserve Agora" (botão verde vibrante)
* Glassmorphism ao scroll (backdrop-blur + transparência)

### B) Hero Section (Fullscreen)

**Visual:** Vídeo/imagem parallax de van em estrada de montanha ao pôr do sol

**Conteúdo centralizado:**

* H1: "Aventuras Autênticas na Natureza Brasileira"
* Subtitle: "Montanhas, cachoeiras e trilhas inesquecíveis com conforto e segurança"
* Dual CTA:
  * Primary: "Explorar Destinos" (verde sólido)
  * Secondary: "Ver Pacotes" (outline)
* Scroll indicator animado (seta/mouse)

**Animação:** Fade in + slide up suave no conteúdo, parallax no background

### C) Diferenciais (3 Cards Grid)

**Layout:** 3 colunas responsivas com ícones grandes

**Cards:**

1. **Aventura + Conforto** - Ícone: Van
   * Vans equipadas, máximo 12 pessoas, experiência intimista
2. **Roteiros Exclusivos** - Ícone: Mapa
   * Destinos únicos, guias especializados, tudo incluído
3. **Turismo Sustentável** - Ícone: Folha
   * Zero impacto ambiental, respeito à natureza

**Animação:** Stagger fade-in ao scroll, hover scale + shadow

### D) Destinos (Grid Dinâmico)

**Layout:** Grid 2x3 (6 destinos) com imagens impactantes

**Destinos:**

1. Serra da Mantiqueira
2. Chapada dos Veadeiros
3. Litoral Norte SP
4. Serra da Canastra
5. Chapada Diamantina
6. Itatiaia

**Card hover:**

* Zoom suave na imagem (scale 1.1)
* Overlay com gradiente + texto descritivo
* CTA "Descobrir" aparece

**Animação:** AOS fade-up com delay escalonado

### E) **Galeria de Fotos (NOVA SEÇÃO)**

**Objetivo:** Provar a qualidade das experiências através de imagens reais impactantes

**Layout:** Masonry grid (Pinterest-style) ou Bento grid assimétrico

**Conteúdo:**

* 12-16 fotos profissionais de alta resolução
* Mix de: paisagens (60%), pessoas em ação (30%), detalhes (10%)
* Categorias: Cachoeiras, Trilhas, Montanhas, Momentos do Grupo

**Funcionalidade:**

* Lightbox ao clicar (navegação entre fotos)
* Lazy loading otimizado
* Filtros por categoria (opcional)

**Visual:**

* Grid irregular para dinamismo
* Hover: overlay com localização + data
* Transições suaves entre imagens

**Animação:** Reveal progressivo (aparecem em sequência ao scroll)

### F) Pacotes (3 Cards Destacados)

**Layout:** Cards horizontais ou verticais lado a lado

**Pacotes:**

1. **Fim de Semana** (2 dias) - Popular badge
   * Cachoeira + trilha leve
   * A partir de R$ 650/pessoa
2. **Expedição Completa** (5 dias)
   * Múltiplos destinos + camping
   * A partir de R$ 2.200/pessoa
3. **Especial Aventura** (3 dias)
   * Trilhas avançadas + escalada
   * A partir de R$ 1.350/pessoa

**Visual:** Destaque visual no mais popular (borda grossa, badge)

**CTA:** "Consultar Disponibilidade"

### G) Depoimentos (Carrossel)

**Layout:** Carrossel automático com 3 cards visíveis

**Estrutura:**

* Foto circular do cliente
* Texto do depoimento (2-3 linhas)
* Nome + estrelas (5/5)
* Destino visitado

**Animação:** Transição suave automática a cada 5s, pause no hover

### H) FAQ (Accordion)

**6 Perguntas Essenciais:**

1. O que está incluído nos pacotes?
2. Qual o nível de dificuldade das trilhas?
3. Preciso de equipamento especial?
4. Como funciona o seguro?
5. Qual a política de cancelamento?
6. Posso levar crianças?

**Design:** Ícone + / - animado, resposta com fade

### I) Formulário de Contato

**Background:** Imagem de cachoeira com overlay escuro (70%)

**Campos:**

* Nome completo
* Email
* Telefone (WhatsApp)
* Destino de interesse (select)
* Mensagem (opcional)

**CTA:** "Quero Minha Aventura!" (botão grande)

**Design:** Form em card branco centralizado, contraste máximo

### J) Footer

**Background:** Verde escuro (`<span class="inline-block w-3 h-3 border-[0.5px] border-border-200 rounded flex-shrink-0 shadow-sm mr-1 align-middle"></span>#1A2F23`)

**Layout 4 colunas:**

1. Logo + tagline
2. Links rápidos
3. Contato (telefone, email, endereço)
4. Redes sociais (ícones grandes clicáveis)

**Bottom bar:** Copyright + Política de Privacidade

---

## 4. Conteúdo Copywriting

### Hero

**H1:** "Aventuras Autênticas na Natureza Brasileira"
**Subtitle:** "Descubra montanhas, cachoeiras e trilhas com conforto, segurança e grupos exclusivos de até 12 pessoas"

### Sobre (Mini-seção opcional)

"A Vanamata conecta você aos lugares mais incríveis do Brasil. Com roteiros exclusivos, guias especializados e compromisso total com sustentabilidade, transformamos viagens em experiências que marcam para sempre."

### Social Proof

* "+500 aventureiros"
* "15 destinos exclusivos"
* "98% satisfação"

---

## 5. Performance & UX

### Otimizações Críticas

* Next.js Image optimization (lazy load, WebP)
* Preload hero image/video
* Code splitting por seção
* Smooth scroll behavior
* Mobile-first responsive
* Touch gestures (carrossel, galeria)

### Animações

* Não exagerar (60fps sempre)
* Reduzir em motion-reduced preference
* Usar GPU acceleration (transform, opacity)

### CTAs

* Cores contrastantes (acessibilidade WCAG AA)
* Hover states óbvios
* Mobile: botões grandes (min 44x44px)

---

## 6. Conversão

### CTAs Estratégicos

* Hero: 2 CTAs
* Cada seção de destino: CTA individual
* Pacotes: CTA por card
* Final da página: CTA forte no form
* Header: CTA persistente

### Urgência/Escassez (opcional)

* "Vagas limitadas para [próximo mês]"
* "Próxima expedição: [data]"

---

**Resultado Esperado:** Landing page premium que transmite aventura, profissionalismo e confiança, com foco total em conversão através de storytelling visual impactante.
