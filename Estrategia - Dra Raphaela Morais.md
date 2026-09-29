# GR One · Dra. Raphaela Morais — Estratégia da prévia

## Perguntas em aberto (a prévia segue com suposições marcadas)
1. Endereço do consultório. É dividido com a Dra. Yasmin? → *suposição: só "Belo Horizonte · MG"*
2. WhatsApp oficial (número) → *suposição: link da bio `wa.me/message/6BKKQTJL43HHK1`. Esse formato não aceita mensagem pré-preenchida; ao informar o número (Tweak "whatsapp"), o link vira `wa.me/55…?text=Olá, Dra. Raphaela! Quero agendar uma avaliação 🤍`*
3. Ano de formatura e início em HOF · CRO-MG confirmado?
4. Autorização das pacientes para o uso de antes/depois
5. Depoimentos autorizados · perfil no Google Meu Negócio
6. Ela confirma o argumento "aplico no meu próprio rosto"?

## 1. Diagnóstico
**Resumo:** cirurgiã-dentista (CRO 63940), especialista em HOF pela CPCD, com consultório próprio em BH inaugurado em 30/04/2026. Trabalha com resultado natural, pouco produto e planejamento individual. Hoje só tem Instagram (~1,8 mil seguidores) e um link de WhatsApp.
**Público:** mulheres de 25 a 45 anos, classe A/B, em BH; homens como público secundário (botox). Já conhecem os procedimentos e estão escolhendo **em quem confiar**. Ticket: [PENDENTE].
**Ofertas, em ordem de prioridade:** 1) Avaliação facial personalizada (porta de entrada) · 2) Preenchimento labial · 3) Toxina botulínica · 4) Perfiloplastia / rinomodelação · 5) Bioestimulador / qualidade de pele · 6) Full face.
**Diferencial verificável:** ela publica o volume usado (0,5 a 1 ml nos lábios) e busca o resultado que "ninguém identifica".
**Lacunas:** endereço, WhatsApp, ano de formação, ticket, depoimentos, Google Meu Negócio, **logo (não existe)**.

## 2. Tokens
- Fundo `#F7F5F2` · Areia `#E6DCCF` · Madeira `#C19A6B` · Dourado `#B8975A` (só em linhas e detalhes; para texto em fundo claro, usar `#8A6D3F`, que tem contraste AA) · Preto `#111111` · Rosado `#C9737A` (ponto único, no botão flutuante)
- Títulos: Cormorant Garamond 400/500/600 + itálico · Corpo: Jost 300/400 · Etiquetas: Montserrat 600, caixa-alta, espaçamento de .22 a .34em
- Raio: 4–6px nos cards, 999px nos botões, arco de 260px nos retratos · Sombra: `0 30px 80px -50px rgba(17,17,17,.4)`
- Espaçamento: seções de 96 a 160px; grid fluido com `minmax(min(100%,380px),1fr)`
- **Wordmark:** hoje a marca é um wordmark provisório ("RAPHAELA MORAIS" em Jost 300, espaçamento .34em). Criar um wordmark definitivo = **adicional de escopo**.

## 3. Estratégia
**Proposta de valor:** "Harmonização facial com precisão: o volume necessário para realçar o que já é seu, sem perder a sua identidade."
**Objeções e como a página responde:**
- Medo do exagero → filosofia em destaque + princípios + transparência sobre volumes
- "Ainda sou nova pra botox?" → é a primeira pergunta do FAQ, na voz dela
- Preço → "sob consulta, definido após a avaliação", explicado no FAQ
**CTAs:** principal "Agendar avaliação" (WhatsApp); secundário "conheça a minha filosofia" (âncora). A mensagem pré-preenchida está na seção "Perguntas em aberto".
**Prova disponível:** retratos (hero e sobre), consultório (seção própria), especialização CPCD e CRO. Os antes/depois aparecem só como espaços de imagem nos cards de procedimento, todos marcados [VALIDAR COM A CLIENTE]. Nenhum número, depoimento ou promessa de resultado.

## 4–5. Estrutura e copy
Estão implementadas na página: Hero (parallax) → Filosofia (frase que se revela no scroll) → 4 Princípios (**scroll stack vertical**) → 7 Procedimentos (**scroll stack horizontal**) → Faixa de palavras (marquee ligado ao scroll) → Consultório (colagem em parallax) → Sobre → FAQ (accordion) → CTA final → Rodapé com responsável técnica e CRO.
**Headlines (alterna no Tweak):** A) "Menos não é falta. *É precisão.*" · B) "Realçar o que já é seu, *sem perder a sua identidade.*"

## 6. Prompt para Claude Design
Crie uma landing page de página única para a Dra. Raphaela Morais (cirurgiã-dentista, CRO 63940, especialista em HOF pela CPCD, BH), só para pacientes. Objetivo: agendar a avaliação pelo WhatsApp. Estética clean luxury editorial, leve e luminosa, usando os tokens da seção 2. Estrutura e copy como nas seções 4–5. Animações: parallax sutil nos retratos, stack vertical nos princípios, stack horizontal nos procedimentos e revelação de texto no scroll. Mobile-first. Sem preços, sem depoimentos, sem linguagem de "transformação" e sem urgência; marcar pendências como [PENDENTE] ou [VALIDAR COM A CLIENTE].

## 7. Checklist
- [ ] Endereço + mapa · [ ] WhatsApp oficial · [ ] Autorização de antes/depois · [ ] Depoimentos · [ ] Google Meu Negócio
- [ ] Pedir: fotos do consultório em alta, retratos originais, antes/depois originais, certificado CPCD
- [ ] Propor wordmark como adicional
- [ ] SEO: title "Dra. Raphaela Morais · Harmonização Orofacial em BH", meta description, OG image, schema `Dentist`/`LocalBusiness`
- [ ] Performance: imagens WebP com menos de 200 KB e lazy-load; conferir parallax no iOS
- [ ] Mobile: testar a 375px, CTA flutuante sem cobrir o conteúdo, alvos de toque ≥ 44px
- [ ] Domínio (draraphaelamorais.com.br) · Pixel Meta · GA4

## 8. Mensagem de abordagem
> Olá, Dra. Raphaela, tudo bem? Aqui é [nome], da GR One. Acompanhei a inauguração do seu consultório — "um sonho ganhou forma" — e me chamou atenção como a sua filosofia de que "menos não é falta, é precisão" está presente em cada caso que você compartilha. Tomei a liberdade de preparar uma prévia de como essa filosofia poderia aparecer na internet, numa página própria para as suas pacientes agendarem a avaliação: [link]. Fica como um presente. Se fizer sentido para você, será um prazer conversar. 🤍
