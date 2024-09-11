function  waitingTime(waitingTimes  , serialNumber) {
  if(!Array.isArray(waitingTimes) || typeof serialNumber !=='number' || serialNumber < waitingTimes.length){
  return 'Invalid Input'
  }                                          
    let personAhed=serialNumber-1;
  let finishedInterview=waitingTimes.length;
  let avg=0,sum=0;
  for(let time of waitingTimes){
      sum=sum+time;
     avg=Math.round (sum/finishedInterview);                      
  }
  let personRemaining=personAhed-finishedInterview;
  let time= avg*personRemaining;
    return time;                      
  }
   console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10) )              