function sum1(a: number, b: number) {
    const result = a + b;
    console.log(a+b);
    return result;
}

let result = sum1(1, 2);
result = 2;

const sum2 = function(a, b) {
    console.log(a + b);
}

const sum3 = (a, b) => {
    console.log(a + b);
}

interface Rectangular {
    width: number,
    height: number;
    getArea: () => number;
}

class Column implements Rectangular {
    width: number;
    height: number;

    getArea() {
        return this.width * this.height;
    }
}

//Overload
function add(a: string, b: number): string;
function add(a: string, b: string): string;
function add(a: number, b: number) : number;
function add(a: any, b: any) {
    if(typeof a === "string" && typeof b === "number") {
        const aNumber = parseFloat(a);
        return aNumber + b;
    }
    return a + b;
}

add("Map", "Name");
add("1", 2);