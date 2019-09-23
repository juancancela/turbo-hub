export default class Logo {
    logoUrl: string;
    logoText: string;
    styles: Object;

    constructor(logoUrl: string, logoText: string, styles: Object) {
        this.logoUrl = logoUrl;
        this.logoText = logoText;
        this.styles = styles;
    }
}