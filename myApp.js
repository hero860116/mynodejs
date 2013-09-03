//定义项目根目录
global.$basePath = __dirname;

//执行初始化
require('./system/bean/Initialization').init();

var  http = require('http');

http.createServer( function (req, res) {

    //解析url，得到urlParse对象
    var urlParse = new $URLParse();
    urlParse.parse(req, res);

    //将解析得到的对象放入函数注入器中
    $methodInjection.setURLParse(urlParse);

    //执行解析函数
    $pipeline.execute(urlParse);

}).listen(3000);
console.log("HTTP server is listening at port 3000.");