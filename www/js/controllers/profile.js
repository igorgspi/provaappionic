'use strict';

app.controller('ProfileCtrl', function($scope, profile, about, images) {


	$scope.currentUser = profile;
	$scope.about = about;
	$scope.images = images;
});