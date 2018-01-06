
var http = require('https'),
fs = require('fs'),

// Promisify a request
// from :  http://stackoverflow.com/questions/38533580/nodejs-how-to-promisify-http-request-reject-got-called-two-times
httpRequest = function (params, postData) {
    return new Promise(function (resolve, reject) {
        var req = http.request(params, function (res) {
                // reject on bad status
                if (res.statusCode < 200 || res.statusCode >= 300) {
                    return reject(new Error('statusCode=' + res.statusCode));
                }
                // cumulate data
                var body = [];
                res.on('data', function (chunk) {
                    body.push(chunk);
                });
                // resolve on end
                res.on('end', function () {
                    try {
                        body = JSON.parse(Buffer.concat(body).toString());
                    } catch (e) {
                        reject(e);
                    }
                    resolve(body);
                });
            });
        // reject on request error
        req.on('error', function (err) {
            // This is not a "Second reject", just a different sort of failure
            reject(err);
        });
        if (postData) {
            req.write(postData);
        }
        // IMPORTANT
        req.end();
    });
},

// the first promise I wrote myself
readFile = function (path, filename) {

    return new Promise(function (resolve, reject) {

        fs.readFile(path + filename, 'utf8', function (err, data) {

            if (err) {

                log(err);

                reject('Error reading file: ' + err);

            }

            resolve(data);

        });

    });

},

// get an access key, or token from apikeys.json.
getKey = function (apiName) {

    apiName = apiName || 'github';

    return new Promise(function (resolve, reject) {

        readFile(hexo.base_dir, 'apikeys.json').then(function (content) {

            resolve(JSON.parse(content)[apiName]);

        }).catch (function () {

            log('error getting api key for : ' + apiName);

            reject('');
        });

    });

},

// log method for this file
log = function (mess) {

    console.log('**********');
    if (typeof mess != 'string') {

        console.log('my-tags: non-string: ');
        console.log(mess);

    } else {
        console.log('my-tags : ' + mess);

    }
    console.log('**********');

};

// build time
hexo.extend.tag.register('mytags_buildtime', function (args) {

    return '<span style="font-weight: bold;">' + new Date() + '</span>';

});

// write a random message on building
hexo.extend.tag.register('mytags_say', function (args) {

    // use the given say type or defaul to simpsons
    var sayType = args[0] || 'simpsons',

    data = {

        simpsons : {

            defaultName : 'The Simpsons',

            says : [

                ['I’d rather let a thousand guilty men go free than chase after them.', 'Chief Wiggum'],
                ['It’s all over, people! We don’t have a prayer!', 'Reverend Lovejoy'],
                ['Inflammable means flammable? What a country.', 'Dr. Nick Riviera'],
                ['My eyes! The goggles do nothing!', 'Rainer Wolfcastle'],
                ['Oh, loneliness and cheeseburgers are a dangerous mix.', 'Comic Book Guy']

            ]
        },

        watts : {

            defaultName : 'Allen Watts',

            says : [

                'No valid plans for the future can be made by those who have no capacity for living now. ',
                'You do not play a sonata in order to reach the final chord, and if the meanings of things were simply in ends, composers would write nothing but finales.',
                'Human desire tends to be insatiable.'
            ]
        }

    },

    len = data[sayType].says.length,

    index = Math.floor(Math.random() * len),

    text = data[sayType].says[index];

    if (typeof text === 'object') {

        text = '\"' + text[0] + '\" -' + text[1];

    } else {

        text = '\"' + text + '\" -' + data[sayType].defaultName;

    }

    return '<span style="font-weight: bold;">' + text + '</span>';

});

// async call to fixer
hexo.extend.tag.register('mytags_fixer', function (args) {

    log('making a request...');

    return httpRequest({
        host : 'api.fixer.io',
        method : 'GET',
        path : '/latest'
    }).then(function (data) {

        log('request is good.');

        // just assume the data is good and go for it, because I feel lucky.

        var html = '<p>date of rates: ' + data.date + '<\/p>',
        rate;

        for (rate in data.rates) {

            html += '<p>' + rate + ' : ' + data.rates[rate] + '<\/p>';

        }

        return html;

    }).catch (function (err) {

        log('bad request.');
        log(err);

        return '<p> Error getting data :( <\/p>';

    });

}, {
    async : true
});

