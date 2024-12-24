let a = undefined;
let b = null;
let c = b + '4 2';

let d = Number(a);  
let e = Number(b);  
let f = Number(c);  

console.log(d);  // NaN
console.log(e);  // 0
console.log(f);  // NaN