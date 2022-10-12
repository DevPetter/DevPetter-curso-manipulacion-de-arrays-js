const elementos = ["agua", "tierra", "fuego", "aire"];

let final = "";
const separar = "--";

for (let index = 0; index < elementos.length; index++) {
  const element = elementos[index];
  final = final + element + separar;
}

console.log("Usando ciclo for: ",final);
//Method Join de array
const separador = elementos.join("--")
console.log("Usando join: ",separador)


//method SPLIT
const title = "haciendo uso del método Split"
const newArray = title.split(" ")

console.log(newArray)


// En este desafío vas a recibir el título de un artículo y tú debes transformarlo en un formato de URL en donde normalmente se transforma todo en minúscula y se cambian los espacios por un guion (-), por ejemplo: Curso de arrays => curso-de-arrays
// La solución debería tener un input y output como los siguientes:
// solution("La forma de correr JAVASCRIPT");
// Output
// "la-forma-de-correr-javascript


const cadena = "La forma de correr JAVASCRIPT"
const title2 = cadena.toLowerCase().split(" ").join("-")
console.log(title2)

function solution(title){
return title.toLowerCase().split(" ").join("-")
}

solution("La forma de correr ")
