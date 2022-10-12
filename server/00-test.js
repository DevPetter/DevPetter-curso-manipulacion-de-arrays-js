// const array = [{age: 1}, {age:2}]; 
// const rta = array.map(item => {   
//   item.name = 'My name';
//   return item; 
// })

// console.log(rta)

// const array = [11, 1, 13, 99, 8]
// array.sort((a,b)=> a - b)
// console.log(array)

// const array = ['a', 'bb', 'ccc']; 
// const rta = array.map(item => item.length);


const array = [1,1,1,1,1] 
const rta = array.reduce((total, item)=> total + item, 10)
console.log(rta)
