function storeProvision(input,input2){
    let productsAndPrices = {};
    for (let i = 0; i < input.length; i++) {  
        if(i % 2 === 0){
            productsAndPrices[input[i]] = Number(input[i+1]);
        } 
    }
    for (let x = 0; x < input2.length; x++) {
        if(x % 2 === 0){
            if(productsAndPrices.hasOwnProperty(input2[x])){
                productsAndPrices[input2[x]] +=Number(input2[x+1]);
            }else{
                productsAndPrices[input2[x]] = input2[x+1];
            }
        } 
    }
let entries = Object.entries(productsAndPrices)
for(let [product,quantity] of entries) 
    {
     console.log(`${product} -> ${quantity}`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )