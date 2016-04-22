var app = angular.module("MyFirstApp");
app.directive("miAutocomplete",function(){
    function link(scope,element,attrs){
        $(element).autocomplete({
            source: scope.$eval(attrs.miAutocomplete),
            select:function(ev,ui){
                ev.preventDefault();
                if(ui.item){
                    scope.optionSelected(ui.item.value);
                }
            },
            focus: function(ev,ui){
                ev.preventDefault();
                $(this).val(ui.item.label);
            }
        });
    };
    return{
        link: link
    };
})
app.directive("backImg",function(){
    return function(scope,element,attrs){
        attrs.$observe("backImg",function(value){
            element.css({
                "background":"url("+value+")",
                "background-size":"cover",
                "background-position":"center"

            });
        });
    }
})