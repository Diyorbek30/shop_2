import {
	products,
	cart
} from "./modules/db.js";
const container = document.querySelector(".container");
const fr = document.querySelector("#fr");
const sc = document.querySelector("#sc");
const count = document.querySelector(".count");
const cartCont = document.querySelector(".cart");



count.innerHTML = cart.length
function reload(arr) {
	container.innerHTML = ""

	for (let item of arr) {
		let div = document.createElement("div");
		let top = document.createElement("div");
		let bottom = document.createElement("div");
		let img = document.createElement("img");
		let h3 = document.createElement("h3");
		let p = document.createElement("p");
		let button = document.createElement("button");

		div.classList.add("item");
		top.classList.add("top");
		
		if(cart.includes(item.id)) {
			button.classList.add("active");
		} else {
			button.classList.add("btn");
		}
		
		bottom.classList.add("bottom");

		img.src = item.image;
		h3.innerHTML = item.category;
		p.innerHTML = item.description;
		button.innerHTML = "В избранное";

		div.append(top, bottom);
		top.append(img);
		bottom.append(h3, p, button);
		container.append(div);

		// functions
		button.onclick = () => {
			if(!cart.includes(item.id)) {
				cart.push(item.id)
				count.innerHTML = cart.length
				reload(products)
				cartReload(create())
			} else {
				let idx = cart.indexOf(item.id)
				cart.splice(idx, 1)

				reload(products)
				count.innerHTML = cart.length
				cartReload(create())

			}
		}


	}
}
reload(products)

fr.onclick = () => {
	reload(products.slice(0,5));
};
sc.onclick = () => {
	reload(products);
};


function cartReload(arr) {

	cartCont.innerHTML = ""
	for(let item of arr) {
		let div = document.createElement('div')
		let left = document.createElement('div')
		let right = document.createElement('div')
		let counter = document.createElement('div')
		let img = document.createElement('img')
		let span = document.createElement('span')
		let price = document.createElement('span')
		let inc = document.createElement('button')
		let dec = document.createElement('button')
		let count2 = document.createElement('span')
		let del = document.createElement('img')


		div.classList.add('cartItem')
		left.classList.add('left')
		right.classList.add('right')
		span.classList.add('span_cart')
		counter.classList.add('counter')
		count2.classList.add('count')
		del.classList.add('del')
		img.classList.add('img')
		price.classList.add('price')
		let count = document.querySelector('.count')



		img.src = item.image
		del.src = 'data:image/png;base64,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'

		span.innerHTML = item.category
		price.innerHTML = item.price
		inc.innerHTML = '+'
		dec.innerHTML = '-'
		count2.innerHTML = 0
		del.innerHTML = 'x'
		let soc = 0

		div.append(left, right)
		left.append(img, span)
		counter.append(inc, count2, dec)
		right.append(price, counter, del)
		cartCont.append(div)

		del.onclick = () => {
			let idx = cart.indexOf(item.id)
				cart.splice(idx, 1)
				count.innerHTML = cart.length
				reload(products)
				cartReload(create())
		}

		inc.onclick = () => {
			soc++
			count2.innerHTML = soc
		}
		dec.onclick = () => {
			soc--
			count2.innerHTML = soc
			if (soc > 0) {
			}else {
				count2.innerHTML = '0'
			}
		}
		

	}
	
}
function create() {
	let temp = []
	for(let item of products) {
		for(let item2 of cart) {
			if(item.id === item2) {
				temp.push(item)
				
			}
		}
	}
	return temp
}
cartReload(create())