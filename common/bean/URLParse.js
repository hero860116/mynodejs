function  URLParsing() {
}

URLParsing.prototype.parse = function(req, res) {
    var parseUrl = require('url').parse(req.url, true);

    var pathName = parseUrl.pathname;
    var modoleLastIndex = pathName.indexOf("/", 1);
    var last = pathName.lastIndexOf("/");

    //模块名
    this.module = pathName.substring(1, modoleLastIndex);

    //目标名
    this.target = pathName.substring(modoleLastIndex + 1, last);

    //函数名
    this.method = pathName.substring(last + 1);

    this.req = req;

    this.res = res;

    //参数对象
    this.param =  parseUrl.query;
}

module.exports = URLParsing;