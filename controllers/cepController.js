var app = require('../bootstrap-angular');

app.controller('cepController', function($scope) {
  $scope.cep = '07905-110';

  $scope.showCep = function () {
    alert("CEP" + $scope.cep);
  };
});
