require.config({
    baseUrl: "./js",
    paths: {
       "test": "pages/test"
    }
});

require(['test/index'],function(test){
    console.log(test.start());
    console.log('11111');
});
