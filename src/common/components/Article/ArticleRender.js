'use strict';

import React from 'react';
import Parameters from '../../utils/parameters';

export default function () {

    function createMarkup(html) { return {__html: html}; };

    var imageStyle = {
        backgroundImage: 'url('+Parameters.getImage(this.state.item.image)+')'
    }

    return (
        <div className='article-view'>
            <div className="image" style={imageStyle}>
            </div>
            <div className="cont">
                <h2>{this.state.item.title}</h2>
                <p className="subtitle">{this.state.item.subtitle}</p>
                <p className="description" dangerouslySetInnerHTML={createMarkup(this.state.item.description)}></p>
            </div>
        </div>
    );
}
