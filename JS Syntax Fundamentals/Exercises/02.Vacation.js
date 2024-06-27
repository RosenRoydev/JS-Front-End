function vacation (numbersOfPeople, typeGroup, day){
    let price = 0
    let totalPrice= 0
    switch(typeGroup){
        case "Students":
            switch(day){
                case"Friday":
                 price = 8.45
                 totalPrice = price*numbersOfPeople
                 if(numbersOfPeople >= 30){
                    totalPrice*=0.85
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                 }else{
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                 }
                 
                 
                break;
                case"Saturday":
                 price=9.80
                 totalPrice = numbersOfPeople * price
                 if(numbersOfPeople >= 30){
                    totalPrice*=0.85
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                 }else{
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                 }
                 
                break;
                case"Sunday":
                price=10.46
                totalPrice = numbersOfPeople * price
                if(numbersOfPeople >= 30){
                    totalPrice*=0.85
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                 }
                 else{
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                 }
                 
                break;
            }
            break;
            
        case "Business":
            switch(day){
                case"Friday":
                price = 10.9
                totalPrice = numbersOfPeople * price
                if(numbersOfPeople >= 100){
                    numbersOfPeople = numbersOfPeople-10
                    totalPrice = numbersOfPeople * price
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                }else{
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                     }
                break;
                case"Saturday":
                price = 15.60
                totalPrice = numbersOfPeople * price
                if(numbersOfPeople >= 100){
                    numbersOfPeople = numbersOfPeople-10
                    totalPrice = numbersOfPeople * price
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                }else{
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                     }
                break;
                case"Sunday":
                price = 16
                totalPrice = numbersOfPeople * price
                if(numbersOfPeople >= 100){
                    numbersOfPeople = numbersOfPeople-10
                    totalPrice = numbersOfPeople *price
                    console.log(`Total price: ${totalPrice.toFixed(2)}`)
                }else{
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                     }
                
                break;
            }
            break;
           
            
            case "Regular":
                switch(day){
                    case"Friday":
                    price = 15
                    totalPrice = numbersOfPeople * price
                    if(numbersOfPeople >= 10 && numbersOfPeople <= 20){
                        totalPrice*=0.95
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                    }
                    else{
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                    }
                    break;
                    case"Saturday":
                    price = 20
                    totalPrice = numbersOfPeople * price
                    if(numbersOfPeople >= 10 && numbersOfPeople<=20){
                        totalPrice*=0.95
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                    }
                    else{
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                    }
                    break;
                    case"Sunday":
                    price = 22.50
                    totalPrice = numbersOfPeople * price
                    if(numbersOfPeople >= 10 && numbersOfPeople<=20){
                        totalPrice*=0.95
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                    }
                    else{
                        console.log(`Total price: ${totalPrice.toFixed(2)}`)
                    }
                    break;
                }
            break;

    }
}
vacation(100,
    "Business",
    "Saturday"
    )