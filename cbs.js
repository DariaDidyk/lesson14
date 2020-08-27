const fib = (x) => {
    if (!x || x <= 1) return 1;
    return fib(x - 1) + fib(x - 2);
}

const obj = {
    a: 2,
    fib: function(x)  {
        // console.log(this);
        return fib(x) + this.a;
    },
}

const decorator = function(fnc) {
    const cache = new Map();
    return function(x) {
    if (cache.has(x)) {
        return cache.get(x);
    }
    cache.set(x, fnc(x));
    return cache.get(x);
    }
    cache.set(x, fnc.call(this, x));
    return cache.get(x);
};

obj.fib = decorator(obj.fib);
// const memoizedFib = decorator(fib);
console.log(memoizedFib(40));
console.log(memoizedFib(40));

console.log(obj.fib(40));


// const sum = function () {
//     return Array.prototype.reduce.call(arguments, (v) => {
//         console.log(v);
//     });
// };

// const sum = function () {
//     return Array.prototype.reduce.call(
//         arguments,
//          (acc, next) => {
//         return acc + next;
//     },
//      0
//     );
// };
// console.log(sum(1,2,3,4,5,6));

// sum(1,2,3,4,5,6);

// const user1 = {
//     arr: [],
//     method(a,b,c,d,e) {
//         console.log(this.name, a,b,c,d,e);
//         let _this = this;
//         this.arr.forEach(function (x) {
//             console.log(_this.arr);
//         });
//     },
// };

// const user2 = {
//     name: 'Vasya',
//     meth: () => user1.method.bind(user2, 1,2,3),
// };

// // user1.method.call(user2);
// // const meth = user1.method.bind(user2, 1,2,3);

// user2.meth(4,5,6,7);

// function Base() {
//     this.engine = true;
// }

// function Derived() {
//     // Base.call(this);
//     Base.bind(this);
// }

// const car = new Derived();

// console.log(car);