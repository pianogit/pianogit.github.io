define(['common/test'],function(CommonTest){
     console.log('load:module1');
     var commonTest = CommonTest.test();
     return {
         start : function(){
             console.log('start:module1');
             return commonTest+'->module1';
         }
     }
});