//执行初始化
require('./system/bean/Initialization').init();

var  http = require('http');

http.createServer( function (req, res) {

    $urlParse.parse(req, res);

    //--todo  过滤器让静态文件走静态方式
    if (req.url === "/favicon.ico") {
        res.writeHead( 200 , {'Content-Type': 'text/html'});

        return;
    }

    //动态服务解析
    require($basePath + '/system/pipeline/executeValve').execute(req, res);

    //结果解析
    require($basePath + '/system/pipeline/resultValve').execute(req, res);

}).listen(3000);
console.log("HTTP server is listening at port 3000.");