//Voy a evaluar que todos los datos sean menores a 30
const numbers = [10, 20, 30, 40, 41, 31];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 30) {
    rta = false;
  }
}

console.log("Ciclo for", rta);
//Every evalua que todos los elementos cumplan la condición
const rta2 = numbers.every((item) => item <= 60);
console.log("Method Every", rta2);

//Evaluar que todos los miembros de este array sean menores de 15 años
const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 16,
  },
];

const menor = team.every((item) => item.age < 15);

console.log("Todos los miembros sean menor de 15 años: ", menor);

// En este desafío tienes un array de números y debes retornar true si dentro de los números de ese array todos los números son pares.

// La solución debería tener un input y output como los siguientes:
// solution([2, 4, 6, 8, 10]);
// solution([1, 3, 5, 7, 10, 11]);
// solution([1, 3, 5]);

// Output
// true
// false
// false

function solution(numbers) {
  return numbers.every((item) => item % 2 === 0);
}
console.log(solution([2, 4, 6, 8, 10]));
console.log(solution([1, 3, 5, 7, 10, 11]));
console.log(solution([1, 3, 5]));
