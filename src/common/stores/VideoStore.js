'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import Data from '../../data/videos.json';

var videos = Data.videos;

var VideoStore = assign({}, EventEmitter.prototype, {
    getVideos: function() {
        return videos;
    },
    getVideo: function(id) {
        return videos.filter(function (el) {
            return (el.id === id);
        });
    }
})

module.exports = VideoStore;
