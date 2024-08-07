function solve() {
   const addButtonEl = document.getElementsByClassName('add-product');
   const textArea = document.getElementsByTagName('textarea')[0];
   const checkoutEl = document.getElementsByClassName('checkout')[0];
   const allButtons = document.getElementsByTagName('button');
   let products = {};
   
   Array.from(addButtonEl).forEach(button => {
      button.addEventListener('click', (e)=>{
        const productInfoEl = e.currentTarget.parentElement.parentElement ;
        let price = productInfoEl.getElementsByClassName('product-line-price')[0].textContent;
        price = Number(price).toFixed(2)
        const productName = productInfoEl.getElementsByClassName('product-title')[0].textContent;
        let result = `Added ${productName} for ${Number(price).toFixed(2)} to the cart.\n`
        textArea.removeAttribute('disabled') ;
        textArea.value += result;
        if(!products[productName]){
         products[productName] = Number(price)
        }else{
         products[productName] += Number(price)
        }
      })
   });
   checkoutEl.addEventListener('click', (e) =>{
      let entries = Object.entries(products)
      let allProducts = [];
      let totalPrice = 0
       for (const product of entries) {
         allProducts.push(product[0])
         totalPrice += product[1];
       }
       let finalResult = `You bought ${allProducts.join(', ')} for ${totalPrice.toFixed(2)}.`
       textArea.value += finalResult
       Array.from(allButtons).forEach( b => b.setAttribute('disabled',true));
       
   })  
}