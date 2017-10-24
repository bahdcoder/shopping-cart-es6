const Cart = require('./Cart/Cart')
const Catalog = require('./Catalog/Catalog')
const DigitalProduct = require('./Products/DigitalProduct')
const PhysicalProduct = require('./Products/PhysicalProduct')

/**
 * Very simple implementation of a shopping cart 
 */

/**
 * Products come in two kinds; Digital and Physical. They have similar properties, except
 * the physical ones have stock and shipping address, while the digital have downloadLinks
 */

/**
 * Create some products 
 */
 let digitalProduct = new DigitalProduct({
    name: 'Lucky Dube Reggae Album 1',
    price: 69,
    downloadLink: 'https://github.com'
 })

 let phycicalProduct = new PhysicalProduct({
     name: 'Christiano Ronaldo Football shirts',
     price: 299,
     shippingFrom: 'Spain',
     stock: 12000
 })


 /**
  * There is a simple catalog acting as a products repository
  */

 /**
  * The products database
  */
let catalog = new Catalog([
    digitalProduct,
    phycicalProduct
])


/**
 * The shopping cart has access to the products repository
 */
let cart = new Cart(catalog)

cart.addItem(phycicalProduct.id, 10)
cart.addItem(digitalProduct.id)
console.log(cart.total())

