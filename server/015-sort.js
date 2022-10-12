// Ordenamiento de arreglos haciendo uso del method sort

const months = ["March", "Jan", "Feb", "Dec"];
months.sort()
console.log(months)//Lo organiza de forma ascendente según el código ASCII

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b) //recibe una arrown función y compara los valores para verificar si es mayor o menor
console.log(numbers)

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
//Compara según la versión unicode que se este trabajando
words.sort((a,b)=> a.localeCompare(b))
console.log(words)

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

orders.sort((a,b)=> a.total - b.total )
console.log(orders)




