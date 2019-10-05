import Metadata from './Metadata';
import ScriptResource from './ScriptResource';
import ApplicationPage from './ApplicationPage';
import StyleProperty from './StyleProperty';

export default class Application {
    constructor(private metadata: Metadata,
        private pages: Map<string, ApplicationPage>,
        private styles?: Array<StyleProperty>,
        private scripts?: Array<ScriptResource>) {
        this.metadata = metadata;
        this.pages = pages;
        this.styles = styles;
        this.scripts = scripts;
    }

    getMetadata(): Metadata {
        return this.metadata;
    }

    getPages(): Map<string, ApplicationPage> {
        return this.pages;
    }

    getStyles(): Array<StyleProperty> {
        return this.styles;
    }

    getScripts(): Array<ScriptResource> {
        return this.scripts;
    }
}