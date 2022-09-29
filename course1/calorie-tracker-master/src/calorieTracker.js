const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
   let weightLostInAMonth = 0;
   if(cycling <= 0 || running <= 0 || swimming <= 0 || extraCalorieInTake <= 0){
      return -1;
   }
   // write logic here 
   let calories = (((cycling * 2) + (running * 2) + (swimming * 2)) * 4) - (extraCalorieInTake * 30);

   weightLostInAMonth = calories / 1000;
   return weightLostInAMonth;
   
}
// console.log(calculateWeightLostInAMonth(500,300,400,100));
module.exports = calculateWeightLostInAMonth

//expect(calculateWeightLostInAMonth(500,300,400,100)).to.equal(6.6)