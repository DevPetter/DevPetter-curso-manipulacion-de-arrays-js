const user = [
    {userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    {userId: 1, username: "Tom", attributes: ["Lovey", "Cute"]},
    {userId: 1, username: "Tom", attributes: ["Cool", "Cute"]}
    ]

    // const rta = user.map(user => user.attributes).flat()
    // console.log("map y flat",rta)

    const rta2 = user.flatMap(user => user.attributes)
    console.log("Method Flatmap: ", rta2)

//Rta de la API de google calendar. Quiero un array de las fechas de inicio de este objeto

    const calendars = {
        primaryCalendar: [
          {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
          },
          {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
          },
        ],
        secondaryCalendar: [
          {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
          },
          {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
          },
        ],
      };

      const rta3 = Object.values(calendars).flatMap(item => {
        // console.log(item)
        return item.map( date => date.startDate)

      })
      console.log(rta3)


// En este desafío tienes array de strings y cada línea es un fragmento, el Zen de Python, tu reto es hacer un método que retorne el número de palabras totales que tiene el array.

// La solución debería tener un input y output como los siguientes:

// Input

// solution([
//   "Beautiful is better than ugly",
//   "Explicit is better than implicit",
//   "Simple is better than complex",
//   "Complex is better than complicated",
// ]);

// Output
// 20



const lines = [
      "Beautiful is better than ugly",
      "Explicit is better than implicit",
      "Simple is better than complex",
      "Complex is better than complicated",
    ]

function solution(lines) {
    // Tu código aquí 👈 
    const rta4 = lines.flatMap(word => word.split(' '))
    const frase = rta4.length
    return frase
}; 


