let numberOfInnerWalls = 3;
let numberOfOutterWalls = 5;

console.log(numberOfInnerWalls);
console.log(typeof numberOfInnerWalls);

numberOfOutterWalls = `3`;
console.log(numberOfOutterWalls);
console.log(typeof numberOfOutterWalls);


function logSum(a, b) {
    if(typeof a !== "number" || typeof b !== "number") {
        throw new Error("You can only sum numbers!");
    }
    const result = a + b;
    console.log(a+b);
}

logSum(numberOfInnerWalls, numberOfOutterWalls);