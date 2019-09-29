import Logo from './Logo';
import MenuItem from './MenuItem';

export default class Header {
    items: Array<MenuItem>;
    logo: Logo;
    styles: Object;

    constructor(items: Array<MenuItem>, logo: Logo, styles: Object) {
        this.items = items;
        this.logo = logo;
        this.styles = styles;
    }
}