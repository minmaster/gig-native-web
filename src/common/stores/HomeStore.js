'use strict';

import { EventEmitter } from 'events';
import assign from 'object-assign';
import request from 'superagent';
import promise from 'bluebird';
import Parameters from '../utils/parameters';

var url = Parameters.url+'src/data/home.json';

var HomeStore = assign({}, EventEmitter.prototype, {
    getData: function() {
        return new Promise(function(resolve, reject) {
            request
                .get(url)
                .set('Accept', 'application/json')
                .end(function(error, response) {
                    console.log(response);
                    console.log(response.text);
                    console.log(error);
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(JSON.parse(response.text));
                    }
                })
        });
    }
})

module.exports = HomeStore;
