// Conteúdo e configurações da landing. Edite aqui sem mexer no layout.

export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const site = {
  nome: "Dra. Raphaela Morais",
  titulo: "Harmonização Orofacial em BH | Dra. Raphaela Morais",
  descricao:
    "Harmonização facial com planejamento individual e resultado natural em Belo Horizonte. Dra. Raphaela Morais, cirurgiã-dentista, CRO 63940, especialista em HOF.",

  // Número no formato 5531XXXXXXXXX ativa a mensagem pré-preenchida.
  // Vazio: usa o link curto do WhatsApp Business abaixo.
  whatsapp: "",
  whatsappLink: "https://wa.me/message/6BKKQTJL43HHK1",
  whatsappMensagem: "Olá, Dra. Raphaela! Quero agendar uma avaliação 🤍",

  // "A" = "Menos não é falta. É precisão." · "B" = "Realçar o que já é seu..."
  headline: "A" as "A" | "B",
  // Etiquetas [PENDENTE]/[VALIDAR] do design. Desligue antes de ir ao ar para o público.
  mostrarPendencias: true,
  // Intensidade do parallax (0 a 2).
  parallax: 1,

  frase:
    "Quando o resultado parece leve, discreto e ninguém identifica exatamente o que foi feito… é porque deu certo.",

  procedimentos: [
    { estilo: "L", n: "01", tag: "O mais procurado", title: "Preenchimento labial", text: "Contorno, correção de assimetria e hidratação, respeitando o formato natural da sua boca. Nos casos que compartilho, costumo trabalhar entre 0,5 ml e 1 ml.", note: "O volume é consequência do planejamento — nunca o ponto de partida.", ph: "Close de lábios [VALIDAR autorização da paciente]" },
    { estilo: "S", n: "02", tag: "Preventivo · terço superior", title: "Toxina botulínica", text: "Suaviza as linhas de expressão preservando os seus movimentos. Também em pontos estratégicos: cauda da sobrancelha, bunny lines, asa do nariz, depressor do lábio, Nefertiti e platisma.", note: "Afinal, quando é a hora certa de começar?", ph: "Testa em repouso / contração [VALIDAR]" },
    { estilo: "D", n: "03", tag: "Proporção", title: "Perfiloplastia", text: "Um olhar para o perfil como um todo: equilíbrio entre nariz, lábios e queixo, para que cada parte converse com a outra.", note: "Harmonia é relação, não um detalhe isolado.", ph: "Perfil — caso real [VALIDAR]" },
    { estilo: "L", n: "04", tag: "Sutileza", title: "Rinomodelação", text: "Pequenos ajustes no contorno do nariz, sem cirurgia, para realçar o que já existe na sua face.", note: "Realçar, não transformar.", ph: "Rinomodelação [VALIDAR]" },
    { estilo: "S", n: "05", tag: "Firmeza", title: "Bioestimulador de colágeno", text: "Estimula a produção do seu próprio colágeno para mais firmeza e sustentação, com melhora progressiva ao longo do tempo.", note: "Cuidar hoje é prevenir amanhã.", ph: "Textura de pele / luz natural" },
    { estilo: "D", n: "06", tag: "Regenerativa", title: "Qualidade de pele", text: "Protocolos de estética regenerativa para uma pele mais saudável e iluminada — a base de qualquer harmonização.", note: "Beleza também é saúde.", ph: "Detalhe de pele / consultório" },
    { estilo: "L", n: "07", tag: "Estruturação", title: "Full face", text: "Um planejamento global do rosto, com produto bem distribuído para contorno e sustentação — sempre com a sua identidade como referência.", note: "Menos excessos, mais estratégia.", ph: "Full face — caso real [VALIDAR]" },
  ],

  faqs: [
    { q: "Afinal, quando é a hora certa de começar o botox?", a: "Essa é uma das perguntas que mais recebo. Não existe uma idade certa: o que define é a sua pele, a forma como você se expressa e o que você deseja prevenir. Por isso tudo começa com uma avaliação." },
    { q: "Tenho medo de ficar artificial. Como você evita o exagero?", a: "Esse é o centro do meu trabalho. Planejo com o volume necessário para o seu rosto e respeito a sua anatomia. Quando ninguém identifica exatamente o que foi feito, é porque deu certo." },
    { q: "Como funciona a avaliação facial?", a: "É uma conversa sem pressa. Entendo o que te incomoda e o que você deseja, analiso a sua face e explico, com transparência, o que faz sentido para você — e o que não faz." },
    { q: "Quanto custa?", a: "O investimento é sob consulta, porque depende do seu planejamento. Na avaliação eu te explico cada etapa e o valor antes de qualquer procedimento." },
    { q: "Onde fica o consultório?", a: "Em Belo Horizonte (MG), em um espaço novo, inaugurado em abril de 2026. Me chama no WhatsApp que eu te envio a localização." },
  ],
};

// Paletas dos cards de procedimento.
export const estilosCard = {
  L: { bg: "#FFFDFB", fg: "#111111", num: "#8A6D3F", img: "#E6DCCF" },
  S: { bg: "#E6DCCF", fg: "#111111", num: "#6E5530", img: "#DCCFBE" },
  D: { bg: "#111111", fg: "#F7F5F2", num: "#C19A6B", img: "#2A2520" },
} as const;
