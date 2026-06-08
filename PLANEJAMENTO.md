# Planejamento — Site Institucional Gráfica (Finart)

## Visão Geral

Site institucional moderno para gráfica goiana com mais de 15 anos de mercado.  
Tecnologias: **HTML5 · CSS3 · JavaScript (vanilla)**  
Identidade visual: **Azul · Branco · Vermelho**  
Referências: Material Design 3, flexgrafica.com.br

---

## Paleta de Cores

| Token            | Hex       | Uso                              |
|------------------|-----------|----------------------------------|
| `--primary`      | `#1565C0` | Azul principal — CTAs, nav       |
| `--primary-dark` | `#0D47A1` | Hover, cabeçalhos                |
| `--accent`       | `#D32F2F` | Vermelho — destaques, badges     |
| `--accent-light` | `#EF5350` | Hover vermelho                   |
| `--surface`      | `#FFFFFF` | Fundos de cards e seções claras  |
| `--background`   | `#F5F7FA` | Fundo geral da página            |
| `--on-primary`   | `#FFFFFF` | Texto sobre azul                 |
| `--on-surface`   | `#212121` | Texto principal                  |
| `--muted`        | `#757575` | Textos secundários               |
| `--divider`      | `#E0E0E0` | Linhas divisórias                |

---

## Tipografia

- **Display / Headlines:** `Montserrat` (Bold 700) — títulos de seção
- **Corpo:** `Inter` (Regular 400, Medium 500) — parágrafos e UI
- **Chamadas de ação:** `Montserrat` (SemiBold 600)
- Escala de tipo modular razão 1.25 (Major Third)

---

## Estrutura de Páginas

### Página Única (One Page) com âncoras internas

```
/ (home)
  ├── #inicio       → Hero
  ├── #sobre        → Sobre a Empresa
  ├── #servicos     → Serviços
  ├── #portfolio    → Portfólio / Galeria
  ├── #diferenciais → Por que nos escolher
  ├── #depoimentos  → Depoimentos
  └── #contato      → Contato + Mapa
```

---

## Seções Detalhadas

### 1. Header / Navbar
- Logo à esquerda
- Links de navegação com scroll suave
- Botão CTA "Solicitar Orçamento" (vermelho)
- Sticky + sombra ao scroll
- Menu hamburguer no mobile (slide-down)

### 2. Hero Section
- Fundo em gradiente azul escuro com textura sutil (padrão geométrico semi-transparente)
- Headline impactante: **"Sua ideia ganha forma aqui"**
- Subheadline: 15+ anos transformando comunicação visual em Goiás
- Dois CTAs: "Ver Serviços" (primário) · "Falar no WhatsApp" (contornado branco)
- Contador animado: anos de mercado / clientes atendidos / projetos entregues
- Imagem hero (mockup de impressão ou colagem de produtos)

### 3. Sobre a Empresa
- Layout dois colunas: texto à esquerda, imagem/ilustração à direita
- Breve história e propósito
- 3 cards com ícone: **Missão · Visão · Valores**
- Badge "Empresa Goiana — + de 15 anos"

### 4. Serviços
- Grid de 6 cards (Material Elevation com hover lift)
- Cada card: ícone SVG + nome + descrição curta + "Saiba mais"

| Serviço                  | Ícone sugerido          |
|--------------------------|-------------------------|
| Comunicação Visual       | Display / megafone       |
| Impressão de Livros      | Livro aberto            |
| Sacolas Personalizadas   | Sacola shopping         |
| Cartões (visita/fidelidade)| Cartão de crédito     |
| Banners & Faixas         | Megafone / retângulo    |
| Outros Impressos         | Impressora              |

### 5. Portfólio / Galeria
- Grid Masonry responsivo (CSS Grid)
- Filtros por categoria (Comunicação Visual / Livros / Sacolas / Cartões / Banners)
- Lightbox ao clicar na imagem
- Lazy loading das imagens

### 6. Diferenciais
- Fundo azul escuro (invertido)
- 4 blocos com ícone + texto curto:
  - Qualidade Premium de Impressão
  - Entrega Pontual em Goiás e Brasil
  - Atendimento Personalizado
  - Orçamento em até 24h

### 7. Depoimentos
- Carrossel automático (autoplay pausável)
- Card: avatar + nome + empresa + estrelas + texto
- Navegação por pontos e setas

### 8. CTA Final / Banner
- Fundo vermelho
- Headline: **"Pronto para dar vida ao seu projeto?"**
- Botão grande: "Solicitar Orçamento Grátis"

### 9. Contato
- Formulário: Nome / E-mail / Telefone / Serviço (select) / Mensagem
- Validação client-side sem biblioteca
- Botão WhatsApp flutuante (fixo no canto)
- Endereço + telefone + e-mail
- Google Maps embed

### 10. Footer
- Logo + slogan curto
- Links rápidos
- Redes sociais (Instagram, Facebook, LinkedIn)
- Copyright + "Site desenvolvido por …"

