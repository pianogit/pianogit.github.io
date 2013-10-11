define(['common/test'],function(CommonTest){
    console.log('load:module3');
    var commonTest = CommonTest.test();
    return {
        start : function(){
            console.log('start:module3');
            return commonTest+'->module3';
        }
    }
});