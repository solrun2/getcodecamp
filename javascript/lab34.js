let a = undefined;
let b = 2;
let c = a++;

let d = String(a);  
let e = String(b);  
let f = String(c);  

console.log(d);  // "undefined"
console.log(e);  // "2"
console.log(f);  // "NaN" 