function calculateFinalScore(obj) {
        if(typeof obj!== 'object') {
         return 'Invalid Input'                    
          }                   
          let score=0;
          const farmer=true;
        if( typeof obj.name === 'string' && 
            typeof obj.testScore === 'number' && (obj.testScore<=50) &&
           typeof obj.schoolGrade === 'number' && (obj.schoolGrade<=30) &&
            typeof obj.isFFamily === 'boolean' && obj.isFFamily === farmer)
          {
           score=obj.testScore+obj.schoolGrade+20;    
           }  
//            if(obj.isFFamily === farmer){
//             score=score+20;             
//              } 
           if(score>=80){
             return 'true';                 
           }
           else{
            return 'false';
           }
                                                         
 }
 console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false  }

 ))
                    