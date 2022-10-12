const title = document.getElementById("title")
const tarea = document.getElementById("tarea")

const tasks = [
    {
        name:"Estudio",
        type: "Trabajo de JS",
        state: "doing",
        date:"19 Septiembre"
    },
    {
        name:"Trabajo",
        type: "Entrega planeaciones",
        state: "done",
        date:"17 Septiembre"
    },
    {
        name:"casa",
        type: "Mercar",
        state: "pending",
        date:"25 Septiembre"
    }
]

title.innerHTML +=`<h1>Ejercicio</h1>`

tasks.forEach(task =>{
    tarea.innerHTML += `
    <ol>${task.name}</ol> 
    <li>${task.type}</li> 
    <li> ${task.date}</li>
    <li> ${task.state}</li>`
})