'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import request from 'superagent';
import promise from 'bluebird';

var url = '../../data/videos.json';

var VideoStore = assign({}, EventEmitter.prototype, {
    getVideos: function() {
        return new Promise(function(resolve, reject) {
            request
                .get(url)
                .end(function(error, data) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(data);
                    }
                })

        });
    },
    getVideo: function(id) {
        return new Promise(function(resolve, reject) {
            request
                .get(url)
                .end(function(error, data) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        data.filter(function(el) {
                            resolve(el.id === id);
                        })
                    }
                })

        });
    }
})

module.exports = VideoStore;
