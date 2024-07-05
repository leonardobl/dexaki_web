import { v4 } from "uuid";

export interface IDataProducts {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
  category: string;
}

export const DataProducts = [
  {
    id: v4(),
    category: "burger",
    name: "Tribute Burger",
    description: "A mouth-watering honest beef burger",
    img: "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/origem-do-hambuguer-cnn4.jpg?w=1200&h=900&crop=1",
    price: 16.96,
  },
  {
    id: v4(),
    category: "burger",
    name: "Pulled Mooshie",
    description: "Spicy vegan burger with jackfruit",
    price: 15.99,
    img: "https://conteudo.imguol.com.br/c/entretenimento/4f/2022/05/03/hamburguer-1651610679144_v2_1x1.jpg",
  },

  {
    id: v4(),
    category: "burger",
    name: "The Good Burger",
    description:
      "Welcome to Good Burger, home of the Good Burger, can I take your order?",
    price: 17,
    img: "https://blog.colombo.com.br/wp-content/uploads/2021/05/hamburguer-artesanal.jpg",
  },
  {
    id: v4(),
    category: "burger",
    name: "Crunchy Nacho Burger",
    price: 11.99,
    img: "https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg",
    description:
      "The best combination of crunchiness and softness, all in one single burger",
  },
  {
    id: v4(),
    category: "burger",
    name: "Barbie Burger",
    price: 13.2,
    img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg",
    description:
      "From a pink explosion was born Barbie Burger, a special edition in partnership with Mattel",
  },
  {
    id: v4(),
    category: "burger",
    name: "Curry On My Wayward Bun",
    price: 19.16,
    img: "https://www.plasutil.com.br/wp-content/uploads/2022/04/Hamburguer.jpg",
    description: "N/A",
  },
  {
    id: v4(),
    category: "pizza",
    name: "Vegan Veggie",
    price: 23.95,
    description: "Daiya vegan mozzarella, paired with fresh veggies",
    img: "https://img.cybercook.com.br/receitas/559/pizza-de-presunto-e-mussarela-2-840x480.jpeg?q=75",
  },
  {
    id: v4(),
    category: "pizza",
    name: "Veggie Zupreme",
    price: 19.95,
    description: "The freshest, locally sourced veggies",
    img: "https://www.estadao.com.br/resizer/v2/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg?quality=80&auth=85422b9ae9f827268adb7b84ac2c7620d207e353e18955193beb3480e0b246ac&width=1200&height=900&smart=true",
  },
  {
    id: v4(),
    category: "pizza",
    name: "The O.G.",
    price: 16.95,
    description: "The Margherita—with California flair",
    img: "https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg",
  },
  {
    id: v4(),
    category: "pizza",
    name: "Napoletana",
    description: "Fresh tomatoes and mozzarella cheese.",
    price: 14.99,
    img: "https://content.jdmagicbox.com/comp/delhi/t6/011pxx11.xx11.200819160345.c5t6/catalogue/pizza-time-najafgarh-delhi-pizza-outlets-1fqclerswy.jpg",
  },
  {
    id: v4(),
    category: "pizza",
    name: "Marinara",
    description: "Fresh tomatoes, extra virgin olive oil, oregano and garlic.",
    price: 14.99,
    img: "https://static.itdg.com.br/images/1200-630/b7f54a0f65e624a4862fb721b895bbc9/pizza-caipira.png",
  },
  {
    id: v4(),
    category: "pizza",
    name: "Caprese",
    description: "Fresh mozzarella, tomatoes, basil and balsamic vinegar.",
    price: 14.99,
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/0f/27/03/chopizza.jpg?w=600&h=400&s=1",
  },
  {
    id: v4(),
    category: "pizza",
    name: "Margherita",
    description:
      "Fresh tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
    price: 14.99,
    img: "https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg",
  },
];
