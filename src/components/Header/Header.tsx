import React, { useContext } from 'react';
import './Header.css';
import SimpleNavigationItem from '../../lib/components/SimpleNavigationItem/SimpleNavigationItem';
import { AppContext } from '../../lib/context/AppContext';
import MenuItemType from '../../lib/data/MenuItemType';
import DropdownNavigationItem from '../../lib/components/DropdownNavigationItem/DropdownNavigationItem';
import { getConfig, isMobile } from '../../lib/utils/utils';
const config = getConfig();

export default function Header() {
    const [state, setState] = useContext(AppContext);
    const { logoText, logoUrl, styles } = config.header.logo;
    const logo = require(`../../assets/${logoUrl}`);
    const items = config.header.items.map(item => {
        switch (item.type) {
            case MenuItemType.SimpleNavigationItem:
                return <SimpleNavigationItem
                    key={JSON.stringify(item)}
                    item={item} />;
            case MenuItemType.DropdownNavigationItem:
                return <DropdownNavigationItem
                    key={JSON.stringify(item)}
                    item={item} />
        }
    });
    return (
        <header className="header" style={config.header.styles}>
            <div className="header-brand">
                <img src={logo}
                    alt={logoText}
                    style={styles} />
            </div>
            <div className="header navigation">
                {
                    isMobile() ? items : <div>{items}</div>
                }
            </div>
        </header>
    );
}