'use strict';

import React from 'react';
import classNames from 'classnames';

var If = React.createClass({
    render: function() {
        if (this.props.condition) {
            return this.props.children;
        }
        else {
            return false;
        }
    }
});


export default function (props, state) {

    var list = [];
    this.state.items.map((item, i) => {

        var styleCont = {
            backgroundImage: 'url(src/images/'+item.image+')'
        }

        list.push(
            <li key={i} onClick={this.handleClick.bind(this, item, 'web')}>
                <div className="cont" style={styleCont}>
                    <if condition={item.caption}>
                        <div className='caption right'>
                            <p>{item.caption}</p>
                            <span></span>
                        </div>
                    </if>

                    <h3 className="title">{item.title}</h3>
                    <p className="subtitle">{item.subtitle}</p>
                </div>
            </li>
        )
    });

    return (
        <div className='home-list'>
            <ul>
                {list}
            </ul>
        </div>
    );
}
