let hi = "hi";
// console.log(hi);
let fun = ["one", "two", "three"];
var whatever = 1;
console.log(fun[whatever + 1]);
console.log(fun[1]);
console.log(fun[whatever - 1]);
whatever++;
console.log(fun[whatever]);
console.log(fun[1]);

for (let num = 0; num >= 10; num += 1) {
  console.log(num);
  console.log(fun[num]);
}
console.log("fun");

let doopdeeDoo = "duped";
console.log(typeof doopdeeDoo.toUpperCase);
console.log(doopdeeDoo.toUpperCase());
function getFun() {
    let length= parseInt(
        prompt("how many?")
    );
    if (isNaN(length) === true) {
        alert("whaaaaaaa");
        return;
    }
}