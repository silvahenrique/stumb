var app = require('./bootstrap-angular');

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "views/home.html",
        contoller: "controllers/homeController"
    })
    .when("/cep", {
        templateUrl : "views/cep.html",
        contoller: "controllers/cepController"
    })
});
