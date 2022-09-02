/*     Business Logic     */

export function daysSince(today, born) {
  return((today-born)/86400000);  //1 Day = 86,400,000 milliseconds (ms)
} 

export function inMercuryYrs(ageDays){ //Takes a parameter containing the user's age in Earth-days, and returns their age in Mercury-years.  
  //1 solar year on Mercury = 87.6 Earth-Days. 
  let retval = ageDays/87.6; 
  //console.log("Age in Mercury-years (unrounded) =  " + retval); 
  return(Math.ceil(retval)); 
}

/*
export function inVenusYrs(ageDays){ //Takes a parameter containing the user's age in Earth-days, and returns their age in Venus-years. 
  //1 Solar Year on Venus = 226.3 Earth-Days. 
}

export function inMarsYrs(ageDays){ //Takes a parameter containing the user's age in Earth-days, and returns their age in Mars-years. 
  //1 Solar Year on Mars = 686.2 Earth-Days. 
}

export function inJuptierYrs(ageDays){ //Takes a parameter containing the user's age in Earth-days, and returns their age in Jupiter-years. 
  //1 Solar Year on Venus = 4328.9 Earth-Days. 
}
*/