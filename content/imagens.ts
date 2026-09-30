export type Imagem = { src: string; alt: string; position?: string };

// Mapa id do slot -> foto. Slots ausentes mostram o espaço reservado.
export const imagens: Record<string, Imagem> = {
  "hero-retrato": {
    src: "/images/raphaela-hero.webp",
    alt: "Dra. Raphaela Morais sorrindo, em perfil, de camiseta branca no consultório",
    position: "55% 30%",
  },
  "sobre-retrato": {
    src: "/images/raphaela-retrato-pb.webp",
    alt: "Retrato em preto e branco da Dra. Raphaela Morais sorrindo",
    position: "50% 30%",
  },
  "consultorio-1": {
    src: "/images/raphaela-sofa.webp",
    alt: "Dra. Raphaela Morais sorrindo ao olhar o celular, sentada em um sofá ao lado de uma janela com folhagens",
    position: "40% 20%",
  },
};
