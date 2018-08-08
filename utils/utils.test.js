const utils = require('./utils');

it('should add two numbers', () => {
	let result = utils.add(55,10);

	if (result !== 65) {
		throw new Error(`Expected 65, but got ${result}.`);	
	}
	
});

it('should square a number', () => {
	let result = utils.square(5);

	if (result !== 25) {
		throw new Error(`Expected 25, but got ${result}.`);
	}

});