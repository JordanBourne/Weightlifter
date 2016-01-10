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
        $scope.addWeek = function() {
            $scope.totalWeeks = [];
            
            if($scope.weeks < 40) {
                for(var i = 1; i <= $scope.weeks; i++) {
                    $scope.totalWeeks.push(i);
                }
            }
            
            console.log($scope.totalWeeks);
        }
    }
]);