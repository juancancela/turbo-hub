import React, { useContext } from 'react';
import './Header.css';
import SimpleNavigationItem from 'components/SimpleNavigationItem/SimpleNavigationItem';
import { AppContext } from 'context/AppContext';
import { serialize } from 'utils/config';
const app = serialize();
const logo = require(`assets/${app.header.logo.logoUrl}`);

window.onscroll = function() {scrollFunction()};

const MenuItemType = {
    SimpleNavigationItem : 'SimpleNavigationItem',
    DropdownNavigationItem : 'DropdownNavigationItem'
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.paddingTop = '0.5em';
      document.getElementById("header").style.paddingBottom = '0.5em';
    } else {
      document.getElementById("header").style.paddingTop = "2em";
      document.getElementById("header").style.paddingBottom = "2em";
    }
}

export default function Header() {
    const [state, setState] = useContext(AppContext);
    const { logoText, styles } = app.header.logo;
    if (!state.selectedNavigationItem) setState(state => ({ ...state, selectedNavigationItem: app.header.items[0].value, currentPage: app.header.items[0].value }));
    const items = app.header.items.map(item => {
        // eslint-disable-next-line default-case
        switch (item.type) {
            case MenuItemType.SimpleNavigationItem:
                return <SimpleNavigationItem
                    key={JSON.stringify(item)}
                    item={item} />;
            case MenuItemType.DropdownNavigationItem:
                return <SimpleNavigationItem
                    key={JSON.stringify(item)}
                    item={item} />
        }
    });

    return (
        <header className="header" id="header" style={app.header.styles}>
            <div className="header-brand rotating">
                <img src={logo}
                    alt={logoText}
                    style={styles} />
            </div>
            <div className="navigation">
                {
                    items
                }
            </div>
        </header>
    );
}