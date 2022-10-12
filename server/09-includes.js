
  const array1 = [5, 12, 8, 130, 44];
  const inclu = array1.includes(5)
  console.log(inclu)

//En este desafío vas a tener un string y debes buscar si ese string tiene un término de búsqueda, por ejemplo verificar si dentro de la frase "Ana lava la tina" está el término "ana" y si lo tiene retornar un true de lo contrario retornar un false, debes tener en cuenta que debe encontrar coincidencias, así la el término de búsqueda sea mayúscula o minúscula.

// La solución debería tener un input y output como los siguientes:

// solution("Ana lava la tina", "Ana");
// solution("Santiago", "tiago");
// solution("Nicolas", "ana");

function solution(word, query){
    return word.includes(query)
}

console.log(solution("Ana lava la tina", "Ana"))
console.log(solution("Santiago", "tiago"))
console.log(solution("Nicolas", "ana"))