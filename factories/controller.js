angular.module("ToDoList",["LocalStorageModule"])
    .factory('todoService',function(localStorageService){
        var todoService = {};
        todoService.key = "todoList";
        if(localStorageService.get(todoService.key)){
            todoService.activities = localStorageService.get(todoService.key);
        }else{
            todoService.activities = [];
        }

        todoService.add = function(newActv) {
            todoService.activities.push(newActv);
            todoService.updatelocalStorage();
        }
        todoService.updatelocalStorage = function(){
            localStorageService.set(todoService.key,todoService.activities);
        }
        todoService.clean = function(){
            todoService.activities = [];
            todoService.updatelocalStorage();
            return todoService.getAll();
        }
        todoService.getAll = function(){
            return todoService.activities;
        }
        todoService.removeItem = function(item){
            todoService.activities = todoService.activities.filter(function(activity){
                return activity !== item;
            });
            todoService.updatelocalStorage();
            return todoService.getAll();
        }

        return  todoService;
    })
    .controller("ToDoController", function ($scope,todoService) {
        $scope.todo = todoService.getAll();
        $scope.newActv = {};
        $scope.addActv = function() {
            todoService.add($scope.newActv);
            $scope.newActv = {};
        }
        $scope.removeActv = function(item) {
            $scope.todo = todoService.removeItem(item);
        }
        $scope.clean = function() {
            $scope.todo = todoService.clean();
        }
});
