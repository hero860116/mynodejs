exports.init = function() {
    //定义全局url解析器
    global.$URLParse = require( $basePath + "/system/bean/URLParse");

    //定义全局函数注入器
    global.$methodInjection = require($basePath + "/system/bean/MethodInjection");

    //pipeline加载
    global.$pipeline =  require( $basePath + "/system/bean/Pipeline");


}