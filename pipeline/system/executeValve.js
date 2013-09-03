exports.execute = function (req, res) {

    //获得url对象
    var parseUrl = require('url').parse(req.url, true);

    //解析url  --todo 寻找基本工具类 （int，string）
    var pathName = parseUrl.pathname;
    var query = parseUrl.query;
    var last = pathName.lastIndexOf("/");

    var moduleName = pathName.substring(0, last);
    var method = pathName.substring(last + 1);
    var user = require(basePath +'/control' + moduleName);

    /*
     * 函数调用参数解析模块
     * 对象自动匹配、参数名匹配
     *
     */
    var method = user[method];
    //var result = method.apply(user, query);

    var result =  $methodInjection.injection(method);

    //结果封装如res
    res.result = result;
};