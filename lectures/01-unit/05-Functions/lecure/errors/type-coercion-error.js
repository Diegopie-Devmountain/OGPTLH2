function getSubtotalFromOrderForm() {
  // Simulates getting a subtotal from an order form. (HTML forms always return strings)
  return '20';
}

const shippingCost = 3.75;
const subtotal = getSubtotalFromOrderForm();

const totalIncludeShipping = subtotal + shippingCost;
console.log("Your total including shipping is", totalIncludeShipping);