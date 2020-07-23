import React from 'react';


import './menu-item.css';

const MenuItem = () => {

    const items = [
        {
            name: 'Profile',
            icon: '',
            url: '/profile'
        },
        {
            name: 'Settings',
            icon: '',
            url: '/settings'
        }
    ]

    return (
        <ul className="item-list list-group">
            {items.map(({name, icon, url}) => {
                return (
                    <div className="menu__item">
                        <a href={url}>
                            <div className="menu__logotype">
                                {icon}
                            </div>
                            {name}
                        {el}
                        </a>
                </div>
                );
            })};
        </ul>
    )
    
}

export default MenuItem;