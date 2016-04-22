var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",["$scope",function(s){
    s.nombre = "Brahian Giraldo";
    s.nuevoComentario = {};
    s.comentarios = [
        {
            comentario: "Buen tutorial",
            username: "Brahian"
        },
        {
            comentario: "Buen tutorial 1",
            username: "Sebas"
        }
    ];
    s.agregarComentario = function(){
        s.comentarios.push(s.nuevoComentario);
        s.nuevoComentario = {};
    }
}]);