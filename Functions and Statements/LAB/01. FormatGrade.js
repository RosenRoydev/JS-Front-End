function solve(grade){
    let result = '';
    if(grade < 3){
        grade = 2
        console.log(`Fail (${grade})`);
    }else if(grade < 3.50){
        console.log(`Poor (${grade.toFixed(2)})`);
    }
    else if(grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`);
    }else if(grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`);
    }else if(grade >= 5.50){
        console.log(`Excellent (${grade.toFixed(2)})`);
    }   
}
 solve(4.50)