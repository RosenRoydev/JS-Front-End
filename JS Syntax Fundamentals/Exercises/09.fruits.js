function fruits(fruitType, grams, price){
let weightInKg = grams/1000;
let totalPrice = weightInKg * price;
console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`)
}
fruits('orange', 2500, 1.80)