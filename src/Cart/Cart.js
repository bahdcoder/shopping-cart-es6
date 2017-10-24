class Cart {
    constructor(catalog) {
        this.items = {}
        this.catalog = catalog 
    }

    addItem(productId, quantity = 1) {
        this.items[productId] = quantity
    }

    removeItem(productId, quantity = 1) {
        quantity > this.items[productId] ? delete this.items[productId] : this.items[productId] -= quantity 
    }

    productExistsInCatalog(id) {
        return this.catalog.products.findIndex(pdt => {
            return pdt.id == id 
        }) == -1 ? false : true 
    }

    total() {
        let total = 0 
        for(let pdtId in this.items) {
            total += this.catalog.products.find(pdt => {
                return pdt.id == pdtId 
            }).price * this.items[pdtId]
        }   

        return total 
    }
}

module.exports = Cart 