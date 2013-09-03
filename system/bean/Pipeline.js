function  Pipeline() {

     //同步加入所有用户pipeline
     var fs = require("fs");
     var fileArr = fs.readdirSync($basePath + "/web/pipeline");

    this.pipelines = [];
    for (var i = 0; i < fileArr.length; i++) {
        this.pipelines.push( require($basePath + "/web/pipeline/" + fileArr[i]));
    }

}

Pipeline.prototype.execute = function(urlParse) {

    if (urlParse.req.url === "/favicon.ico") {
        urlParse.res.result = "static";
        return;
    }

     var executeService = true;
     for (var i = 0; i < this.pipelines.length; i++) {

         var result = null;
         if (this.pipelines[i].module === undefined || this.pipelines[i].module() === null || this.pipelines[i].module() === "") {
             var result = this.pipelines[i].execute(urlParse);
         } else  if (this.pipelines[i].module() === urlParse.module)  {
             var result = this.pipelines[i].execute(urlParse);
         }

         if (result === 1) {
             break;
         } else if (result === -1) {
             executeService = false;
             break;
         }
     }

     if (executeService) {
         require($basePath + "/system/pipeline/executeValve").execute(urlParse);
     }

    require($basePath + "/system/pipeline/resultValve").execute(urlParse);
};

module.exports = new Pipeline();
