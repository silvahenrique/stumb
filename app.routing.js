var app = require('./bootstrap-angular');

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "views/home.html"
    })
    .when("/main", {
        templateUrl : "views/main.html"
    })
});
