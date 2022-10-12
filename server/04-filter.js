const words = [
  "nombre",
  "animal",
  "cama",
  "mesa",
  "televisor",
  "computador",
  "cocina",
  "animales",
];

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];

  if (element.length > 6) {
    newArray.push(element);
  }
}

//Mtodo filter de arrays
const filterLis = words.filter((item) => item.length > 6);
//Opciones para de hacer un filter
console.log("Array original: ", words);
console.log("Array con ciclo for: ", newArray);
console.log("Array con filter: ", filterLis);

//Crear un filter en el cual capturemos todas las ordenes de compra que han sido entregadas
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
  {
    customerName: "Pedro",
    total: 60,
    delivered: true,
  }
];

// const delivered = orders.filter(
//   (itemTrue) => itemTrue.delivered && itemTrue.total >= 100
// );

// console.log(delivered);

//Realizando un buscador

const search = (query)=>{
    return orders.filter(item =>{
        return item.customerName.includes(query)
    })
}

console.log(search("Pedro"))

