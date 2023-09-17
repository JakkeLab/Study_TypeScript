type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

const firstArray = ["a", "b", "c"];
let flattenedArray: Flatten<typeof firstArray>;

const secondArray = "asdf";
let flattenedArray2: Flatten<typeof secondArray>;

type TextArray<Type> = Type extends string ? Type[] : never;

// type Structural = {
//     loads: number[];
// }

// type NonStructural = {
//     thermalInsulation: number;
// }

// type BaseGroup<Type> = {
//     items: Type[];
// }

// type IsStructural<Type> = Type extends Structural 
// ? { getAllLoads: () => number[] } 
// : { getTotalInsulation: () => number };

// type ItemGroup<Type> = BaseGroup<Type> & IsStructural<Type>;

// const group: ItemGroup<Structural> = {
//     items: [],
//     getAllLoads() {
//         const allLoads: number[] = [];
//         for(const item of this.items) {
//             allLoads.push(...item.loads);
//         }
//         return allLoads;
//     }
// }