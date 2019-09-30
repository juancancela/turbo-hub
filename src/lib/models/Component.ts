import StyleProperty from './StyleProperty';

export default class Component {
    constructor(private name: string, private properties: Map<string, any>, private styles?: Array<StyleProperty>) {
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

    getProperties(): Map<string, any> {
        return this.properties;
    }
};