export default class StyleResource {
    constructor(private content: string) {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }
}