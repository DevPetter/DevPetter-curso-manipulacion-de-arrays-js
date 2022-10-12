const app = document.getElementById("app")

const letters = ["a","b","c","d"];
const newArray = letters.map(item => {
    return `<li>${item}abc</li>`
} )

app.innerHTML = newArray.join()

console.log("Array original: ",letters)
console.log("Array nuevo: ", newArray)


// const list = products.map(product => {
//     return `<li>${product.title} - ${product.price}</li>`
// })

// app.innerHTML = list.join("")