//const students = ['joão', 'maria', 'pedro', 'carla', 'bia', 'mauricio']


//console.log(students.sort())


//const students = [
  //  { name: "rodolfo", age: 25 },
   // { name: "rodolfo", age: 25 },
  //  { name: "rodolfo", age: 25 },
  //  { name: "rodolfo", age: 25 },
  //  { name: "rodolfo", age: 25 },
  //  { name: "rodolfo", age: 25 },
  //  { name: "rodolfo", age: 25 },
//];
//students.forEach((student, index, array) => {
 //   console.log(student, index, array)
//})
// const students = [
//      { name: "rodolfo", age: 25 },
//       { name: "maria", age: 43 },
//       { name: "joão", age: 21 },
//       { name: "bruno", age: 43 },
//       { name: "carla", age: 13 },
//       { name: "ana", age: 20 },
//       { name: "julio", age: 26 },
//   ];
// let allstudentsage = 0
//   students.forEach ( (student, index) => {
//       allstudentsage = allstudentsage + student.age
//   })
//    const averageage = allstudentsage / students.length

// console.log(`a media dos alunos e de ${averageage.toFixed(0)}`) 

// const teste = [2, 4, 6] 

// const teste2 = teste => teste * 2

// const teste3 = teste.map(teste2)

// console.log(teste)
// console.log(teste3)

// const lista = [
//   {name: "rodolfo", vip: true},
//   {name: "maria", vip: false},
//   {name: "joão", vip: true},
//   {name: "bruno", vip: true},
//   {name: "carla", vip: false},
//   {name: "ana", vip: true},
//   {name: "julio", vip: false},

// ];
// const newlist =  lista.map(client =>{
//   const newlist = {
//     name: client.name,
//     vip: client.vip,
//     sector: client.vip ? 'black' : 'green'
//   }

// return newlist

// })
// console.log(newlist)


const students =  [
{name:"rodolfo", testgrade: 7 },
{name:"maria", testgrade: 5 },
{name:"joão", testgrade: 8 },
{name:"bruno", testgrade: 9 },
{name:"carla", testgrade: 3 },
{name:"ana", testgrade: 2 },
{name:"julio", testgrade: 10 },
]
const result = students.map(note =>{
  const = testgrade = finalresult
  let approvedOrNot
  if (note.finalResult>=7){
    approvedOrNot = 'approved'
  } else {
    approvedOrNot = 'disapproved'
  }
  const students= {
    name: note.name,
    finalresult: approvedOrNot
  }
  return students
}) 
console.log(students)