import MenuItemType from './data/MenuItemType';
const {SimpleNavigationItem, DropdownNavigationItem} = MenuItemType;

export default {
    header: {
        items: [{
            type: SimpleNavigationItem,
            value: 'item 1',
            styles: {
                color: 'white'
            }
        },
        {
            type: SimpleNavigationItem,
            value: 'item 2',
            styles: {
                color: 'white'
            }
        },
        {
            type: SimpleNavigationItem,
            value: 'item 3',
            styles: {
                color: 'white'
            }
        },
        {
            type: DropdownNavigationItem,
            value: 'item 4',
            styles: {
                width: '100px',
                color: 'white'
            },
            items: [
                {
                    type: SimpleNavigationItem,
                    value: 'item 11',
                    items: null,
                    styles: {}
                },
                {
                    type: SimpleNavigationItem,
                    value: 'item 12',
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
            'backgroundColor': 'black',
            'boxShadow': '3px 3px 5px 2px #ccc'
        }
    }
};