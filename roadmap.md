
# Prompt Detalhado: Landing Page "Vanamata"

**Objetivo:** Criar uma landing page profissional e inspiradora para a agência de viagens "Vanamata - Van na Mata", utilizando Next.js, CSS, Framer Motion e AOS para uma experiência de usuário envolvente e animada, focada em aventuras na natureza.

---

### 1. Tecnologias e Bibliotecas
- **Framework:** Next.js 15+
- **Estilização:** CSS Modules.
- **Animações:**
  - **Framer Motion:** Para micro-interações complexas e animações de componentes.
  - **AOS (Animate On Scroll):** Para animações sutis de "fade" e "slide" ao rolar a página.

---

### 2. Identidade Visual
- **Esquema de Cores:**
  - **Fundo Principal:** Branco Creme/Bege Claro (`#FAF9F6` ou `#FFFFFF`).
  - **Texto Principal:** Verde Escuro/Cinza Carvão (`#1F3A2D` ou `#2C3E37`).
  - **Destaques (CTAs, links, ícones):** Verde Floresta Vibrante (`#2D7A4C` ou `#3A8B5C`).
  - **Elementos Secundários:** Tons terrosos - marrom claro, verde musgo suave (`#E8E4DC`, `#A8B5A0`).
- **Tipografia:**
  - **Títulos (Headings):** Fonte sans-serif em negrito com toque aventureiro (Ex: **Montserrat Bold**, **Outfit ExtraBold**).
  - **Corpo de Texto (Paragraphs):** Mesma família da fonte dos títulos, mas em peso regular ou fino (Ex: **Montserrat Regular**, **Open Sans**).
- **Estilo de Design:**
  - **Natural e Aventureiro:** Use espaçamento generoso com elementos orgânicos.
  - **Efeitos:** Aplique overlays sutis em imagens de natureza, use sombras suaves para profundidade. Bordas arredondadas para um visual mais acolhedor. Texturas sutis de madeira ou folhagens em backgrounds específicos.
  - **Ícones:** Utilize ícones relacionados à natureza - montanhas, árvores, cachoeiras, bússola (Ex: Lucide Icons, Feather Icons).

---

### 3. Estrutura da Página (Seções)

**a) Header:**
- **Layout:** Fixo no topo, com um leve efeito de transparência e sombra ao rolar (glassmorphism sutil).
- **Conteúdo:**
  - Logo da Vanamata à esquerda (com ilustração de van e natureza).
  - Links de navegação no centro: `Sobre`, `Destinos`, `Pacotes`, `Contato`.
  - Botão CTA (Call-to-Action) à direita: `Reserve sua Aventura`.

**b) Seção Hero:**
- **Objetivo:** Capturar a atenção do visitante imediatamente e inspirar aventura.
- **Conteúdo:**
  - **Título Principal:** Uma frase de impacto. Ex: "Viva a aventura: Montanhas, Cachoeiras e Natureza Selvagem"
  - **Subtítulo:** Uma breve descrição. Ex: "Descubra os destinos mais incríveis do Brasil com conforto, segurança e muita natureza."
  - **CTA Principal:** Botão `Explorar Destinos` ou `Ver Pacotes`.
  - **Visual:** Imagem/vídeo em fullscreen de uma van em uma estrada de montanha ou próximo a uma cachoeira, com overlay sutil. Parallax scroll para criar profundidade.

**c) Seção Sobre a Vanamata:**
- **Objetivo:** Apresentar o conceito e diferenciais da agência.
- **Layout:** Dividido em 2 ou 3 subseções com cards visuais, cada uma com:
  - **Título do Diferencial:** Ex: "Aventura com Segurança", "Roteiros Exclusivos", "Natureza em Primeiro Lugar".
  - **Descrição:** Texto curto explicando o benefício e filosofia.
  - **Imagem Ilustrativa:** Foto de alta qualidade mostrando o diferencial (ex: grupo em trilha, van equipada, cachoeira).

**d) Seção de Destinos Populares:**
- **Objetivo:** Mostrar os principais destinos oferecidos.
- **Layout:** Grid de 3 a 6 cards de destinos com imagens impactantes.
- **Conteúdo de cada Card (Destino):**
  - Foto de alta qualidade do local (montanha, cachoeira, trilha).
  - Nome do Destino (Ex: Serra da Mantiqueira, Chapada dos Veadeiros).
  - Breve descrição ou atrativos principais.
  - Botão CTA para `Saber Mais` ou `Ver Pacotes`.
- **Animação:** Cards com efeito hover (zoom suave na imagem, overlay com informações).

**e) Seção de Pacotes/Experiências:**
- **Objetivo:** Apresentar os tipos de experiências oferecidas.
- **Layout:** 3 cards lado a lado ou em formato carrossel.
- **Conteúdo de cada Card:**
  - Nome do Pacote (Ex: "Aventura de Fim de Semana", "Expedição 5 Dias", "Especial Cachoeiras").
  - Duração e tipo de experiência.
  - Lista de atividades incluídas (trilhas, banhos de cachoeira, acampamento, etc.).
  - Indicação de preço ou faixa de valor.
  - Botão CTA para `Reserve Agora` ou `Consultar`.
