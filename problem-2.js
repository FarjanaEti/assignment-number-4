function sendNotification(email) {     
  if(email.includes('@')!==true){
    return 'Invalid Email'
  }  
  else{
     let userANDdomain = email.split('@') 
     let notification= userANDdomain[0]+' sent you an email from '+userANDdomain[1];
     return notification;                            
  }   
 }
 console.log(sendNotification('fahim234.hotmail.com'))
                    