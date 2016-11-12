describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should remove all vowels from the string', function() {
		expect(removeAllVowels('this is a very long string with a lot of vowels')).toEqual('ths s  vry lng strng wth  lt f vwls');
	});

});
