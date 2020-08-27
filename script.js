
// const obj = {
//     id: 1, 
//     name: 'String',
//     address: {
//         street: 'kanatna',
//         building: '22',
//     },
// };

// // const name = 'my name';

// // // const{street} = address;
// // const arr = [obj, {id: 2}];
// // // const log = ({
// // //     address: {street, building}, 
// // //     id,
// // //     name: anotherName = ''
// // // }) => {
// // //     console.log(anotherName, building);
// // // }

// // const log = ({id}) => {
// //     console.log(id);
// // }
// // arr.forEach(log);

// const {id, ...rest} = obj;  //создастся новый обьект будет называться rest и там не будет id

// console.log(rest);


// const arr = [
//     {
//     id: 1, 
//     name: 'String',
//     address: {
//         street: 'kanatna',
//         building: '22',
//     },
// },
// {
//     id: 1, 
//     name: 'String2',
//     address: {
//         street: 'kanatna',
//         building: '24',
//     },
// },
// {
//     id: 3,
// },
// ];

// const emptyObject = {};

// [emptyObject.first, emptyObject.second, emptyObject.third] = arr;
// [arr[1], arr[0]] = arr;

// [arr[0], arr[2]] = [arr[2], [arr[0]]];

// const nextObj = arr[2];   // меняем местами значения
// arr[2] = arr[0];
// arr[0] = nextObj;

// console.log(arr);

// const [first, ...rest] = arr;

// console.log(first, rest)


// const [first, ...rest] = arr;
// // const newArray = [...rest];
// const newArray = [1,2,3, ...[4,5,6, ...[7,8,9]]]; // собирет все в один массив, типы сохраняются какие были

// console.log( newArray);

// const sum = (...numbers) => {
//     console.log(numbers);
// }

// sum(1,2,3,4,5); // -> 15

// function sum() {
    
// }
// sum(1,2,3,4,5);

// const anyFunction = () => {};

// const obj = {
//     [anyFunction]: 2,
// };
// console.log(obj[anyFunction]);


                                                               // LESSON 15
// const user = {
//     name: 'Vasya',
// }

// const user2 = {
//     name: 'Vasya second',
// }

// const newMap = new Map();
// // console.log(newMap);
// newMap.set(user, 0);
// newMap.set(user2, 5);
// newMap.set(user, newMap.get(user) + 1);

// // console.log(newMap);
// console.log(newMap);

// for (const [user, visits] of newMap) {
//     console.log(user, visits);
// }

// for (const iterator of newMap) {
//     console.log(...iterator); // rest работает только в функциях
// }

// newMap.forEach((value, key) => {
//     console.log(value,key);
// })

// newMap.forEach((...rest) => {
//     console.log(...rest);
// })

// const sum = () => 'sum of params';
// const prep = sum(2,5,6) 
// rand(1,l2,4,5);

// console.log(Array.from(newMap));

// const mySet = new Set();
// const arrSet = [1,1,2,2,3,4,5,777,888,9];
// arr.forEach((value) => {
//     mySet.add(value);
// });
// const mySet = Array.from(new Set([1,1,2,2,3,4,5,777,888,9]));

// console.log(mySet);  // not work why???

// const counter = (value = 0) => () => ++value;


// function counterFnc() {
//     let value = 0;
//     return function () {
//         return ++value;
//     };
// }

// const count = counterFnc();
// console.log(count()); //1

// const sum = a => b => a + b;
// function sumFnc(a) {  //замыкается на а
//     return function (b) {
//         return a + b;
//     }
// }
// const memized = sum(3);
// const memized = sumFnc(3); // нужно сохранить первый вызов функции, к нему потом будет добавляться остальные вызовы вроде
// console.log(memized(5));

// const iteration = counter();
// iteration.inc();
// iteration.inc();
// iteration.inc();
// iteration.inc();
// iteration.inc();
// console.log(iteration.value()); //

