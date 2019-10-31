import Component from "./Component";

class GridItemPosition {
    constructor(private x: number, private y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }
}

class GridItem {
    constructor(private component: Component, private position: GridItemPosition) {
        this.component = component;
        this.position = position;
    }

    getComponent(): Component {
        return this.component;
    }

    getPosition(): GridItemPosition {
        return this.position;
    }
}

class GridMatrix {
    constructor(private matrix: Array<Array<GridItem>>) {
        this.matrix = matrix;
        //TODO Add validations
    }

    getMatrix(): Array<Array<GridItem>> {
        return this.matrix;
    }

    getGridItems(): Array<GridItem> {
        const gridItems = [];
        const matrix = this.getMatrix();
        matrix.forEach(col =>
            col.forEach(item =>
                gridItems.includes(item) ? gridItems.push(item) : null));
        return gridItems;
    }
}

export default class Layout {
    constructor(private grid: GridMatrix) {
        this.grid = grid;
    }

    getGrid(): GridMatrix {
        return this.grid;
    }
}