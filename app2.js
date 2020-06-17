
// const changeProjectHeadingTitle = (title) => {
//     const projectTitle = document.querySelector("#project-title");

//     if (typeof title === 'string') {
//         projectTitle.textContent = title;
//     } else {
//         console.error("your argumen is not a string")
//     }
// }
// changeProjectHeadingTitle("woww")
// // // function definition
// // const perpangkatan = function (n) {
// //     return n * n;
// // }
// // console.log(perpangkatan(5));

// //function declaration
// // function tambah(n) {
// //     return n + n
// // }
// // console.log(tambah(4))

// function sayHello() {
//     alert('hsiii syanthikkkk')
// }
// console.log(sayHello())

// //ero function es6
// const perpangkatan = (n) => {
//     return (n * n)
// }
// console.log(perpangkatan(10))


// const array = [1, 2, 3, 4, 5]

// for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] + 2
// }
// console.log(array)

// //foreach
// const animals = ["kucing", "beruang", "jerapah", "gajah", "harimau"];

// animals.forEach(myFunction)

// function myFunction(value) {
//     console.log(value + " hidup kamu")
// }

// //Map
// const number = [10, 20, 10, 40, 60];

// const perkalian = number.map(multiply)

// function multiply(value) {
//     return value * 2
// }
// console.log(perkalian)

//filter 

// const person = {
//     name: {
//         firstName: "putih",
//         lastName: "andira",
//     },
//     age: 34
// }

//  //adding
// person.name.firstName = "putri"
// person.status = "jomblo"

////delete
// delete person.name.lastName;
// console.log(person)


// const age = [24, 45, 13, 5, 23, 90, 26]

// const umurlah = age.filter(myFunction)

// function myFunction(value) {
//     return value >= 17
// }
// console.log(umurlah)


// const todos = [
//     {
//         text: "ini adalah tugaas 1",
//         nilaiTugas: true
//     },
//     {
//         text: "ini adalah tugaas 2",
//         nilaiTugas: false
//     },
//     {
//         text: "ini adalah tugaas 3",
//         nilaiTugas: true
//     },

//     {
//         text: "ini adalah tugaas 4",
//         nilaiTugas: false
//     },

// ];

// // const keteranganLulus = todos.filter(myFunction);

// // function myFunction(value) {
// //     if (value.nilaiTugas === true) {
// //         return value
// //     }
// // }

// const keteranganLulus = todos.filter(value => {
//     if (value.nilaiTugas === false) {
//         return value
//     }
// })
