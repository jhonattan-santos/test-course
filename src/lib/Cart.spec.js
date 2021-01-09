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

	it('should return 0 when getTotal() is eecuted in a newly created instance', () => {
		expect(cart.getTotal()).toEqual(0);
	});

	it('should multiply quntity and price and receive the total amounth', () => {
		const item = {
			product,
			quantity: 2,
		};

		cart.add(item);
		expect(cart.getTotal()).toEqual(79978);
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

		expect(cart.getTotal()).toEqual(39989);
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

		expect(cart.getTotal()).toEqual(109967);

		cart.remove(product);

		expect(cart.getTotal()).toEqual(29989);
	});
});
