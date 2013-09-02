global.basePath = "D:/work/idea/mynodejs";

//定义全局url解析器
var URLParse = require( basePath + "/common/bean/URLParse");
global.$urlParse = new URLParse();

//定义全局函数注入器
var MethodInjection = require(basePath + "/common/bean/MethodInjection");
global.$methodInjection = new MethodInjection();
$methodInjection.setURLParse($urlParse);

var  http = require('http');

http.createServer( function (req, res) {

    $urlParse.parse(req, res);

    //--todo  过滤器让静态文件走静态方式
    if (req.url === "/favicon.ico") {
        res.writeHead( 200 , {'Content-Type': 'text/html'});

        return;
    }

    //动态服务解析
    require(basePath + '/pipeline/executeValve').execute(req, res);

    //结果解析
    require(basePath + '/pipeline/resultValve').execute(req, res);

}).listen(3000);
console.log("HTTP server is listening at port 3000.");