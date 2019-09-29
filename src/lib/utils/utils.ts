import TurboHubConfig from "../data/TurboHubConfigModel";
import Logo from "../data/Logo";
import Header from "../data/Header";
import data from '../../turbo-hub-config';
import MenuItem from "../data/MenuItem";
import Route from "../data/Route";

export const getConfig = (): TurboHubConfig => {
    const { logoUrl, logoText } = data.header.logo;
    const logo = new Logo(logoUrl, logoText, data.header.logo.styles);

    const { items } = data.header;
    const menuItems = items.map(item => {
        const menuItem = new MenuItem(item.type, item.value, item.href, item.styles, item.items);
        return menuItem;
    });
    const header = new Header(menuItems, logo, data.header.styles);

    const routesData = data.routes;
    const routes = [];

    routesData.map(data => {
        let route = new Route(data.route, data.rootComponent);
        routes.push(route);
    });
    
    return new TurboHubConfig(header, routes);
};

export const isMobile = () => /Mobi/.test(navigator.userAgent);