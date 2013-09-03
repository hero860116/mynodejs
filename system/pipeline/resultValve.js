exports.execute = function (urlParse) {

    urlParse.res.writeHead( 200 , {'Content-Type': 'text/html'});

    urlParse.res.end(JSON.stringify(urlParse.res.result), 'utf-8');
};