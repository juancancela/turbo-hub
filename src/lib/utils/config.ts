import appConfig from '../../app.json';
import Application from 'models/Application';
import Metadata from 'models/Metadata';
import ApplicationPage from 'models/ApplicationPage';
import Component from 'models/Component';

export const serialize = (): Application => {
    /* serialize metadata data */
    const metadata = new Metadata(appConfig.metadata.title);

    /* serialize app pages data */
    const pages = [];
    appConfig.pages.forEach(page => {
        const mainComponent = new Component(page.mainComponent.name, null);
        pages.push(new ApplicationPage(mainComponent, page.path));
    });

    return new Application(metadata, pages);
};