angular.module('SolarApp').controller('SolarController', SolarController);

function SolarController($scope, $http) {
    var get_solar = $http.get('/solar').success(function(response) {
        $scope.solar_system = response;
    });
    $scope.orderProp = 'id';

    $scope.show = function (id) {
      $scope.solar_system.forEach(function (planet){
        document.getElementById(planet.name).style.visibility = "visible";
        if (planet.id === id) {
          $scope.thisPlanet = planet
      }
    })
    document.getElementById($scope.thisPlanet.name).style.visibility = "hidden";
  }
  $scope.limit= 1;

  $scope.animate = function (id) {
    $scope.solar_system.forEach(function (planet) {
      if (planet.id === id) {
        document.getElementById(planet.name).className = 'animated pulse';
        window.setTimeout(function(){
          document.getElementById(planet.name).className = '';
        }, 1000);    
      }
    })
  }

};