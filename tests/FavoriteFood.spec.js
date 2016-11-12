describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
			$filter = $injector.get('$filter');
	}));


	it('should filter on a favorite food', function() {
		var mockedList = [
			{name: 'Michael', favoriteFood: 'Chicken Wrap'},
			{name: 'Jordan', favoriteFood: 'Pizza'},
			{name: 'Barbara', favoriteFood: 'Chocolate'}];

		var results = $filter('favoriteFood')(mockedList, 'Pizza');
		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Jordan');
	});
});
