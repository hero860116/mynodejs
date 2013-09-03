exports.execute = function (req, res) {

    res.writeHead( 200 , {'Content-Type': 'text/html'});
    res.end(JSON.stringify(res.result));
};