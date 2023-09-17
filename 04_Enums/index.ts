enum Material {
    CONCRETE = "CONCRETE",
    WOOD = "WOOD",
    BRICK = "BRICK",
    STEEL = "STEEL"
}

class Column {
    material: string;

    constructor(material: Material) {
        this.material = material;
    }
}

const column = new Column(Material.CONCRETE);