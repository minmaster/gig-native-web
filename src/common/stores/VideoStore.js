'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import request from 'superagent';
import promise from 'bluebird';
import Parameters from '../utils/parameters';

var url = Parameters.url+'src/data/videos.json';

var VideoStore = assign({}, EventEmitter.prototype, {
    getVideos: function() {
        return new Promise((resolve, reject) => {
            request
                .get(url)
                .end(function(error, response) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(JSON.parse(response.text.videos));
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
                        console.log(response);
                        var videos = JSON.parse(response.text).videos;
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