// async call to data.ny.gov for pic 10 numbers.
hexo.extend.tag.register('mytags_pickten', function (args) {

    log('making a request...');

    var daysBack = args[0] || 1,
    now = new Date(new Date().getTime() - 86400000 * daysBack);

    return httpRequest({

        host : 'data.ny.gov',
        port : 80,
        method : 'GET',
        path : '/resource/bycu-cw7c.json?draw_date=' +
        now.getFullYear() + '-' +
        ('0' + now.getMonth()).slice(-2) + '-' +
        (('0' + now.getDate()).slice(-2)) + 'T00:00:00'

    }).then(function (content) {

        log('request is good.')

        return '<p>The winning NY Pic 10 numbers form ' + daysBack + ' days back from ' + now + ' is: <\/p>' +
        '<p> ' + content[0].winning_numbers + ' ( Draw Date: ' + content[0].draw_date + ' )<\/p>';

    }).catch (function (err) {

        log('bad request.');
        log(err);

        return '<p>Error getting the Data<\/p>';

    });

}, {
    async : true
});

// read a file from the base dir forward.
hexo.extend.tag.register('mytags_readfile', function (args) {

    var filename = args[0];

    log('reading file : ' + filename);

    return readFile(hexo.base_dir, filename).then(function (content) {

        log('file read good.');

        return '<pre><code>' + content + '</code></pre>';
    }).catch (function (err) {

        log('error reading file');

        return '<pre>Error reading file ' + filename + '</pre>';

    });

}, {
    async : true
});

var formatRepos = function (content) {

    html = '<pre> Here are my repos at github.<br><br>';

    content.forEach(function (repo) {

        html += '<a href=\"' + repo.html_url + '\">' + repo.name + '</a><br>';
        html += repo.description + '<br><br>';

    });

    return html + '</pre>';

};

// read a file from the base dir forward.
hexo.extend.tag.register('mytags_github', function (args) {

    return new Promise(function (resolve, reject) {

        getKey('github').then(function (key) {

            resolve(key);

        }).catch (function () {

            reject('');

        });

    }).then(function (key) {

        return httpRequest({

            host : 'api.github.com',
            method : 'GET',
            path : '/users/dustinpfister/repos?access_token=' + key,
            headers : {
                'user-agent' : 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)'
            }

        }).then(function (content) {

            log('request is good.');

            return formatRepos(content);

        }).catch (function (err) {

            log('bad request.');
            log(err);

            return '<pre>Error getting the data from github <\/pre>';

        });

    }).catch (function () {

        return '<pre>error with the github</pre>';

    });

}, {
    async : true
});

/* add some keywords
 */
hexo.extend.tag.register('mytags_postwords', function (args) {

    // groups of keywords
    var keyGroups = {

        js_core : 'js,javaScript,core&32;javaScript',
        js_node : 'node.js,nodejs,sever,backend',
        hexo_core : 'hexo,hexo.io,static&32;site&32;generator'

    };

    // the output string of keywords
    str = '',

    // split the string into an array
    keyList = args[0].split(',');

    // run threw the keyList, build keyword string, and look for key groups
    keyList.forEach(function (keyword) {

        // the group name (if a group)
        var groupName = keyword.substr(1, keyword.length);

        if (keyword.match(/!\w+/)) {

            // if we have group keywords, add them in
            if (keyGroups[groupName]) {

                str += keyGroups[groupName] + ',';

            }

        } else {

            // else just add in the keyword
            str += keyword + ',';

        }

    });

    // return the keywords
    return '\n<meta itemprop="keywords" content="' + str.substr(0, str.length - 1) + '">\n';

});
