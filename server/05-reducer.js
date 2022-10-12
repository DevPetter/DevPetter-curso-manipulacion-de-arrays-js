//Conteo de datos con un ciclo for
// const totals = [0,1,2,3,4,5,6,7,8,9]

let total = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  total += element;
}

console.log(total); // output  = 45

//Ejemplo uno con REDUCE()
const totals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = totals.reduce((acumulador, item) => acumulador + item, 0);
console.log(sum); // output  = 45

//Ejemplo con DOS con REDUCE()
function solution(numbers) {
  return numbers.reduce((total, item) => total + item, 0);
}
console.log(solution([1, 1, 1])); // output  = 3
console.log(solution([2, 4, 8])); // output  = 14

//Ejemplo TRES con REDUCE()
// El objetivo de este problema es que nos haga un conteo de cuantas veces se repite un número y nos retorne la respuesta en un objeto
const items = [3, 3, 1, 2];

const newObj = items.reduce((obj, item) => {
  //code
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(newObj); //outPut { '1': 1, '2': 1, '3': 2 }

