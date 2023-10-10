class CoffeeShop {
	constructor (name, menu, orders) {
		this.name = name
		this.menu = menu
		this.orders = orders
	}

	shopName() {
		return `${this.name}`
	}

	addOrder(name) {
		if( this.menu.find( el => el.item === name ) ){
			this.orders.push(name)
			return `Order added!`
		}else{
			return `This item is currently unavailable!`
		}
			
	}

	fulfillOrder() {
       if( this.orders.length > 0 ){
		 let order = this.orders.shift()
		 return `The ${order} is ready!`
	   }else{
		return `All orders have been fulfilled!`
	   }
	}

	listOrders(){
		if( this.orders.length > 0 ) return this.orders
		else return []
	}

	dueAmount(){
		let amount = 0;
		this.orders.forEach(order => {
			this.menu.forEach( menuItem => {
				if( menuItem.item === order ){
					amount += menuItem.price
				}
			} )
		});

		return parseInt(amount)
	}
	
	cheapestItem(){
		return this.menu.reduce( (a, b) => a.price<b.price ? a : b ).item
	}

	drinksOnly(){
		return this.menu.filter( el => el.type === 'drink' ).map( el2 => el2.item )
	}

	foodOnly(){
		return this.menu.filter( el => el.type === 'food' ).map( el2 => el2.item )
	}
}


const tcs = new CoffeeShop('lacuna',
								[
									{
										item: 'cinnamon roll',
										type: 'food',
										price: 1,
									},
									{
										item: 'iced coffee',
										type: 'drink',
										price: 2,
									}
								],
								[]
							 );

		
console.log( tcs.addOrder("cinnamon roll") ) //➞  "Order added!"
console.log( tcs.addOrder("iced coffee") )//➞ "Order added!"
console.log( tcs.orders) //➞ ["cinnamon roll", "iced coffee"]