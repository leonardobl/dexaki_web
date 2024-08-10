export interface IDataProducts {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
  category: {
    id: string;
    name: string;
    icon: string;
  };
}

export interface IDataGetProducts extends IDataProducts {
  quantity: number;
}

export const DataProducts = [
  {
    id: "2b3f7e1d-c27a-40b2-9e2c-5f6a7e9d4b13",
    category: {
      id: "66b6421195ff9a9091929001",
      name: "burger",
      icon: "🍔",
    },
    name: "Tribute Burger",
    description: "A mouth-watering honest beef burger",
    img: "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/origem-do-hambuguer-cnn4.jpg?w=1200&h=900&crop=1",
    price: 16.96,
  },
  {
    id: "3d7e5b2f-a18c-45d6-9c4a-2b8e7f1c6e21",
    category: {
      id: "66b6421195ff9a9091929001",
      name: "burger",
      icon: "🍔",
    },
    name: "Pulled Mooshie",
    description: "Spicy vegan burger with jackfruit",
    price: 15.99,
    img: "https://conteudo.imguol.com.br/c/entretenimento/4f/2022/05/03/hamburguer-1651610679144_v2_1x1.jpg",
  },

  {
    id: "8f2c1b3e-9d4e-49b6-8c3a-7a1d2e4f6b89",
    category: {
      id: "66b6421195ff9a9091929001",
      name: "burger",
      icon: "🍔",
    },
    name: "The Good Burger",
    description:
      "Welcome to Good Burger, home of the Good Burger, can I take your order?",
    price: 17,
    img: "https://blog.colombo.com.br/wp-content/uploads/2021/05/hamburguer-artesanal.jpg",
  },
  {
    id: "4e6a9f1d-b12c-42a7-8f5e-3d9c1b7e8d64",
    category: {
      id: "66b6421195ff9a9091929001",
      name: "burger",
      icon: "🍔",
    },
    name: "Crunchy Nacho Burger",
    price: 11.99,
    img: "https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg",
    description:
      "The best combination of crunchiness and softness, all in one single burger",
  },
  {
    id: "7b4d3e2a-8c5f-41b6-9d1a-6e3b4f7a1c58",
    category: {
      id: "66b6421195ff9a9091929001",
      name: "burger",
      icon: "🍔",
    },
    name: "Barbie Burger",
    price: 13.2,
    img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg",
    description:
      "From a pink explosion was born Barbie Burger, a special edition in partnership with Mattel",
  },
  {
    id: "1d2e6b3f-9a8c-42d7-8f4a-7b5e1c3a9d72",
    category: {
      id: "66b6421195ff9a9091929001",
      name: "burger",
      icon: "🍔",
    },
    name: "Curry On My Wayward Bun",
    price: 19.16,
    img: "https://www.plasutil.com.br/wp-content/uploads/2022/04/Hamburguer.jpg",
    description: "N/A",
  },
  {
    id: "5a9c7b1d-4e3f-48c6-9d2a-8f1b2e7d3c61",
    category: {
      id: "66b6421195ff9a909192902",
      name: "pizza",
      icon: "🍕",
    },
    name: "Vegan Veggie",
    price: 23.95,
    description: "Daiya vegan mozzarella, paired with fresh veggies",
    img: "https://img.cybercook.com.br/receitas/559/pizza-de-presunto-e-mussarela-2-840x480.jpeg?q=75",
  },
  {
    id: "3b2e1c9d-7a6f-49d8-8f4c-2d5b3a9e1d47",
    category: {
      id: "66b6421195ff9a909192902",
      name: "pizza",
      icon: "🍕",
    },
    name: "Veggie Zupreme",
    price: 19.95,
    description: "The freshest, locally sourced veggies",
    img: "https://www.estadao.com.br/resizer/v2/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg?quality=80&auth=85422b9ae9f827268adb7b84ac2c7620d207e353e18955193beb3480e0b246ac&width=1200&height=900&smart=true",
  },
  {
    id: "6f5a3e4b-2d9c-41b7-8f1a-7e8d6b9a3c25",
    category: {
      id: "66b6421195ff9a909192902",
      name: "pizza",
      icon: "🍕",
    },
    name: "The O.G.",
    price: 16.95,
    description: "The Margherita—with California flair",
    img: "https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg",
  },
  {
    id: "9d1b2e8c-5f4a-47c6-8b3d-6a7f1e2d4b98",
    category: {
      id: "66b6421195ff9a909192902",
      name: "pizza",
      icon: "🍕",
    },
    name: "Napoletana",
    description: "Fresh tomatoes and mozzarella cheese.",
    price: 14.99,
    img: "https://content.jdmagicbox.com/comp/delhi/t6/011pxx11.xx11.200819160345.c5t6/catalogue/pizza-time-najafgarh-delhi-pizza-outlets-1fqclerswy.jpg",
  },
  {
    id: "4f7c3a2d-8e1b-42d9-9f5a-3b6e1d9a7c53",
    category: {
      id: "66b6421195ff9a909192902",
      name: "pizza",
      icon: "🍕",
    },
    name: "Marinara",
    description: "Fresh tomatoes, extra virgin olive oil, oregano and garlic.",
    price: 14.99,
    img: "https://static.itdg.com.br/images/1200-630/b7f54a0f65e624a4862fb721b895bbc9/pizza-caipira.png",
  },
  {
    id: "1a6b5d9f-3e7c-48b2-9f4d-2c8e3a1b7d64",
    category: {
      id: "66b6421195ff9a909192902",
      name: "pizza",
      icon: "🍕",
    },
    name: "Caprese",
    description: "Fresh mozzarella, tomatoes, basil and balsamic vinegar.",
    price: 14.99,
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/0f/27/03/chopizza.jpg?w=600&h=400&s=1",
  },
  {
    id: "8c2f1e3b-9d7a-41b4-8f5c-6a3d2b4e1f78",
    category: {
      id: "66b6421195ff9a909192902",
      name: "pizza",
      icon: "🍕",
    },
    name: "Margherita",
    description:
      "Fresh tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
    price: 14.99,
    img: "https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg",
  },
];
