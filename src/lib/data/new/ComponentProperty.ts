export default class ComponentProperty {
    constructor(private name: string, private value: any) {
        this.name = name;
        this.value = value;
    }

    getName(): string {
        return this.name;
    }

    getValue(): any {
        return this.value;
    }
}