---

## Componentes JavaScript

| Componente          | Implementação               |
|---------------------|-----------------------------|
| Scroll suave        | `scrollBehavior: smooth` CSS |
| Navbar sticky       | `IntersectionObserver`      |
| Animação contadores | `countUp` puro JS           |
| Carrossel           | JS vanilla (sem jQuery)     |
| Lightbox galeria    | JS vanilla                  |
| Filtro portfólio    | Data attributes + CSS       |
| Validação formulário| JS vanilla                  |
| WhatsApp flutuante  | Link + animação pulse CSS   |
| Animações on-scroll | `IntersectionObserver`      |

---

## Estrutura de Arquivos

```
finart/
├── index.html
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css       ← tokens de cor e tipografia
│   │   ├── base.css            ← estilos globais
│   │   ├── components.css      ← cards, buttons, badges
│   │   ├── layout.css          ← grid e containers
│   │   ├── sections/
│   │   │   ├── hero.css
│   │   │   ├── servicos.css
│   │   │   ├── portfolio.css
│   │   │   ├── depoimentos.css
│   │   │   └── contato.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js             ← inicialização
│   │   ├── navbar.js
│   │   ├── counter.js
│   │   ├── carousel.js
│   │   ├── lightbox.js
│   │   ├── portfolio-filter.js
│   │   └── form.js
│   └── images/
│       ├── logo.svg
│       ├── hero/
│       ├── portfolio/
│       └── icons/
└── PLANEJAMENTO.md
```

---

## Responsividade

| Breakpoint   | Largura       | Comportamento                        |
|--------------|---------------|--------------------------------------|
| Mobile       | < 768px       | 1 coluna, nav oculta (hamburguer)    |
| Tablet       | 768px–1024px  | 2 colunas, grid 2×3                  |
| Desktop      | > 1024px      | Layout completo, grid 3×2            |
| Wide         | > 1440px      | Container max-width 1280px           |

---

## Performance e SEO

- [ ] Imagens em WebP com fallback JPG
- [ ] `loading="lazy"` em todas as imagens abaixo do fold
- [ ] `<meta>` Open Graph para compartilhamento social
- [ ] Schema.org `LocalBusiness` (JSON-LD)
- [ ] `sitemap.xml` básico
- [ ] Google Analytics / GA4
- [ ] PageSpeed target: >= 90 mobile / >= 95 desktop

---

## Acessibilidade

- [ ] Contraste mínimo WCAG AA (4.5:1 corpo, 3:1 UI)
- [ ] `alt` descritivo em todas as imagens
- [ ] Foco visível em todos os interativos
- [ ] ARIA labels no menu e carrossel
- [ ] Semântica HTML5 correta (`main`, `section`, `article`, `nav`)

---

## Referências Visuais

- **Layout e organização:** [flexgrafica.com.br](https://flexgrafica.com.br/)
- **Sistema de design:** [Material Design 3](https://m2.material.io/design/introduction)
- **Elevação de cards:** Material surface tonal com `box-shadow` em camadas
- **Motion:** Transições de 200–300ms, easing `cubic-bezier(0.2, 0, 0, 1)`
- **Ícones:** Google Material Symbols (SVG inline ou font)

---

## Ordem de Construção (Sprints)

### Sprint 1 — Base e Estrutura
- [ ] Criar estrutura de arquivos
- [ ] `variables.css` com tokens de cor e tipo
- [ ] `reset.css` + `base.css`
- [ ] HTML semântico completo (esqueleto de todas as seções)
- [ ] Navbar responsiva com hamburguer

### Sprint 2 — Seções Hero e Sobre
- [ ] Hero com gradiente, headline e CTAs
- [ ] Contadores animados
- [ ] Seção Sobre (2 colunas + cards MVV)

### Sprint 3 — Serviços e Portfólio
- [ ] Grid de cards de serviços com hover
- [ ] Galeria masonry com filtros
- [ ] Lightbox

### Sprint 4 — Depoimentos, CTA e Contato
- [ ] Carrossel de depoimentos
- [ ] Banner CTA vermelho
- [ ] Formulário de contato com validação
- [ ] WhatsApp flutuante

### Sprint 5 — Diferenciais, Footer e Polimento
- [ ] Seção diferenciais (fundo azul)
- [ ] Footer completo
- [ ] Animações on-scroll (IntersectionObserver)
- [ ] Ajustes finais de responsividade
- [ ] Otimização de imagens e performance

---

## Checklist Final de Lançamento

- [ ] Testar em Chrome, Firefox, Safari e Edge
- [ ] Testar em iOS Safari e Android Chrome
- [ ] Validar HTML (validator.w3.org)
- [ ] Validar CSS (jigsaw.w3.org)
- [ ] Rodar Lighthouse e corrigir issues
- [ ] Revisar todos os textos e links
- [ ] Configurar formulário (backend PHP ou Formspree)
- [ ] Integrar WhatsApp com número real
- [ ] Publicar e configurar domínio
