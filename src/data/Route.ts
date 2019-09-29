export default class TurboHubConfig {
    constructor(private route: string, private rootComponent: string) {
        this.route = route;
        this.rootComponent = rootComponent;
    }

    getRoute():string {
        return this.route;
    }

    getRootComponent(): string {
        return this.rootComponent;
    }
};