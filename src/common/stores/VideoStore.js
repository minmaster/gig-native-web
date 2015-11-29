'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import request from 'superagent';
import promise from 'bluebird';

var url = 'http://localhost:8000/src/data/videos.json';

var VideoStore = assign({}, EventEmitter.prototype, {
    getVideos: function() {
        return new Promise((resolve, reject) => {
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
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .end(function(error, response) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        var videos = response.body.videos;
                        videos.filter((el) => {
                            if (el.id == id) {
                              resolve(el);
                            }
                        });
                    }
                })

        });
    }
})

module.exports = VideoStore;
