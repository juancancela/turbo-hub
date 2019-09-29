import React, { useContext } from 'react';
import './Header.css';
import SimpleNavigationItem from '../../components/SimpleNavigationItem/SimpleNavigationItem';
import { AppContext } from '../../AppContext';
import MenuItemType from '../../data/MenuItemType';
import { getConfig } from '../../utils/utils';
const config = getConfig();
const logo = require(`../../assets/${config.header.logo.logoUrl}`);

window.onscroll = function() {scrollFunction()};

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
    const { logoText, styles } = config.header.logo;
    if (!state.selectedNavigationItem) setState(state => ({ ...state, selectedNavigationItem: config.header.items[0].value, currentPage: config.header.items[0].value }));
    const items = config.header.items.map(item => {
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
        <header className="header" id="header" style={config.header.styles}>
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