/**
 * Created with JetBrains WebStorm.
 * User: yangchen
 * Date: 13-10-10
 * Time: 上午10:59
 * To change this template use File | Settings | File Templates.
 */
define(['pages/test1/module/module3'],function(Module3){
    console.log('load:module2');
    var module3 = Module3.start();
    return {
        start : function(){
            console.log('start:module2');
            return module3+'->module2';
        }
    }
});