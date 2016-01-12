var app = angular.module('app', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
        
            .state('programs', {
                url: '/programs',
                templateUrl: 'programs.html',
                controller: 'ProgramListCtrl'
            })
        
            .state('theprogram', {
                url: '/programs/:id',
                templateUrl: 'theProgram.html',
                controller: 'TheProgramCtrl'
            })
        
            .state('newProgram', {
                url: '/NewProgram',
                templateUrl: 'newProgram.html',
                controller: 'NewProgramCtrl'
            })
        
        $urlRouterProvider.otherwise('/');
}]);

app.controller('HomeCtrl', [
    '$scope',
    function($scope) {
    }
]);

app.controller('ProgramListCtrl', [
    '$scope',
    function($scope) {
    }
]);

app.controller('TheProgramCtrl', [
    '$scope',
    function($scope) {
    }
]);

app.controller('NewProgramCtrl', [
    '$scope',
    function($scope) {        
        $scope.totalExercises = [];
        
        $scope.addWeek = function() {
            $scope.totalWeeks = [];
            
            if($scope.weeks < 53) {
                for(var i = 1; i <= $scope.weeks; i++) {
                    $scope.totalWeeks.push(i);
                    $scope.totalExercises.push([],[],[],[],[],[],[]);
                }
            }
            console.log($scope.totalExercises);
        }

        
        $scope.addExercise = function (num) {
            $scope.totalExercises[num].push($scope.totalExercises[num].length);
            console.log($scope.totalExercises[num]);
        }
        
        $scope.removeExercise = function (num) {
            $scope.totalExercises[num].pop();
        }
    }
]);