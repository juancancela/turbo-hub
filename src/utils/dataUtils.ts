import TurboHubConfig from "../data/TurboHubConfigModel";
import Logo from "../data/Logo";
import Header from "../data/Header";
import data from '../turbo-hub-config';
import MenuItem from "../data/MenuItem";

export const getConfig = (): TurboHubConfig => {
    const { logoUrl, logoText } = data.header.logo;
    const logo = new Logo(logoUrl, logoText, data.header.logo.styles);

    const { items } = data.header;
    const menuItems = items.map(item => {
        const menuItem = new MenuItem(item.type, item.value, item.href, item.styles, item.items);
        return menuItem;
    });
    const header = new Header(menuItems, logo, data.header.styles);
    
    return new TurboHubConfig(header);
};

export const isMobile = () => /Mobi/.test(navigator.userAgent);