angular.module("MyFirstApp",[])
    .run(function($rootScope){ /** definir variables que se comparten en todos lo controladores*/
        $rootScope.nombre = "Brahian";
    })
    .controller("FirstController",function($scope){
        $scope.nombre = "Steveen";
    })
    .controller("ChildController",function($scope){

    });