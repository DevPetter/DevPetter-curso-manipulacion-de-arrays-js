const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
let products2 = []

//buscamos la posición del elemento que contiene dicha condición, y lo que hacemos es agregar lo que se encuentra en esa posición a nuestro elemento y de igual forma elimina rel dato que esta en esa misma posición.
const productIndex = products.findIndex((item) => item.id === "🍕");
if (productIndex !== -1) {
  myProducts.push(products[productIndex]);
 products2 = [...products]
  //Eliminar un elemento especifico del array
  products.splice(productIndex, 1)
}

// console.log("products", products);
// console.log("products2", products2);
// console.log("myProducts", myProducts);
// console.log("-".repeat(10));

const update = {
    id: "🍕",
    changes: {
        price: 200,
        description: "Delicioso"
    }
}

const productIndexv2 = products2.findIndex(item => item.id === update.id)
products2[productIndexv2] = {
    ...products2[productIndexv2],
    ...update.changes
}
console.log(products2)


