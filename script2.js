"use strict";

// salygos paga; prioriteta
// 1. jei arrow funkcijoje yra this, tai this bus outer scope
// 2. jeigu callas su 'new', tai naujai sukurtas objektas yra this
// 3. bind funckija panaudota issaugoti this reiksme
// 4. kai kurios funkcijos leidzia this nurodyti e.g. forEach, map
// 5. funkcija callinama su call arba apply funkcijomis
// 6. call site is this e.g. o.callName()

// 7.
//   isoriniame scope - globalus objektas (window)
//   funkcijos scope  - globalus objektas (window)
//                    - jei strict mode, tai undefined

// function f() {
//   console.log(this);
// }
// const boundF = f.bind('juozapas');
// boundF();

// a.forEach(function() {
//   console.log(this);
// }, 'aaa');

// function f(a,b,c) {
//   console.log(this, a,b,c);
// }

// f.apply('juozapas', [1,2,3]);

/////////////////////////////////////////////
// sukurti stack funkcionaluma, reikalavimai:
// - itema galima ideti tik i stacko gala
// - itema isimti galima tik is stacko galo
// - turi buti funkcionalumas pasiziureti stacko paskutiniam itemui

// const arr = [1, 2, 3];
// console.log(arr);

// const new1 = arr.push(4);
// console.log(arr);

// const new1poped = arr.pop();
// console.log(new1poped);
// console.log(arr);

// const addNewItem = function (arr, newItem) {
//   arr.push(newItem);
// };

// addNewItem(arr, 5);
// console.log(arr);

// const removeItem = function (arr) {
//   arr.pop();
// };
// removeItem(arr);
// console.log(arr);

// const checkLastItem = function (arr) {
//   // console.log(...arr.slice(-1));
//   console.log(arr.length);
// };
// checkLastItem(arr);

/////////////////////////////////////////////
// v2
// const stack = function (arr, newItem) {
//   const data = [...arr];

//   function addNewItem(data, newItem) {
//     data.push(newItem);
//     console.log(data);
//   }

//   function removeItem(data) {
//     data.pop();
//     console.log(data);
//   }

//   function checkLastItem(data) {
//     console.log(data.length);
//   }
// };
// stack.addNewItem(arr, 4);

/////////////////////////////////////////////

// v3 is destytojo
// const createStack = function () {
//   const data = [];

//   function addNewItem(newItem) {
//     data.push(newItem);
//   }

//   function removeItem() {
//     data.pop();
//   }

//   function checkLastItem() {
//     console.log(data[data.length - 1]);
//   }

//   return {
//     addNewItem,
//     removeItem,
//     checkLastItem,
//   };
// };

// const stack = createStack();

// stack.addNewItem(4);
// stack.addNewItem(5);
// stack.addNewItem(6);

// stack.removeItem();

// stack.checkLastItem();

/////////////////////////////////////////////
// po pertraukos 11:17

// const queue = function () {
//   const data = [];

//   function add(newItem) {
//     data.push(newItem);
//     console.log(data);
//   }

//   function remove() {
//     data.shift();
//     console.log(data);
//   }

//   function view() {
//     console.log(data[0]);
//   }

//   return {
//     add,
//     remove,
//     view,
//   };
// };

// const newQueue = queue();

// newQueue.add(1);
// newQueue.add(2);
// newQueue.add(3);
// newQueue.add(4);

// newQueue.remove();

// newQueue.view();

/////////////////////////////////////////////
// v2 su class

// class Queue {
//   constructor() {
//     this.data = [];
//   }

//   add(newItem) {
//     this.data.push(newItem);
//     console.log(this.data);
//   }

//   remove() {
//     this.data.shift();
//     console.log(this.data);
//   }

//   view() {
//     console.log(this.data[0]);
//   }
// }

// const newQueue = new Queue();

// newQueue.add(1);
// newQueue.add(2);
// newQueue.add(3);
// newQueue.add(4);

// newQueue.remove();

// newQueue.view();

/////////////////////////////////////////////
// po pertraukos 12:46

const promise1 = new Promise((resolve, reject) => {
  try {
    resolve("response reiksme");
  } catch (err) {
    console.error(err);
    reject(err);
  }
});

promise1.then((manoResolvas) => console.log(manoResolvas));
