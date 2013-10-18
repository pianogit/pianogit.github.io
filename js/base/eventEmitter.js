define(function(){
    function makeProxy( name ) {
        return function() {
            ( this._MODULE || ( this._MODULE = $( this ) ) )[name].apply( this._MODULE, arguments );
        };
    }

    return  {
        emit: makeProxy( "trigger" ),
        once: makeProxy( "one" ),
        on: makeProxy( "on" ),
        off: makeProxy( "off" )
    };
});