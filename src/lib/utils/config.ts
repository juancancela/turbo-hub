import appConfig from '../../app.json';
import Metadata from '../models/Metadata';
import Application from '../models/Application';
import ApplicationPage from '../models/ApplicationPage';
import Component from '../models/Component';

export const serialize = (): Application => {
    /* serialize metadata data */
    const metadata = new Metadata(appConfig.metadata.title);

    /* serialize app pages data */
    const pages = [];
    appConfig.pages.forEach(page => {
        const mainComponentProperties = new Map<string, any>();
        mainComponentProperties.set('items', [1,2,3]);
        console.log('lalalalalaalalalalaala');
        console.log(JSON.stringify(mainComponentProperties));
        const mainComponent = new Component(page.mainComponent.name, mainComponentProperties);
        pages.push(new ApplicationPage(mainComponent, page.path));
    });
    const application = new Application(metadata, pages);
    debugger;
    return application;
};