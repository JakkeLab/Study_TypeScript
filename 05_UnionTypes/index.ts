// type Material = "concrete" | "wood" | "brick" | "steel";

// class Column {
//     material: string;

//     constructor(material: Material) {
//         this.material = material;
//     }
// }

// const column = new Column("concrete");

// type Column = {
//     id: number | string;
// }

// type Materiable = {
//     material: string;
// }

// type Measureable = {
//     width: number;
//     height: number;
// }

// type Physical = Materiable & Measureable;

interface Materiable {
    material: string;
}

interface Measureable {
    width: number;
    height: number;
}

interface Physical extends Materiable, Measureable {

}


const column: Physical = {
    material: "blah",
    width: 1,
    height: 2
}
