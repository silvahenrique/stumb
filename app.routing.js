var app = require('./bootstrap-angular');
require('./controllers/homeController');
require('./controllers/cepController');

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        contoller: "homeController"
    })
    .when("/cep", {
        templateUrl : "views/cep.html",
        contoller: "cepController"
    })
    .when("/crop", {
        templateUrl : "views/crop.html",
        contoller: "cropController"
    })
});
