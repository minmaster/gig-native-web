'use strict';

import React from 'react';
import Youtube from 'react-youtube';

export default function () {
  return (
    <div className='video-view'>
        {(this.state.item.source) ?
        <Youtube
            url={'http://www.youtube.com/watch?v='+this.state.item.source}
            className="stream-video"
        />
        : <div /> }
        <div className="text">
            <h3>{this.state.item.subtitle}</h3>
            <p className="subtitle">{this.state.item.title}</p>
            <p className="description">{this.state.item.description}</p>


        </div>
        <div className="buttons">
            <button className="btn-share"></button>
            <button className="btn-download"></button>
        </div>
    </div>
  );
}
