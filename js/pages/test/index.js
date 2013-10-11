define(['pages/test/module/module1','pages/test/module/module2'],function(M1,M2){
    var m1 = M1.start();
    var m2 = M2.start();
    console.log('load:testindex');

    return {
        start : function(){
            console.log('start:testindex');
            return m1+'--->indextest'+'+++++'+m2+'-->indextest';
        }
    }
});