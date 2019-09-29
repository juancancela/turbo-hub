
import Header from './Header';
import Route from './Route';

export default class TurboHubConfig {
    header: Header;
    routes: Array<Route>;

    constructor(header: Header, routes: Array<Route>) {
        this.header = header;
        this.routes = routes;
    }
};