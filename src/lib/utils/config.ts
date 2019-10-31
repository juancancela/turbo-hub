import appConfig from '../../app.json';
import Metadata from '../models/Metadata';
import Application from '../models/Application';
import Page from '../models/Page';
import Component from '../models/Component';
import Layout from '../models/Layout';

const serializeComponentProperties = properties => {
    const mainComponentProperties = new Map<string, any>();
    if (!properties) return mainComponentProperties;
    Object.keys(properties).forEach(key => {
        const value = properties[key];
        mainComponentProperties.set(key, value);
    });
    return mainComponentProperties;
};

const serializePageLayout = layouts => {
    const res = [];
    layouts.forEach(layout => {
        res.push(new Layout('name', [[]]));
    });
    return res;
};

const serializePage = config => {
    const pages = new Map<string, Page>();
    Object.keys(config.pages).forEach(urlPattern => {
        const page = config.pages[urlPattern];
        const mainComponent = new Component(page.mainComponent.name, serializeComponentProperties(page.mainComponent.properties));
        const appPage = new Page(mainComponent, serializePageLayout(page.layouts));
        pages.set(urlPattern, appPage);
    });

    return pages;
};

const serializeMetadata = config => {
    return new Metadata(config.metadata.title);
};

const serializeApplication = (metadata, pages) => {
    return new Application(metadata, pages);
}

export const serialize = (providedAppConfig?: any): Application => {
    const config = providedAppConfig ? providedAppConfig : appConfig;
    return serializeApplication(
        serializeMetadata(config),
        serializePage(config));
};

export const config = serialize();

export const getPageData = url => {
    return config.getPages().get(url);
};