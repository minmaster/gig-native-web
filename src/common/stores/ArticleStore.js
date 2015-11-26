'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import request from 'superagent';
import promise from 'bluebird';

var url = '../../data/articles.json';

var ArticleStore = assign({}, EventEmitter.prototype, {
    getItems: function() {
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
    getItem: function(id) {
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

module.exports = ArticleStore;
