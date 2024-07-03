import { v4 } from "uuid";
import { IDataPizzas } from "./pizzas";

export const DataBurgers: IDataPizzas[] = [
  {
    id: v4(),
    name: "Tribute Burger",
    description: "A mouth-watering honest beef burger",
    img: "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2022/05/origem-do-hambuguer-cnn4.jpg?w=1200&h=900&crop=1",
    price: 16.96,
  },
  {
    id: v4(),
    name: "Pulled Mooshie",
    description: "Spicy vegan burger with jackfruit",
    price: 15.99,
    img: "https://conteudo.imguol.com.br/c/entretenimento/4f/2022/05/03/hamburguer-1651610679144_v2_1x1.jpg",
  },

  {
    id: v4(),
    name: "The Good Burger",
    description:
      "Welcome to Good Burger, home of the Good Burger, can I take your order?",
    price: 17,
    img: "https://blog.colombo.com.br/wp-content/uploads/2021/05/hamburguer-artesanal.jpg",
  },
  {
    id: v4(),
    name: "Crunchy Nacho Burger",
    price: 11.99,
    img: "https://guiadacozinha.com.br/wp-content/uploads/2019/11/hamburguer-mexicano.jpg",
    description:
      "The best combination of crunchiness and softness, all in one single burger",
  },
  {
    id: v4(),
    name: "Barbie Burger",
    price: 13.2,
    img: "https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-na-churrasqueira.jpg",
    description:
      "From a pink explosion was born Barbie Burger, a special edition in partnership with Mattel",
  },
  {
    id: v4(),
    name: "Curry On My Wayward Bun",
    price: 19.16,
    img: "https://www.plasutil.com.br/wp-content/uploads/2022/04/Hamburguer.jpg",
    description: "N/A",
  },
];
