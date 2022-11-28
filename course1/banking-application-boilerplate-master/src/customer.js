var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      let originalCustomer = true;
      for(let i = 0; i < customerList.length; i++){
            if(customerList[i][0] === CustomerId){
                  originalCustomer = false;
            }
      }
      if(originalCustomer){
            customerList.push([
                  CustomerId,
                  CustomerName,
                  CustomerAge,
                  CustomerAddress,
                  CustomerContactNumber,
                  Category,
            ]);
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      for(let i = 0; i < customerList.length; i++){
            if(customerList[i][0] === CustomerId){
                  customerList[i][1] = CustomerName;
                  customerList[i][2] = CustomerAge;
                  customerList[i][3] = CustomerAddress;
                  customerList[i][4] = CustomerContactNumber;
                  customerList[i][5] = Category;
            }
      }
}

const getAllCustomers=()=>{
  // Write the Logic here
  console.log(customerList);
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}