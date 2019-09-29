import Component from './Component';
import StyleProperty from './StyleProperty';

export default class Section {
    private id: string;
    constructor(private mainComponent: Component, private path: string, private styles?: Array<StyleProperty>) {
        this.id = this.path;
        this.path = path;
        this.mainComponent = mainComponent;
        this.styles = styles;
    }

    getId(): string {
        return this.id;
    }

    getPath(): string {
        return this.path;
    }

    getMainComponent(): Component {
        return this.mainComponent;
    }

    getStyles(): Array<StyleProperty> {
        return this.styles;
    }
}