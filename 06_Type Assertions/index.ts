// const message = document.getElementById("greet-message") as HTMLDivElement;

// message.onclose = () => {
//     console.log("closed!");
// }
interface Vector2 {
    x: number,
    y: number
}


class Column {
    material: string;
    dimensions: Vector2

    constructor(material: string, dimensons: Vector2) {
        this.material = material;
        this.dimensions = dimensons;
    }
}

const column = new Column("Concrete", {x: 30, y: 30});

console.log(column.dimensions.x);

//Note : Usually, using optional parameters('?') is not a good idea. Because we end up to see an error when encountering the code in JavaScript, not before running.

//? : When it exists, execute line. If not, do not execute.
//! : 

// column.dimensions === undefined.x