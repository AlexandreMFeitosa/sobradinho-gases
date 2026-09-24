export interface Product {
  id: string;
  name: string;
  description: string;
  type: "Medicinal" | "Industrial";
  applications: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "oxigenio-medicinal",
    name: "Oxigênio Medicinal",
    description:
      "Gás medicinal utilizado em hospitais, clínicas e atendimentos de saúde que necessitam de suporte de oxigênio.",
    type: "Medicinal",
    applications: [
      "Hospitais",
      "Clínicas e consultórios",
      "Atendimento domiciliar",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
  },

  {
    id: "dioxido-carbono",
    name: "Dióxido de Carbono",
    description:
      "Gás utilizado em diferentes processos comerciais e industriais, atendendo aplicações que necessitam de dióxido de carbono.",
    type: "Industrial",
    applications: [
      "Indústria alimentícia",
      "Bebidas",
      "Processos industriais",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
  },

  {
    id: "nitrogenio",
    name: "Nitrogênio",
    description:
      "Gás utilizado em processos industriais e comerciais que necessitam de uma atmosfera controlada ou aplicação específica.",
    type: "Industrial",
    applications: [
      "Indústrias",
      "Laboratórios",
      "Processos de conservação",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
  },

  {
    id: "argonio",
    name: "Argônio",
    description:
      "Gás utilizado principalmente em processos industriais e aplicações de soldagem que exigem uma atmosfera controlada.",
    type: "Industrial",
    applications: [
      "Soldagem",
      "Metalurgia",
      "Processos industriais",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
  },

  {
    id: "acetileno",
    name: "Acetileno",
    description:
      "Gás utilizado em aplicações industriais específicas, especialmente em processos relacionados a corte e soldagem.",
    type: "Industrial",
    applications: [
      "Corte de metais",
      "Soldagem",
      "Aplicações industriais",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
  },

  {
    id: "mistura-solda",
    name: "Mistura para Soldagem",
    description:
      "Mistura de gases desenvolvida para aplicações de soldagem e processos industriais que necessitam de composição específica.",
    type: "Industrial",
    applications: [
      "Soldagem MIG",
      "Metalurgia",
      "Fabricação industrial",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
  },
];