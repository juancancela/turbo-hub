import Component from './Component';
import StyleProperty from './StyleProperty';
import Layout from './Layout';

export default class Page {
    constructor(private layouts: Map<string, Layout>,
        private styles?: Array<StyleProperty>) {
        this.styles = styles;
        this.layouts = layouts;
    }

    getStyles(): Array<StyleProperty> {
        return this.styles;
    }

    getLayouts(): Map<string, Layout> {
        return this.layouts;
    }
}