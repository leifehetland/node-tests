const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
	let result = utils.add(55,10);

	expect(result).toBe(65);
	expect(result).toBeA('number');
	// if (result !== 65) {
	// 	throw new Error(`Expected 65, but got ${result}.`);	
	// }
	
});

it('should async add two numbers', (done) => {
	utils.asyncSquare(5, (result) => {
		expect(result).toBeA('number').toBe(25);
		done();
	});
});

it('should async square two numbers', (done) => {
	utils.asyncAdd(10, 3, (sum) => {
		expect(sum).toBeA('number').toBe(13);
		done();
	});
});

it('should square a number', () => {
	let result = utils.square(5);

	expect(result).toBe(25).toBeA('number');
	// if (result !== 25) {
	// 	throw new Error(`Expected 25, but got ${result}.`);
	// }
});

it('should expect some values', () => {
	// expect({ name: 'Leif' }).toBe({ name: 'Leif' });
	expect({ name: 'Leif' }).toEqual({ name: 'Leif' });
	expect({ name: 'Leif' }).toNotEqual({ name: 'leif' });
	expect(['a','b','c']).toInclude('c');
	expect({
		name: 'Leif',
		age: 28
	}).toInclude({age: 28});
});

it('should verify first and last names are set', () => {

	let user = {
		location: 'Georgia',
		age: 28
	};
	let response = utils.setName(user, 'Leif Hetland');

	// expect({ name: 'Leif' }).toBe({ name: 'Leif' });
	expect(user).toEqual(response);
	expect(response).toInclude({ age: 28 });
	expect(response).toInclude({ firstName: 'Leif', lastName: 'Hetland' });
});