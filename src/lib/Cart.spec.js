import { Cart } from './Cart';

describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should return 0 when getTotal() is eecuted in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quntity and price and receive the total amounth', () => {
    const item = {
      product: {
        name: 'Adidas shoes',
        price: 39989,
      },
      quantity: 2,
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(79978);
  });
});
