const swapDigits = (number)=>{
    if(number < 0){
        return 0;
    }
    else if(number < 10){
        return number;
    }

    let swappedNumber = 0
    //write logic here
    let numStr = "" + number;
    let resultStr = "";

    if(numStr.length % 2 === 0 && numStr.charAt(0) != '-'){
        for(let i = 0; i < numStr.length; i += 2){
            resultStr += numStr.charAt(i+1) + numStr.charAt(i);
        }
    }
    else{
        resultStr += numStr.charAt(0);
        for(let i = 1; i < numStr.length; i += 2){
            resultStr += numStr.charAt(i+1) + numStr.charAt(i);
        }
    }
    swappedNumber = parseInt(resultStr, 10);
    
    
    return swappedNumber;
}
// console.log(swapDigits(123455))
// console.log(swapDigits(123))
// console.log(swapDigits(0))
// console.log(swapDigits(-512364783))

module.exports = swapDigits
// expect(swapDigits(123455)).to.equal(214355)
// expect(swapDigits(123)).to.equal(132)
//expect(swapDigits(0)).to.equal(0)
// expect(swapDigits(-512364783)).to.equal(0)