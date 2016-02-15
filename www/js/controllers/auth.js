'use strict';

app.controller('AuthCtrl', function(Auth, $state) {

	var auth = this;

	auth.login = function() {
		console.log('login cliked');

		return Auth.login().then(function(user) {
		$state.go('home');
	});
	};

auth.logout = function() {
Auth.logout();
};


});