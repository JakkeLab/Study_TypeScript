type WallType = "Partition" | "Facade";

interface Wall<Type extends WallType = "Partition"> {
    type: Type;
}

const wall: Wall = { type: "Partition" };

wall.type

//The case of error from Wroi
// function log<Type>(data: Type) {
//     console.log(data);
// }

// log<string>(123);

// class Collection<Type> {
//     data: Type[] = [];

// }

// const texts = new Collection<string>();

// const firstText = texts.data[0];

// const numbers = new Collection<number>();

// const firstNumber = numbers.data[0];