import TurboHubConfig from "../model/TurboHubConfigModel";
import Logo from "../model/Logo";
import Header from "../model/Header";
import data from '../../turbo-hub-config';
import appConfig from '../../app.json';
import MenuItem from "../model/MenuItem";
import Route from "../model/Route";

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

export const cast = () => {
    console.log('cast');
    console.log(appConfig);
};

export const isMobile = () => /Mobi/.test(navigator.userAgent);