function calculateOrder(product,quantity){
    let price = 0;
    let totalPrice = 0;
    if(product === 'coffee'){
        price = 1.50;
        totalPrice = quantity * price;
        console.log(totalPrice.toFixed(2));
    }else if(product === 'water'){
        price = 1;
        totalPrice = quantity * price;
        console.log(totalPrice.toFixed(2));
    }else if(product === 'coke'){
        price = 1.40;
        totalPrice = quantity * price;
        console.log(totalPrice.toFixed(2));
    }else if(product === 'snacks'){
        price = 2;
        totalPrice = quantity * price
        console.log(totalPrice.toFixed(2));
    }
}
calculateOrder("coffee", 2)