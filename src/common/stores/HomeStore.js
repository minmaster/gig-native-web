'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import request from 'superagent';
import promise from 'bluebird';

var url = 'http://localhost:8000/src/data/home.json';

var HomeStore = assign({}, EventEmitter.prototype, {
    getData: function() {
        console.log(url);
        return new Promise(function(resolve, reject) {
            request
                .get(url)
                .set('Access-Control-Allow-Origin', '*')
                .set('Accept', 'application/json')
                .end(function(error, response) {
                    console.log(response);
                    console.log(error);
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(response.body);
                    }
                })
        });
    }
})

module.exports = HomeStore;