- **Destaque:** O pacote mais popular deve ter um destaque visual (selo "Mais Procurado" ou borda especial).

**f) Seção de Depoimentos:**
- **Objetivo:** Construir confiança através de experiências reais.
- **Layout:** Carrossel de depoimentos com fotos dos clientes.
- **Conteúdo:** 4 a 6 depoimentos com foto, nome, e relato breve da experiência vivida com a Vanamata.

**g) Seção de FAQ (Perguntas Frequentes):**
- **Objetivo:** Responder às dúvidas comuns dos viajantes.
- **Layout:** Componente de "acordeão", onde cada pergunta pode ser clicada para revelar a resposta.
- **Conteúdo:** 5 a 7 perguntas sobre seguro, equipamentos necessários, nível de dificuldade, alimentação, cancelamento, etc.

**h) Seção de Captura de Contato (Newsletter/Formulário):**
- **Objetivo:** Construir uma lista de interessados e facilitar contato.
- **Layout:** Seção com background de imagem de natureza com overlay.
- **Conteúdo:**
  - **Título:** Ex: "Pronto para sua próxima aventura? Entre em contato!"
  - **Campo de Nome, E-mail e Telefone.**
  - **Campo opcional de mensagem/interesse.**
  - **Botão de Envio:** `Quero Saber Mais`.

**i) Footer (Rodapé):**
- **Layout:** Organizado com fundo verde escuro ou terroso.
- **Conteúdo:**
  - Logo da Vanamata.
  - Links para redes sociais (Instagram, Facebook, WhatsApp).
  - Links úteis (repetir os links do header + Política de Privacidade).
  - Informações de contato (telefone, e-mail).
  - Informações de copyright: `© 2025 Vanamata - Van na Mata. Todos os direitos reservados.`

---

### 4. Sobre a Vanamata (Conteúdo para as seções)
A Vanamata é uma agência de viagens especializada em experiências autênticas na natureza brasileira. Com o conceito "Van na Mata", oferecemos aventuras inesquecíveis em montanhas, cachoeiras e pontos turísticos naturais, combinando conforto, segurança e respeito ao meio ambiente. Nossa missão é conectar pessoas à natureza através de roteiros exclusivos e experiências transformadoras.

**Diferenciais Principais a serem destacados:**
- **Aventura com Conforto:** Vans equipadas com todo conforto necessário para longas viagens e acesso a locais remotos.
- **Roteiros Exclusivos:** Destinos cuidadosamente selecionados, incluindo trilhas, cachoeiras escondidas e mirantes de montanha.
- **Guias Especializados:** Equipe experiente em ecoturismo, primeiros socorros e conhecedores profundos das regiões visitadas.
- **Grupos Pequenos:** Experiências intimistas com no máximo 8 a 12 pessoas por viagem para maior integração.
- **Sustentabilidade:** Compromisso com turismo responsável, deixando zero impacto nos ambientes visitados.
- **Fotografia de Aventura:** Registros profissionais incluídos em pacotes selecionados.
- **Flexibilidade:** Opções de pacotes de 1 dia até expedições de 7 dias ou mais.
- **Tudo Incluído:** Transporte, alimentação, guias, seguro viagem e equipamentos básicos.

**Proposta de Valor (Conteúdo para a seção "Sobre"):**
- **Conexão com a Natureza:** Em um mundo cada vez mais urbano e digital, oferecemos a oportunidade de reconexão com ambientes naturais preservados.
- **Experiências Memoráveis:** Não são apenas viagens, são vivências que transformam perspectivas e criam histórias para toda vida.
- **Segurança Total:** Todos os roteiros são planejados com protocolos de segurança rigorosos, seguros adequados e equipamentos de qualidade.

**Destinos em Destaque (Conteúdo para a seção de Destinos):**
- **Serra da Mantiqueira:** Trilhas de altitude, cachoeiras cristalinas e vistas panorâmicas impressionantes.
- **Chapada dos Veadeiros:** Formações rochosas únicas, águas termais e biodiversidade exuberante.
- **Litoral Norte de São Paulo:** Praias selvagens, trilhas na Mata Atlântica e comunidades tradicionais.
- **Serra da Canastra:** Nascente do Rio São Francisco, cachoeiras majestosas e fauna abundante.
- **Vale do Capão - Chapada Diamantina:** Vilarejos acolhedores, trilhas desafiadoras e cachoeiras de cair o queixo.

**Depoimentos Reais (Conteúdo para a seção de Depoimentos):**
- _"A experiência com a Vanamata superou todas as expectativas! A cachoeira que visitamos era de tirar o fôlego."_ - **Ana Silva**
- _"Segurança, aventura e natureza em doses perfeitas. Já estou planejando a próxima viagem!"_ - **Carlos Mendes**
- _"Os guias são incríveis, conhecem cada detalhe dos lugares. Me senti em casa na mata."_ - **Juliana Costa**

