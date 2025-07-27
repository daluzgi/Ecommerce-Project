export const products = [
  {
    name: "Neron",
    description: "Tu mejor compañia!",
    stock: 11,
    price: 30000,
    category: "Senior",
    img: "/img/Old1.jpg",
  },
  {
    name: "Ali",
    description: "Tu mejor compañia!",
    stock: 6,
    price: 30000,
    category: "Senior",
    img: "/img/Old2.jpg",
  },
  {
    name: "Pampa",
    description: "Tu mejor compañia!",
    stock: 1,
    price: 30000,
    category: "Senior",
    img: "/img/Old3.jpg",
  },
  {
    name: "Vienna",
    description: "Tu mejor compañia!",
    stock: 5,
    price: 30000,
    category: "Senior",
    img: "/img/Old4.jpg",
  },
  {
    name: "Roma",
    description: "Tu mejor compañia!",
    stock: 2,
    price: 30000,
    category: "Senior",
    img: "/img/Old5.jpg",
  },
  {
    name: "Tamarindo",
    description: "Tu mejor compañia!",
    stock: 3,
    price: 30000,
    category: "Senior",
    img: "/img/Old6.jpg",
  },
  {
    name: "Angelica",
    description: "Tu mejor compañia!",
    stock: 2,
    price: 30000,
    category: "Senior",
    img: "/img/Old7.jpg",
  },
  {
    name: "Fili",
    description: "Tu mejor compañia!",
    stock: 1,
    price: 30000,
    category: "Senior",
    img: "/img/Old8.jpg",
  },
  {
    name: "Lili",
    description: "Tu mejor compañia!",
    stock: 6,
    price: 30000,
    category: "Senior",
    img: "/img/Old9.jpg",
  },
  {
    name: "Carlos",
    description: "Tu mejor compañia!",
    stock: 5,
    price: 30000,
    category: "Senior",
    img: "/img/Old10.jpg",
  },
  {
    name: "Bull",
    description: "Tu mejor compañia!",
    stock: 3,
    price: 30000,
    category: "Senior",
    img: "/img/Old11.jpg",
  },
  {
    name: "Pikachu",
    description: "Tu mejor compañia!",
    stock: 2,
    price: 30000,
    category: "Senior",
    img: "/img/Old12.jpg",
  },
  {
    name: "Oceano",
    description: "Tu mejor compañia!",
    stock: 1,
    price: 30000,
    category: "Senior",
    img: "/img/Old13.jpg",
  },
  {
    name: "Cona",
    description: "Tu mejor compañia!",
    stock: 2,
    price: 30000,
    category: "Senior",
    img: "/img/Old14.jpg",
  },
  {
    name: "Rolando",
    description: "Tu mejor compañia!",
    stock: 5,
    price: 30000,
    category: "Senior",
    img: "/img/Old15.jpg",
  },
  {
    name: "Terma",
    description: "Tu mejor compañia!",
    stock: 2,
    price: 30000,
    category: "Senior",
    img: "/img/Old16.jpg",
  },
  {
    name: "Wanda",
    description: "Tu mejor compañia!",
    stock: 1,
    price: 30000,
    category: "Senior",
    img: "/img/Old17.jpg",
  },
  {
    name: "Cucho",
    description: "Tu mejor compañia!",
    stock: 2,
    price: 30000,
    category: "Senior",
    img: "/img/Old18.jpg",
  },
];

let error = false;

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Hubo un error. Inténtelo nuevamente más tarde.");
      } else {
        resolve(products);
      }
    }, 3000);
  });
};
