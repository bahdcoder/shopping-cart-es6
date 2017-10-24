class Product {

    constructor(product) {
        this.id = Math.random().toString(36).substring(7)
        this.name = product.name 
        this.price = product.price 
    }

}


module.exports = Product 