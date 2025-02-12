// THE CONTEXT
// In the provided code, there's an array named shoppingCart representing a user's shopping cart with items containing 'name', 'price', and 'quantity' properties.
// The current code calculates the total price of items in the shopping cart without using functions.

// THE PROBLEM
// - This code works only for this specific shopping cart. But we want to be able to compute the total price for any shopping cart

// YOUR JOB
// Your task is to refactor the code by extracting the logic for calculating the total price into a reusable function.
// Write a function named calculateTotalPrice that takes the shoppingCart array as a parameter and returns the total price.

// TO CHECK
// Check that your code still produce the same result
// Check that your code can work with myny shopping carts

// Calculate total price without using functions
function calculatesTotalPrice(cart){
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price * item.quantity;
  }
  console.log("Total price:", totalPrice);
}

let shoppingCart = [
  { name: "Apples", price: 2.5, quantity: 3 },
  { name: "Bananas", price: 1.5, quantity: 2 },
  { name: "Oranges", price: 3, quantity: 1 },
];
 let shoppingCart1 = [
   { name: "Socks", price: 2, quantity: 3 },
   { name: "Shoes", price: 25, quantity: 1 },
   { name: "Underwear", price: 4, quantity: 2 },
];
 let shoppingCart2 = [
   { name: "Book", price: 0.5, quantity: 10 },
   { name: "Pencil", price: 1, quantity: 5 },
   { name: "Pen", price: 0.25, quantity: 15 },
 ];

calculatesTotalPrice(shoppingCart);
calculatesTotalPrice(shoppingCart1);
calculatesTotalPrice(shoppingCart2);