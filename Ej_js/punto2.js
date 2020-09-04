var a=9;
var b=27

let mcd = (a,b) => a===b ? a: (a<b? mcd(a,b-a):mcd(b,a-b)) 

console.log(mcd(a,b))
