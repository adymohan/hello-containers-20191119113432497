var productService = require("../services/product-service");

class ShippingController {
  constructor() {
    this.REGULAR_PRICE = 0.5;
    this.OVERNIGHT_PRICE = 5;
  }

  async getItemShipping(item) {
    var shippingAmount = await productService.getProductWeight(item.id)
    if (item.type.toLowerCase() === 'overnight') {
      return shippingAmount * this.OVERNIGHT_PRICE
    } else {
      return shippingAmount * this.REGULAR_PRICE
    }
  }
}

module.exports = ShippingController;
