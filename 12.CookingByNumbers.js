function cookingWithNumbers(num, par1, par2, par3, par4, par5){
    num = Number(num);
    switch (par1){
        case 'chop':
            num /=2;
            break;
        case 'dice':
            num = Math.sqrt(num)
            break;
        case 'spice':
            num += 1;
            break;
        case 'bake':
            num *= 3;
            break; // <-- Missing break
        case 'fillet':
            num *= 0.8;
            break;
    }
    console.log(`${num}`)
    let num1 = num;
    switch (par2){
        case 'chop':
            num1 /=2;
            break
        case 'dice':
            num1 = Math.sqrt(num1)
            break;
        case 'spice':
            num1 += 1;
            break;
        case 'bake':
            num1 *= 3;
            break; // <-- Missing break
        case 'fillet':
            num1 *= 0.8;
            break;
    }
    console.log(`${num1}`)
    let num2 = num1;
    switch (par3){
        case 'chop':
            num2 /=2;
            break;
        case 'dice':
            num2 = Math.sqrt(num2)
            break;
        case 'spice':
            num2 += 1;
            break;
        case 'bake':
            num2 *= 3;
            break; // <-- Missing break
        case 'fillet':
            num2 *= 0.8;
            break;
    }
    console.log(`${num2}`)
    let num3 = num2;
    switch (par4){
        case 'chop':
            num3 /=2;
            break;
        case 'dice':
            num3 = Math.sqrt(num3)
            break;
        case 'spice':
            num3 += 1;
            break;
        case 'bake':
            num3 *= 3;
            break; // <-- Missing break
        case 'fillet':
            num3 *= 0.8;
            break;
    }
    console.log(`${num3}`)
    let num4 = num3;
    switch(par5){
        case 'chop':
            num4 /=2;
            break;
        case 'dice':
            num4 = Math.sqrt(num4)
            break;
        case 'spice':
            num4 += 1;
            break;
        case 'bake':
            num4 *= 3;
            break; // <-- Missing break
        case 'fillet':
            num4 *= 0.8;
            break;
    }
    
    console.log(`${num4}`)
}

cookingWithNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')