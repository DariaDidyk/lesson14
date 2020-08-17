
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


const arr = [
    {
    id: 1, 
    name: 'String',
    address: {
        street: 'kanatna',
        building: '22',
    },
},
{
    id: 1, 
    name: 'String2',
    address: {
        street: 'kanatna',
        building: '24',
    },
},
{
    id: 3,
},
];

const emptyObject = {};

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

function sum() {
    
}
sum(1,2,3,4,5);