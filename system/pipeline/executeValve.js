exports.execute = function (urlParse) {

    //获取执行函数
    var method = urlParse.getMethod();

    //通过函数注入器调用执行
    var result =  $methodInjection.injection(method);

    urlParse.res.result = result;
};