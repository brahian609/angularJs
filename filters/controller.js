angular.module("mainModule",[])
    .filter("removeHtml",function(){/** filtro personalizado*/
        return function(texto){
            return String(texto).replace(/<[^>]+>/gm,'');
        }
    })
    .controller("FiltersController",function($scope){
        $scope.mi_html = "<p>Hola mundo</p>";
        $scope.textJson = {};
        $scope.textJson.title = 'Hola';
        $scope.textJson.body = 'Mundo';
        $scope.valor = 2000;
    });
