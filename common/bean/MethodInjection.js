function  MethodInjection(req) {
}

MethodInjection.prototype.setURLParse = function(urlParse) {
     this.urlParse = urlParse;
}

MethodInjection.prototype.injection = function(method) {
    var urlParam = this.urlParse.param;

    //参数列表解析
    var methodDeclare = method.toString();
    var startIndex = methodDeclare.indexOf("(");
    var endIndex = methodDeclare.indexOf(")");

    var parameterStr =   methodDeclare.substring(startIndex + 1, endIndex);
    var parameterArr = parameterStr.split(",");

    var urlParamSize = 0;
    for (var urlp in urlParam) {
        urlParamSize++;
    }

    //得到顺序参数列表名
    var parameterNames = new Array(parameterArr.length);

    for (var i = 0; i < parameterArr.length; i++) {
        parameterNames[i] =   parameterArr[i].trim();
    }

   //参数列表
   var parameters = [];
   var index = -1;
   var hasMatchParamNames = [];
   for (var j = 0; j < parameterNames.length; j++) {
       var parameter =  parameterNames[j];

       var param = null;
       for (var paraName in urlParam) {
             if (matchParam(paraName, parameter)) {
                 param =  urlParam[paraName];
                 hasMatchParamNames.push(paraName);
                 break;
             }
       }

       if (param === null && index === -1) {
            index =  j;
       }

       parameters.push(param);
   }

    if (index != -1) {
        var  remainParam = null;
        if (hasMatchParamNames.length < urlParamSize) {
            remainParam = new Object();

            for (var paraName in urlParam) {
                var match = false;
                for (var m = 0; m < hasMatchParamNames.length; m++) {

                    if (hasMatchParamNames[m] === paraName) {
                        match = true;
                        break;
                    }
                }

                if (!match) {
                    remainParam[paraName] = urlParam[paraName];
                }
            }
        }

        parameters.splice(index, 1, remainParam);
        //parameters.splice
    }

    return method.apply(this, parameters);

}

//模糊匹配
var matchParam = function(srcParamName, toParamName) {
      var exSrcParamName = srcParamName.replace("_", "");
      var exToParamName = toParamName.replace("_", "");

      exSrcParamName = exSrcParamName.toLowerCase();
      exToParamName =  toParamName.toLowerCase();

      return  exSrcParamName ===  exToParamName;
}

module.exports = MethodInjection;
