const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Pedro",
    total: 600,
    delivered: false,
  },
  {
    customerName: "Sara",
    total: 80,
    delivered: false,
  },
  {
    customerName: "Juan",
    total: 70,
    delivered: false,
  },
  {
    customerName: "Isidora",
    total: 100,
    delivered: true,
  },
];

//En este ejemplo estamos transformando de un array de objeto a un array de número
const total = orders.map((items) => items.total);
//Me imprime un nuevo arra solo con los totales

const taxes = orders.map((item) => {
 
  //Generamos un nuevo objeto y no mutamos el original
  return {
    ...item,
    tax: item.total*0.19
  };
});
console.log("Array de taxes", taxes);
console.log("Array de total", total);
console.log("Array original", orders);
