interface Column {
    material: string;
}

interface Item {
    id: string
}

interface RectColumn extends Column {
    width: number;
    height: number;
    depth: number;
}


class ConcreteColumn implements RectColumn, Item {
    id: string;
    material: string;
    width: number;
    height: number;
    depth: number;
}