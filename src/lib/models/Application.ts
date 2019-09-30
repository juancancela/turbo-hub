import Metadata from 'models/Metadata';
import ScriptResource from 'models/ScriptResource';
import ApplicationPage from 'models/ApplicationPage';
import StyleProperty from 'models/StyleProperty';

export default class Application {
    constructor(private metadata: Metadata,
        private pages: Array<ApplicationPage>,
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

    getPages(): Array<ApplicationPage> {
        return this.pages;
    }

    getStyles(): Array<StyleProperty> {
        return this.styles;
    }

    getScripts(): Array<ScriptResource> {
        return this.scripts;
    }
}