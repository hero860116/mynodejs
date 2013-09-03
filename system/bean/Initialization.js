exports.init = function() {
    //定义项目目录
    global.$basePath = "D:/work/idea/mynodejs";

    //定义全局url解析器
    var URLParse = require( $basePath + "/system/bean/URLParse");
    global.$urlParse = new URLParse();

    //定义全局函数注入器
    var MethodInjection = require($basePath + "/system/bean/MethodInjection");
    global.$methodInjection = new MethodInjection();
    $methodInjection.setURLParse($urlParse);
}