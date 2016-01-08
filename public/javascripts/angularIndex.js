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
                controller: 'ProgramCtrl'
            })
        
        $urlRouterProvider.otherwise('/');
}]);

app.controller('HomeCtrl', [
    '$scope',
    function($scope) {
    }
]);

app.controller('ProgramCtrl', [
    '$scope',
    function($scope) {
    }
]);