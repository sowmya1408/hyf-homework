class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	convertToCurrency(currency) {
		if (currency.toLowerCase() === 'dollars') {
			currency = this.price * 0.15;
			return currency;
		} else if (currency.toLowerCase() === 'indianrupees') {
			currency = this.price * 10.51;
			return currency;
		} else if (currency.toLowerCase() === 'euro') {
			currency = this.price * 0.13;
			return currency;
		}
		return this.price;
	}
}
const totalPrice = [];

class ShoppingCart {
	constructor(products) {
		this.products = products;
	}

	addProduct(product) {
		// Implement functionality here
		return this.products.push(product);
	}

	removeProduct(product) {
		// Implement functionality here
		const matchedIndex = this.products.indexOf(product);

		if (matchedIndex > -1) {
			this.products.splice(matchedIndex, 1);
		}
	}

	searchProduct(productName) {
		// Implement functionality here
		const filterProducts = this.products.filter(product => {
			if (product.name.includes(productName.name)) {
				return product;
			}
		});
		console.log(filterProducts);
	}

	getTotal() {
		// Implement functionality here
		let price = 0;
		this.products.forEach(product => {
			price += product.price;
		});
		totalPrice.push(price);
		console.log(totalPrice);
	}

	renderProducts() {
		// Implement functionality here
		const ul = document.querySelector('ul');
		ul.innerHTML = '';
		this.products.forEach(product => {
			const shoppingCartList = document.createElement('li');
			shoppingCartList.textContent = `${product.name}`;
			const para = document.querySelector('.paraTotal');
			para.textContent = 'Total';

			ul.appendChild(shoppingCartList);
			const shoppingUl = document.querySelector('.priceUl');
			const shoppingPriceLi = document.createElement('li');
			shoppingPriceLi.textContent = `${product.price}`;
			shoppingUl.appendChild(shoppingPriceLi);
			const para2 = document.querySelector('.paraPrice');
			para2.textContent = `${totalPrice[0]}`;
		});
	}

	getUser() {
		// Implement functionality here
		fetch('https://jsonplaceholder.typicode.com/users/1')
			.then(response => response.json())
			.then(data => console.log(data.name))
			.catch(err => console.log(err));
	}
}

const flatscreen = new Product('flat-screen', 5000);
console.log(flatscreen.convertToCurrency('dollars'));

const macBook = new Product('mac-book', 10000);
const iphone = new Product('iphone', 7000);
const phone = new Product('phone', 8000);
const appleWatch = new Product('apple-watch', 4600);
const products = [flatscreen, macBook, iphone, phone];
const shoppingCart = new ShoppingCart(products);
console.log(shoppingCart);
shoppingCart.addProduct(appleWatch);
shoppingCart.removeProduct(macBook);
shoppingCart.searchProduct(phone);
shoppingCart.getTotal();
shoppingCart.getUser();
shoppingCart.renderProducts();
// convert To currency from dkk
const plant = new Product('plant', 50);
console.log(plant.convertToCurrency('danishkrone'));
