export const products = [
  {
    name: "Manaos",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy2.jpg",
  },
  {
    name: "Almendro",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy3.jpg",
  },
  {
    name: "Gala",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy3.jpg",
  },
  {
    name: "Neptuno",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy4.jpg",
  },
  {
    name: "Andy",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy5.jpg",
  },
  {
    name: "Mimi",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy6.jpg",
  },
  {
    name: "Ola",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy7.jpg",
  },
  {
    name: "Capi",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy8.jpg",
  },
  {
    name: "Babar",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy9.jpg",
  },
  {
    name: "Archi",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy10.jpg",
  },
  {
    name: "Thor",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy11.jpg",
  },
  {
    name: "Goku",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy12.jpg",
  },
  {
    name: "Mar",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy13.jpg",
  },
  {
    name: "Carol",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy14.jpg",
  },
  {
    name: "Mate",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy15.jpg",
  },
  {
    name: "Sundae",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy16.jpg",
  },
  {
    name: "Gaspar",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy17.jpg",
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
