(function($) {


    var defaults = {
        'defaultItemNumber': 10
    };

    var options;

    var methods = {
        init: function(numberItems){
        options = $.extend({}, defaults, numberItems);
        alert(options.defaultItemNumber);
            return this;
        },
        show: function(){
            $(this).click(function(){
                $(".smart-search-block").css("display","block");
                $(".wrapper").css("display","block");
            });
        return this;
        },
        hide: function(){
            alert('hide');
            //$(this).click
        }

    };

    $.fn.smartSearch = function(method){

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        }
        else if ( typeof method === 'object' || ! method ) {

            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод "' +  method + '" не найден в плагине jQuery.mySimplePlugin' );
        }
    };

})(jQuery);