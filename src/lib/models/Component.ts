import StyleProperty from 'models/StyleProperty';
import ComponentProperty from 'models/ComponentProperty';

export default class Component {
    constructor(private name: string, private properties: Array<ComponentProperty>, private styles?: Array<StyleProperty>) {
        this.name = name;
        this.properties = properties;
        this.styles = styles;
    }

    getName(): string {
        return this.name;
    }

    getStyles(): Array<StyleProperty> {
        return this.styles;
    }

    getProperties(): Array<ComponentProperty> {
        return this.properties;
    }
};