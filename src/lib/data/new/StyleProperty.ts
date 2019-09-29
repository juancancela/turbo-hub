export default class StyleProperty {
    constructor(private property: string, private value: string) {
        this.property = property;
        this.value = value;
    }

    getProperty(): string {
        return this.property;
    }

    getValue(): string {
        return this.value;
    }
}