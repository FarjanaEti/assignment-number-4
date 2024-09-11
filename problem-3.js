function checkDigitsInName(name) {
      if(typeof name!== 'string') {
          return 'Invalid Input'                    
      }   
      let number="1234567890"   
  for(let word of name){
    if(number.includes(word)){
       return 'true';
    }
      }
        return 'false';      
}
  console.log(checkDigitsInName(["Raj"]) )                 

  
   
  