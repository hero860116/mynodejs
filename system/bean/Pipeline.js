function  Pipeline(valvePath) {
     if (!valvePath.match("/pipeline*")) {

     }
     this.valvePath = valvePath;
}

Pipeline.prototype.baseValveDirPath = "/pipeline";
Pipeline.prototype.setModule = function(moduleName) {
    this.moduleName =  moduleName;
};
