import Metadata from './Metadata';
import Section from './Section';
import StyleProperty from './StyleProperty';
import ScriptResource from './ScriptResource';

export default class Application {
    constructor(private metadata: Metadata,
        private sections: Array<Section>,
        private styles?: Array<StyleProperty>,
        private scripts?: Array<ScriptResource>) {
        this.metadata = metadata;
        this.sections = sections;
        this.styles = styles;
        this.scripts = scripts;
    }

    getMetadata(): Metadata {
        return this.metadata;
    }

    getSections(): Array<Section> {
        return this.sections;
    }

    getStyles(): Array<StyleProperty> {
        return this.styles;
    }

    getScripts(): Array<ScriptResource> {
        return this.scripts;
    }
}