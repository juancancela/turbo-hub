import appConfig from '../../app.json';
import Metadata from '../models/Metadata';
import Application from '../models/Application';
import ApplicationPage from '../models/ApplicationPage';
import Component from '../models/Component';

const serializeComponentProperties = properties => {
    const mainComponentProperties = new Map<string, any>();
    if (!properties) return mainComponentProperties;
    Object.keys(properties).forEach(propertyKey => {
        const value = properties[propertyKey];
        mainComponentProperties.set(propertyKey, value);
    });
    return mainComponentProperties;
};

export const serialize = (): Application => {
    /* serialize metadata data */
    const metadata = new Metadata(appConfig.metadata.title);

    /* serialize app pages data */
    const pages = new Map<string, ApplicationPage>();
    Object.keys(appConfig.pages).forEach(url => {
        const page = appConfig.pages[url];
        const mainComponent = new Component(page.mainComponent.name, serializeComponentProperties(page.mainComponent.properties));
        const applicationPage = new ApplicationPage(mainComponent);
        pages.set(url, applicationPage);
    });
    const application = new Application(metadata, pages);
    return application;
};

export const config = serialize();

export const getPageData = url => {
    return config.getPages().get(url);
};