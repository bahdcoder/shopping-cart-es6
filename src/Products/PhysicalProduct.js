const Product = require('./Product')

class PhysicalProduct extends Product {
    constructor(product) {
        super(product)

        this._shippingFrom = product.shippingFrom
        this.stock = product.stock 
    }

    get shippingFrom() {
        return this._shippingFrom
    }

    orderProduct(quantity) {
        this.stock -= quantity
    }
}

module.exports = PhysicalProduct