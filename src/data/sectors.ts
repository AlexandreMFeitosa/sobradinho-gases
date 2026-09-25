interface Sector {
  id: string;
  name: string;
  description: string;
  applications: string[];
  image: string;
}

export const sectors: Sector[] = [
  {
    id: "hospitais-e-clinicas",
    name: "Hospitais e Clínicas",
    description:
      "Fornecimento de gases médicos para instituições de saúde.",
    applications: [
      "Atendimento a hospitais e clínicas",
      "Gases para aplicações medicinais",
      "Suporte às necessidades de instituições de saúde",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/oxigenio.webp?v=2",
  },

  {
    id: "industrias-e-manufatura",
    name: "Indústrias e Manufatura",
    description:
      "Fornecimento de gases industriais para diversos setores.",
    applications: [
      "Processos industriais",
      "Fabricação e manufatura",
      "Aplicações com gases industriais",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/argonio.webp?v=2",
  },

  {
    id: "laboratorios-de-pesquisa-e-analise",
    name: "Laboratórios de Pesquisa e Análise",
    description:
      "Fornecimento de gases para laboratórios de pesquisa e análise.",
    applications: [
      "Laboratórios de pesquisa",
      "Análises laboratoriais",
      "Processos de controle e análise",
    ],
    image:
      "https://oxiriber.com.br/img/produtos/helio.webp?v=2",
  },
];