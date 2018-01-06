
var https = require('https'),

options = {
    host : 'api.fixer.io',
    port : 443,
    path : '/latest?base=USD;symbols=INR',
    method : 'GET',
    headers : {
        'Content-Type' : 'application/json'
    }
};

//    req.open('get', 'https://api.fixer.io/latest?base=USD;symbols=INR');



/*
hexo.extend.tag.register('fixer_table', function (args) {



console.log('okay so far so good');

var req = https.request(options, function (res) {

var output = '';

res.setEncoding('utf8');

res.on('data', function (chunk) {
output += chunk;
});

res.on('end', function () {
//var obj = JSON.parse(output);
//onResult(res.statusCode, obj);

console.log('okay what do we have?');
console.log(output);

});

});

req.end();

return req;

});


*/
