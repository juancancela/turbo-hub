import StyleResource from './StyleResource';

export default class Metadata {
    constructor(private title: string) {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }
}