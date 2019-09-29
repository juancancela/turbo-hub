export default class ScriptResource {
    constructor(private content: string) {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }
}