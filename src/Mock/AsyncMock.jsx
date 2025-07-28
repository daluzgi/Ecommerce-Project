export const products = [
  {
    name: "Transportadora",
    description: "Súper resistente para transportar a tu mascota.",
    stock: 5,
    price: 100000,
    category: "Accesories",
    img: "/img/Accesorios/Transportadora.png",
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
