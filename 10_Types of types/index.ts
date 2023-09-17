interface Column {
    material: string;
    width: number;
    depth: number;
    height: number;
}

const columnPropertyName: keyof Column = "depth";

class ConcreteColumn implements Column {
    material = "Concrete";
    width: number;
    depth: number;
    height: number;

    constructor(width = 30, depth = 30, height = 3000) {
        this.depth = width;
        this.depth = depth;
        this.height = height;
    }

    logData(data: keyof Column) {
        console.log(this[data]);
    }
}

const column = new ConcreteColumn();
column.logData("height");

//Examples
const message: string = "Hello world";
let anotherMessage: typeof message;

type AreaComputer = (width: number, length: number) => number;

function computeArea(width: number, length: number) {
    return width * length;
}

function invokeDelegate(callback: typeof computeArea) {
    return callback(30, 30);
}

invokeDelegate(computeArea);