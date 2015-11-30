
import request from 'superagent';
import promise from 'bluebird';

var Api = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            request
                .get(url)
                .end(function (error, response) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(JSON.parse(response.text));
                    }
            });
        });
    }
};

module.exports = Api;
