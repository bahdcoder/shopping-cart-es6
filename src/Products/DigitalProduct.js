const Product = require('./Product')

class DigitalProduct extends Product {
    constructor(product) {
        super(product)

        this._downloadLink = product.downloadLink
    }

    get downloadLink() {
        return this._downloadLink
    }
}

module.exports = DigitalProduct