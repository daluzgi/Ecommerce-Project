const products = [
  {
    id: "01",
    name: "Freddy",
    description: "Super amigable! :)",
    stock: 10,
    price: 30000,
    category: "Senior",
    img: "/img/Senior.png",
  },
  {
    id: "02",
    name: "Pipa",
    description: "Tranquila y da la pata.",
    stock: 4,
    price: 30000,
    category: "Adult",
    img: "/img/Adult.png",
  },
  {
    id: "03",
    name: "Canelon",
    description: "Le gusta dormir tapadito.",
    stock: 8,
    price: 30000,
    category: "Puppy",
    img: "/img/Puppy.png",
  },
  {
    id: "04",
    name: "Pretal con correa",
    description: "Pretal con correa para llevar a pasear a tu amigo peludito.",
    stock: 4,
    price: 25000,
    category: "Accesories",
    img: "/img/Leash.png",
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
