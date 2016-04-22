angular.module("FinalApp")
.controller("MainController",function($scope,$resource,PostResource){
        User     = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});
        $scope.posts = PostResource.query();
        $scope.users = User.query();
        $scope.removePost = function(post){
            PostResource.delete({id: post.id});
            $scope.posts = $scope.posts.filter(function(element){
                return element.id !== post.id;
            });
        }

})
.controller("PostController",function($scope,PostResource,$routeParams){
        $scope.title = "Editar Post";
        $scope.post = PostResource.get({id: $routeParams.id});
        $scope.savePost = function(){
            PostResource.update({id: $scope.post.id},{data: $scope.post},function(data){
                console.log(data);
            });
        }
})
.controller("NewPostController",function($scope,PostResource,$location){
        $scope.post = {};
        $scope.title = "Crear Post";
        $scope.savePost = function(){
            PostResource.save({data: $scope.post},function(data){
                console.log(data);
                $location.path("/");
            });
        }
})