'use strict';

app.controller('SettingCtrl', function($scope, Auth, $ionicPopup) {



$scope.maxAge = 25;
$scope.men=true;
$scope.women = false;

$scope.changeMaxAge = function() {


};

$scope.selectMan = function() {


};


$scope.selectWomen = function() {


};


$scope.logout = function() {
	$ionicPopup.confirm({
		title: 'Logout',
		template:'Do you want to logout?'
	})
	.then(function(res) {
		if (res) {
			Auth.logout();
		}
	});

};



});