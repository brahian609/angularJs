angular.module("mainModule",[])
    .controller("applyController",function($scope){
        $scope.nombre = "Brahian";
        /*setTimeout(function(){
            $scope.$apply(function(){
                $scope.nombre = "Steveen";
            });
        },2000);*/
        document.querySelector("#boton").addEventListener("click",function(){
            $scope.$apply(function(){
                $scope.nombre = "Steveen";
            });
        });
    });
