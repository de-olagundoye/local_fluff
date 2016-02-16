angular.module('SolarApp').controller('CalculatorController', CalculatorController);

function CalculatorController($scope, $http) {

  var month = document.getElementById('month');
  var day = document.getElementById('day');
  var year = document.getElementById('year');

  $scope.compute_age = function() {
    today = (new Date()).getTime();
    var birthyear = year.value;
    var birthmonth = month.value - 1;
    var birthday = day.value;

    birthdate = (new Date(birthyear, birthmonth, birthday)).getTime();
    age = (today - birthdate) / (1000 * 3600 * 24);
    $scope.age = age
      if (age > 0.0) {
  //  Mercury
        $scope.merAgeDay = Math.round((( 10 * age / 58.6 ) / 10) * 100)/100;
        $scope.merAgeYear = Math.round((( 10 * age / 87.97 ) / 10) * 100)/100;
          if ( (age / 87.97) > 1)
            nextMerBday = new Date(today + (( 1 - (( age / 87.97 ) - ( parseInt( age / 87.97 )))) * 87.97 * 24 * 3600 * 1000 ))
          else
            nextMerBday = new Date(today + ( 1 - ( age / 87.97 )) * 87.97 * 24 * 3600 * 1000 )

            $scope.nextMerBday = dateFormat(nextMerBday, "dddd, mmmm dS, yyyy")
  //  Venus
        $scope.venAgeDay = Math.round((( 10 * age / 243 ) / 10) * 100)/100;
        $scope.venAgeYear = Math.round((( 10 * age / 224.7 ) / 10) * 100)/100;
          if ( (age / 224.7) > 1)
            nextVenBday = new Date(today + (( 1 - (( age / 224.7 ) - ( parseInt( age / 224.7 )))) * 224.7 * 24 * 3600 * 1000 ));
          else
            nextVenBday = new Date(today + ( 1 - ( age / 224.7 )) * 224.7 * 24 * 3600 * 1000 );

            $scope.nextVenBday = dateFormat(nextVenBday, "dddd, mmmm dS, yyyy")
  //  Earth
        $scope.earAgeDay = Math.round((( 10 * age ) / 10) * 100)/100;
        $scope.earAgeYear = Math.round((( 10 * age / 365.26 ) / 10) * 100)/100;
          if ( (age / 365.26) > 1)
            nextEarBday = new Date(today + (( 1 - (( age / 365.26 ) - ( parseInt( age / 365.26 )))) * 365.26 * 24 * 3600 * 1000 ));
          else
            nextEarBday = new Date(today + ( 1 - ( age / 365.26 )) * 365.26 * 24 * 3600 * 1000 );

            $scope.nextEarBday = dateFormat(nextEarBday, "dddd, mmmm dS, yyyy")
  //  Mars
        $scope.marAgeDay= Math.round((( 10 * age / 1.03 ) / 10) * 100)/100;
        $scope.marAgeYear = Math.round((( 10 * age / 686.98 ) / 10) * 100)/100;
          if ( (age / 686.98) > 1)
            nextMarBday = new Date(today + (( 1 - (( age / 686.98 ) - ( parseInt( age / 686.98 )))) * 686.98 * 24 * 3600 * 1000 ));
          else
            nextMarBday = new Date(today + ( 1 - ( age / 686.98 )) * 686.98 * 24 * 3600 * 1000 );

            $scope.nextMarBday = dateFormat(nextMarBday, "dddd, mmmm dS, yyyy")
  //  Jupiter
        $scope.jupAgeDay = Math.round((( 10 * age / 0.41 ) / 10) * 100)/100;
        $scope.jupAgeYear = Math.round((( 100 * age / 4332.71 ) / 100) * 100)/100;
          if ( (age / 4332.71) > 1)
            nextJupBday = new Date(today + (( 1 - (( age / 4332.71 ) - ( parseInt( age / 4332.71 )))) * 4332.71 * 24 * 3600 * 1000 ));
          else
            nextJupBday = new Date(today + ( 1 - ( age / 4332.71 )) * 4332.71 * 24 * 3600 * 1000 );

            $scope.nextJupBday = dateFormat(nextJupBday, "dddd, mmmm dS, yyyy")
  //  Saturn
        $scope.satAgeDay = Math.round((( 10 * age / 0.45 ) / 10) * 100)/100;
        $scope.satAgeYear = Math.round((( 100 * age / 10759.5 ) / 100) * 100)/100;
          if ( (age / 10759.5) > 1)
            nextSatBday = new Date(today + (( 1 - (( age / 10759.5 ) - ( parseInt( age / 10759.5 )))) * 10759.5 * 24 * 3600 * 1000 ));
          else
            nextSatBday = new Date(today + ( 1 - ( age / 10759.5 )) * 10759.5 * 24 * 3600 * 1000 );

            $scope.nextSatBday = dateFormat(nextSatBday, "dddd, mmmm dS, yyyy")
  //  Uranus
        $scope.uraAgeDay = Math.round((( 10 * age / 0.72 ) / 10) * 100)/100;
        $scope.uraAgeYear = Math.round((( 100 * age / 30685 ) / 100) * 100)/100;
          if ( (age / 30685) > 1)
            nextUraBday = new Date(today + (( 1 - (( age / 30685 ) - ( parseInt( age / 30685 )))) * 30685 * 24 * 3600 * 1000 ));
          else
            nextUraBday = new Date(today + ( 1 - ( age / 30685 )) * 30685 * 24 * 3600 * 1000 );

            $scope.nextUraBday = dateFormat(nextUraBday, "dddd, mmmm dS, yyyy")

  //  Neptune
        $scope.nepAgeDay = Math.round((( 10 * age / 0.67 ) / 10) * 100)/100;
        $scope.nepAgeYear = Math.round((( 100 * age / 60190 ) / 100) * 100)/100;
          if ( (age / 60190) > 1)
            nextNepBday = new Date(today + (( 1 - (( age / 60190 ) - ( parseInt( age / 60190 )))) * 60190 * 24 * 3600 * 1000 ));
          else
            nextNepBday = new Date(today + ( 1 - ( age / 60190 )) * 60190 * 24 * 3600 * 1000 );

            $scope.nextNepBday = dateFormat(nextNepBday, "dddd, mmmm dS, yyyy")
  //  Pluto
        $scope.pluAgeDay = Math.round((( 10 * age / 6.39 ) / 10) * 100)/100;
        $scope.pluAgeYear = Math.round((( 1000 * age / 90800 ) / 1000) * 100)/100;
          if ( (age / 90800) > 1)
            nextPluBday = new Date(today + (( 1 - (( age / 90800 ) - ( parseInt( age / 90800 )))) * 90800 * 24 * 3600 * 1000 ));
          else
            nextPluBday = new Date(today + ( 1 - ( age / 90800 )) * 90800 * 24 * 3600 * 1000 );

            $scope.nextPluBday = dateFormat(nextPluBday, "dddd, mmmm dS, yyyy")
    }
  }
}