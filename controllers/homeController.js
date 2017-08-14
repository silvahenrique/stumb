var app = require('../bootstrap-angular');

app.controller('homeController', function($scope) {
  $scope.firstName = 'Henrique';
  $scope.lastName = 'Fernandes';

  $scope.addClient = function () {
    alert("Bem-vindo! " + $scope.firstName + " " + $scope.lastName);
  };
});
