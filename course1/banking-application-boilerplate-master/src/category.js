var category = function category(key) {
  
  // Write the Logic here
    if(key.toUpperCase() === 'PL'){
      return 'Personal Loan';
    }
    else if(key.toUpperCase() === 'VL'){
      return 'Vehicle Loan';
    }
    else if(key.toUpperCase() === 'EL'){
      return 'Education Loan';
    }
    else if(key.toUpperCase() === 'HL'){
      return 'Home Loan';
    }
  };
  
  module.exports = {
    category: category
  };