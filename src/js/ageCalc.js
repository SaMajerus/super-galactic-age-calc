export function daysSince(today, born) {
  let msSince = today-born; 
  let msToDays = msSince / 86400000;  //1 Day = 86,400,000 milliseconds (ms)
  return(msToDays); 
}