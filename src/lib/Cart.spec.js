import { Cart } from './Cart';

describe('Cart', () => {
	let cart;
	const product = {
		name: 'Adidas shoes',
		price: 39989,
	};

	const product2 = {
		name: 'Adidas shoes for woman',
		price: 29989,
	};

	beforeEach(() => {
		cart = new Cart();
	});

	describe('getTotal()', () => {
		it('should return 0 when getTotal() is eecuted in a newly created instance', () => {
			expect(cart.getTotal().getAmount()).toEqual(0);
		});

		it('should multiply quntity and price and receive the total amounth', () => {
			const item = {
				product,
				quantity: 2,
			};

			cart.add(item);
			expect(cart.getTotal().getAmount()).toEqual(79978);
		});

		it('should ensure no more than one product exists at a time', () => {
			cart.add({
				product,
				quantity: 2,
			});

			cart.add({
				product,
				quantity: 1,
			});

			expect(cart.getTotal().getAmount()).toEqual(39989);
		});

		it('should update total when a product gets included and then remove one', () => {
			cart.add({
				product,
				quantity: 2,
			});
			cart.add({
				product: product2,
				quantity: 1,
			});

			expect(cart.getTotal().getAmount()).toEqual(109967);

			cart.remove(product);

			expect(cart.getTotal().getAmount()).toEqual(29989);
		});
	});

	describe('checkout()', () => {
		it('should return an object with the total and a list of items', () => {
			cart.add({
				product,
				quantity: 2,
			});

			cart.add({
				product: product2,
				quantity: 1,
			});

			expect(cart.checkout()).toMatchSnapshot();
		});
	});

	it('should reset cart when checkout() is called', () => {
		cart.add({
			product,
			quantity: 2,
		});

		cart.add({
			product: product2,
			quantity: 1,
		});

		cart.checkout();

		expect(cart.getTotal().getAmount()).toEqual(0);
	});

	it('should return an object with the total when summary() is called', () => {
		cart.add({
			product,
			quantity: 2,
		});

		cart.add({
			product: product2,
			quantity: 1,
		});

		expect(cart.summary()).toMatchSnapshot();
		expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
	});

	describe('special conditions', () => {
		it('should apply percentage discount when quantity above minimum is passed', () => {
			const condition = {
				percentage: 30,
				minimum: 2,
			};

			cart.add({
				product,
				condition,
				quantity: 3,
			});

			expect(cart.getTotal().getAmount()).toBe(83977);
		});
	});
});
