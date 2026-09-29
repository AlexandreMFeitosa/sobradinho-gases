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
      "/products/oxigenio-gases.jpg",
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
      "/products/dioxido-carbono-gases.jpg",
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
      "/products/nitrogenio-gases.jpg",
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
      "/products/argonio-gases.jpg",
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
      "/products/acetileno-gases.jpg",
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
      "/products/soldagem-gases.jpg",
  },

  {
  id: "hidrogenio",
  name: "Hidrogênio",
  description:
    "Gás utilizado em aplicações industriais e processos específicos que necessitam de hidrogênio.",
  type: "Industrial",
  applications: [
    "Processos industriais",
    "Laboratórios",
    "Aplicações específicas",
  ],
  image: "/products/hidrogenio-gases.jpg",
},
{
  id: "helio",
  name: "Hélio",
  description:
    "Gás utilizado em aplicações industriais, laboratoriais e processos que necessitam de suas propriedades específicas.",
  type: "Industrial",
  applications: [
    "Laboratórios",
    "Processos industriais",
    "Aplicações específicas",
  ],
  image: "/products/helio-gases.jpg",
},
{
  id: "oxido-nitroso",
  name: "Óxido Nitroso",
  description:
    "Gás utilizado em aplicações específicas nos setores industrial, comercial e medicinal.",
  type: "Industrial",
  applications: [
    "Aplicações industriais",
    "Setor comercial",
    "Aplicações específicas",
  ],
  image: "/products/nitro-gases.jpg",
}

];