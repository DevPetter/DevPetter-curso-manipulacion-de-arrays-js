// //RETO CREAR DUPLICADO
// // const numbers = [2,3,4,5,6]
// // function solution(numbers) {
// //     // Código para duplicar los elementos de un array
// //     const duplicado = numbers.map( item=>item*2)
// //     return duplicado

// // };

// // console.log(solution(numbers))

// //RETO
// // Tienes un array de productos con los siguientes atributos:
// // name
// // price
// // stock
// // Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.
// // Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.
// // La solución debería tener un input y output como los siguientes:
// const products = [
//   {
//     name: "Product 1",
//     price: 1000,
//     stock: 10,
//   },
//   {
//     name: "Product 2",
//     price: 2000,
//     stock: 20,
//   },
// ];

// function arrayProductos(products) {
//   // Tu código aquí
//   const newProducts = products.map((item) => {
//     return {
//       ...item,
//       taxes: Math.trunc(item.price * 0.19),
//     };
//   });

//   return newProducts;
// }

// console.log(arrayProductos(products));

// //Ejercicios filter

// const orders = [
//   {
//     customerName: "Nicolas",
//     total: 60,
//     delivered: true,
//   },
//   {
//     customerName: "Pedro",
//     total: 600,
//     delivered: true,
//   },
//   {
//     customerName: "Sara",
//     total: 80,
//     delivered: false,
//   },
//   {
//     customerName: "Juan",
//     total: 70,
//     delivered: false,
//   },
//   {
//     customerName: "Isidora",
//     total: 100,
//     delivered: true,
//   },
// ];

// function solution(array) {
//   return array.filter((item) =>
//   item.total >= 100 && item.delivered
//   );
// }

// console.log(solution(orders))

function solution(numbers) {
  // Tu código aquí 👈
  let rta = numbers.some((element) => element % 2 === 0);
  return rta;
}

console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([1, 3, 5]));
