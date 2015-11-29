'use strict';

import React from 'react';

export default function () {

    var list = [];
    this.state.menuItems.map((item, i) => {

        var badge;

        if (item.badge) {
            badge = <span>{item.badge}</span>;
        }

        list.push(
            <li key={i} onClick={this.menuClick.bind(this, item)}>
                <p>{item.title}</p>
                {badge}
            </li>
        )
    });


  return (
    <div className='menu'>
        <div className="profile-item">
            <div className="avatar">
                <img src="src/images/avatar.jpg" />
            </div>
            <div className="cont">
                <p className="title">Hi Matteo</p>
                <p className="link">Profile</p>
            </div>
        </div>
        <ul className="list-items">
            {list}
        </ul>

    </div>
  );
}
