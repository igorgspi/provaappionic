'use strict';


app.controller('TuttiCtrl', function($scope,Auth) {


	$scope.tutti = Auth.tuttiUtenti();


});


