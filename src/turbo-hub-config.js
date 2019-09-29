import MenuItemType from './data/MenuItemType';
const {SimpleNavigationItem, DropdownNavigationItem} = MenuItemType;

export default {
    routes: [
        {
            route: '/',
            rootComponent: 'App'
        },
        {
            route: '/contact',
            rootComponent: 'ContactPage'
        },
        {
            route: '/test23',
            rootComponent: 'ContactPage'
        }
    ],
    header: {
        items: [{
            type: SimpleNavigationItem,
            value: 'Contacto',
            href: '/contact',
            styles: {
                color: 'white'
            }
        },
        {
            type: SimpleNavigationItem,
            value: 'item 2',
            href: '/contact1',
            styles: {
                color: 'white'
            }
        },
        {
            type: SimpleNavigationItem,
            value: 'item 3',
            href: '/contact2',
            styles: {
                color: 'white'
            }
        },
        {
            type: DropdownNavigationItem,
            value: 'item 4',
            href: '/contact3',
            styles: {
                width: '100px',
                color: 'white'
            },
            items: [
                {
                    type: SimpleNavigationItem,
                    value: 'item 11',
                    href: '/contact4',
                    items: null,
                    styles: {}
                },
                {
                    type: SimpleNavigationItem,
                    value: 'item 12',
                    href: '/contact5',
                    items: null,
                    styles: {}
                }
            ]
        }],
        logo: {
            logoUrl: 'logo.png',
            logoText: 'logo text',
            styles: {
                'width': '50px'
            }
        },
        styles: {
            'fontWeight': 'bold',
            'boxShadow': '3px 3px 5px 2px #ccc'
        }
    }
};