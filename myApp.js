
var  http = require('http');

http.createServer( function (req, res) {


    //--todo  过滤器让静态文件走静态方式
    if (req.url != "/favicon.ico") {
        /*
         url解析模块，定位到不同的目录和方法
         get、post、requetload参数解析
         */
        //获得url对象
        var parseUrl = require('url').parse(req.url, true);

        //解析url  --todo 寻找基本工具类 （int，string）
        var pathName = parseUrl.pathname;
        var query = parseUrl.query;
        var last = pathName.lastIndexOf("/");

        var moduleName = pathName.substring(0, last);
        //moduleName = '/admin/user';
        var method = pathName.substring(last + 1);
        //var method = 'sayHello';
        var user = require('./control' + moduleName);


        /*
         * 函数调用参数解析模块
         * 对象自动匹配、参数名匹配
         *
         */
        var result = user[method](query);

        /*
         *  返回值解析模块
         *  将返回值进行josn格式包装解析
         */
        //console.log(user[method].toString());


        res.writeHead( 200 , {'Content-Type': 'text/html'});
        //res.write(JSON.stringify(result));
        res.end(JSON.stringify(result));
    } else {
        res.writeHead( 200 , {'Content-Type': 'text/html'});
        res.end("test");
    }

}).listen(3000);
console.log("HTTP server is listening at port 3000.");