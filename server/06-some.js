const numbers = [1, 2, 3, 4, 5];
//vamos a evaluar si al menos alguno es un número par
let rta = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}
console.log("Rta Uno", rta);

//Aplicando con some()
const rta2 = numbers.some((element) => element % 2 === 0);
console.log("Rta Dos", rta2);

//APLICABILIDAD DE SOME() CON OBJETOS
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
    },
  ];
  const rta3 = orders.some(item => item.delivered)
  console.log("RTA 3",rta3)
  
    // [{
    //   customerName: "Nicolas",
    //   total: 60,
    //   delivered: true,
    // }]

    