function computeArea(width: number, height: number) {
    return width * height;
}

type AreaParameters = Parameters<typeof computeArea>;

// type Material = "Wood" | "Concrete" | "Brick" | null;
// type StricterMateiral = NonNullable<Material>;

// type Color = "red" | "green" | "blue" | "black" | "white";
// type MonochromeColors = Exclude<Color, "red" | "green" | "blue">;

// function getHeight() {
//     return 3;
// }

// interface Column {
//     material: string;
//     height: number;
// }

// async function isUserLoggedIn(userId: string) {
//     console.log(userId);
//     return true;
// }

// type UserLoginResponse = Awaited<ReturnType<typeof isUserLoggedIn>>;

// Record : In this case, we need to define all types of column.
// type ColumnTypes = "Concrete" | "Steel" | "Wood";
// const columnCatalog: Record<ColumnTypes, Column> = {
//     Concrete: {
//         height: 3,
//         material: "Concrete"
//     },
//     Steel: {
//         height: 3,
//         material: "Concrete"
//     },
//     Wood: {
//         height: 3,
//         material: "Concrete"
//     },
// }


// When type is readonly.
// type TransformedColumn = Readonly<Column>;
// const column: TransformedColumn = {
//     material: "CONCRETE",
//     height: 3
// }
// column.height = 2;


