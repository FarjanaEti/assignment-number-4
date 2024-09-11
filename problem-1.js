function calculateTax(income, expenses) {
     if(income<=0 || expenses<=0 || expenses>income){
        return "Invalid Input"                     
     }          
     let remaining=income-expenses;
     let tax=remaining*0.2;
     return tax;              
 }
 const result=calculateTax(6000, -1500)
  console.log(result);                  