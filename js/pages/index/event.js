define(['base/eventEmitter'],function(EventEmitter){
    function TestEvent(){};
    $.extend(TestEvent.prototype,EventEmitter);
    return new TestEvent();
});