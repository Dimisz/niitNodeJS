
const PerformanceCalculator=(runs,balls)=>{
      // Write the Logic here
      if(runs > 100 && balls < 50){
            return (Math.round((runs / balls) * 120) / 100);
      }
      else if(runs > 50 && balls < 20){
            return (Math.round((runs / balls) * 110) / 100);
      }
      else if(runs > 30 && balls < 15){
            return (Math.round((runs / balls) * 101) / 100);
      }
      else {
            return (Math.round((runs / balls) * 100) / 100);
      }

}

module.exports={PerformanceCalculator}
