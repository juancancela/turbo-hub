import Component from 'models/Component';
import StyleProperty from 'models/StyleProperty';

export default class ApplicationPage {
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