export interface Celula {
  id: string
  nome: string
  lider: string
  endereco: string
  bairro: string
  dia: string
  horario: string
  lat: number
  lng: number
  rede: string
}

export interface Rede {
  id: string
  nome: string
  descricao: string
  supervisor: string
  cor: string
  publico: string
}

export const redes: Rede[] = [
  {
    id: "viva-kids",
    nome: "Viva KIDS",
    descricao:
      "Rede de células voltada para crianças, onde elas aprendem sobre Jesus de forma lúdica e divertida, desenvolvendo valores cristãos desde cedo.",
    supervisor: "Líder a definir",
    cor: "bg-yellow-500",
    publico: "Crianças de 4 a 11 anos",
  },
  {
    id: "rede-jovem",
    nome: "Rede Jovem",
    descricao:
      "Células para jovens que buscam crescer na fé, desenvolver relacionamentos saudáveis e descobrir seu propósito em Deus.",
    supervisor: "Líder a definir",
    cor: "bg-purple-500",
    publico: "Jovens de 12 a 17 anos",
  },
  {
    id: "rede-ebenezer",
    nome: "Rede Ebenézer",
    descricao:
      "Rede focada em adultos que desejam aprofundar seu conhecimento bíblico e fortalecer sua caminhada cristã através da comunhão.",
    supervisor: "Líder a definir",
    cor: "bg-blue-500",
    publico: "Adultos",
  },
  {
    id: "rede-jardim-regado",
    nome: "Rede Jardim Regado",
    descricao:
      "Células que cultivam relacionamentos profundos e verdadeiros, onde cada membro é cuidado e regado com amor e palavra de Deus.",
    supervisor: "Líder a definir",
    cor: "bg-green-500",
    publico: "Adultos",
  },
  {
    id: "rede-vida",
    nome: "Rede Vida",
    descricao:
      "Rede dedicada a compartilhar a vida em Cristo, promovendo transformação e crescimento espiritual através do discipulado.",
    supervisor: "Líder a definir",
    cor: "bg-red-500",
    publico: "Adultos",
  },
  {
    id: "rede-junis",
    nome: "Rede JUNIS",
    descricao:
      "Rede para jovens universitários e jovens adultos, focada em questões relevantes para essa fase da vida, sempre à luz da Palavra.",
    supervisor: "Líder a definir",
    cor: "bg-orange-500",
    publico: "Jovens adultos (18-30 anos)",
  },
]

// Coordenadas da igreja: Av. Dr. João Dentice, 241, Restinga, Porto Alegre
export const igrejaLocation = {
  lat: -30.1166,
  lng: -51.0927,
  nome: "Igreja Viva em Células",
  endereco: "Av. Dr. João Dentice, 241, Restinga, Porto Alegre - RS",
}

// Células de exemplo (você pode adicionar mais células reais depois)
export const celulas: Celula[] = [
  {
    id: "1",
    nome: "Célula Viva KIDS - Centro",
    lider: "Ana Silva",
    endereco: "Rua das Flores, 123",
    bairro: "Restinga",
    dia: "Sábado",
    horario: "15h",
    lat: -30.115,
    lng: -51.091,
    rede: "viva-kids",
  },
  {
    id: "2",
    nome: "Célula Jovem - Esperança",
    lider: "João Santos",
    endereco: "Rua da Paz, 456",
    bairro: "Restinga",
    dia: "Sexta-feira",
    horario: "19h30",
    lat: -30.118,
    lng: -51.094,
    rede: "rede-jovem",
  },
  {
    id: "3",
    nome: "Célula Ebenézer - Fé",
    lider: "Maria Oliveira",
    endereco: "Av. Principal, 789",
    bairro: "Restinga",
    dia: "Quarta-feira",
    horario: "20h",
    lat: -30.114,
    lng: -51.095,
    rede: "rede-ebenezer",
  },
  {
    id: "4",
    nome: "Célula Jardim Regado - Amor",
    lider: "Pedro Costa",
    endereco: "Rua do Jardim, 321",
    bairro: "Restinga",
    dia: "Terça-feira",
    horario: "19h",
    lat: -30.119,
    lng: -51.09,
    rede: "rede-jardim-regado",
  },
  {
    id: "5",
    nome: "Célula Vida - Renovação",
    lider: "Carla Mendes",
    endereco: "Rua Nova Vida, 654",
    bairro: "Restinga",
    dia: "Quinta-feira",
    horario: "20h",
    lat: -30.113,
    lng: -51.093,
    rede: "rede-vida",
  },
  {
    id: "6",
    nome: "Célula JUNIS - Universitários",
    lider: "Lucas Ferreira",
    endereco: "Rua dos Estudantes, 987",
    bairro: "Restinga",
    dia: "Sexta-feira",
    horario: "20h30",
    lat: -30.117,
    lng: -51.092,
    rede: "rede-junis",
  },
]
