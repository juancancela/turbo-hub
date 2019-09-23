import MenuItemType from './MenuItemType';

export default class MenuItem {
    type: MenuItemType;
    value: string;
    items: Array<MenuItem>;
    styles: Object;

    constructor(type: MenuItemType, value: string, styles?: Object, items?: Array<MenuItem>) {
        this.value = value;
        this.type = type;
        this.styles = styles;
        this.items = items;
    }
}