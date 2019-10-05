import Component from './Component';
import StyleProperty from './StyleProperty';

export default class ApplicationPage {
    constructor(private mainComponent: Component, private styles?: Array<StyleProperty>) {
        this.mainComponent = mainComponent;
        this.styles = styles;
    }

    getMainComponent(): Component {
        return this.mainComponent;
    }

    getStyles(): Array<StyleProperty> {
        return this.styles;
    }
}