import { v4 } from "uuid";

export interface IDataPizzas {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
}

export const DataPizzas = [
  {
    id: v4(),
    name: "Vegan Veggie",
    price: 23.95,
    description: "Daiya vegan mozzarella, paired with fresh veggies",
    img: "https://img.cybercook.com.br/receitas/559/pizza-de-presunto-e-mussarela-2-840x480.jpeg?q=75",
  },
  {
    id: v4(),
    name: "Veggie Zupreme",
    price: 19.95,
    description: "The freshest, locally sourced veggies",
    img: "https://www.estadao.com.br/resizer/v2/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg?quality=80&auth=85422b9ae9f827268adb7b84ac2c7620d207e353e18955193beb3480e0b246ac&width=1200&height=900&smart=true",
  },
  {
    id: v4(),
    name: "The O.G.",
    price: 16.95,
    description: "The Margherita—with California flair",
    img: "https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg",
  },
  {
    id: v4(),
    name: "Napoletana",
    description: "Fresh tomatoes and mozzarella cheese.",
    price: 14.99,
    img: "https://content.jdmagicbox.com/comp/delhi/t6/011pxx11.xx11.200819160345.c5t6/catalogue/pizza-time-najafgarh-delhi-pizza-outlets-1fqclerswy.jpg",
  },
  {
    id: v4(),
    name: "Marinara",
    description: "Fresh tomatoes, extra virgin olive oil, oregano and garlic.",
    price: 14.99,
    img: "https://static.itdg.com.br/images/1200-630/b7f54a0f65e624a4862fb721b895bbc9/pizza-caipira.png",
  },
  {
    id: v4(),
    name: "Caprese",
    description: "Fresh mozzarella, tomatoes, basil and balsamic vinegar.",
    price: 14.99,
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/0f/27/03/chopizza.jpg?w=600&h=400&s=1",
  },
  {
    id: v4(),
    name: "Margherita",
    description:
      "Fresh tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
    price: 14.99,
    img: "https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg",
  },
];
