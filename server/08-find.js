const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found)// expected output: 12
console.log(typeof(found)); 

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
//De esta forma encuentro el elemento que cumple con dicha condición
  const product = products.find(element => element.price ===34)
  console.log("find elemento: ", product)
//De esta forma capturo la posición de un elemento del array
  const index = products.findIndex(element => element.price===34)
  console.log("findIndex: ", index)



  
  