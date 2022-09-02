/*     Business Logic     */
export function daysSince(today, born) {
  return((today-born)/86400000);  //1 Day = 86,400,000 milliseconds (ms)
} 

export function inMercuryYrs(ageDays){ //Takes a parameter containing the user's age in Earth-days, and returns their age in Mercury-years.  
  //1 solar year on Mercury = 87.6 Earth-Days. 
  let retval = ageDays/87.6; 
  console.log("Age in Mercury-years (unrounded) =  " + retval); 
  console.log("Age in Mercury-years after application of rounding by '.toFixed(1)' =  " + retval.toFixed(1));
  return Number((retval).toFixed(1)); 
}

export function inVenusYrs(ageDays){ //Takes a parameter containing the user's age in Earth-days, and returns their age in Venus-years. 
  //1 Solar Year on Venus = 226.3 Earth-Days. 
  console.log("Age in Venus-years after application of rounding by '.toFixed(1)' =  " + (ageDays/226.3).toFixed(1));
  return Number((ageDays/226.3).toFixed(1));
}

export function inMarsYrs(ageDays){ //Takes a parameter containing the user's age in Earth-days, and returns their age in Mars-years. 
  //1 Solar Year on Mars = 686.2 Earth-Days. 
  console.log("Age in Mars-years after application of rounding by '.toFixed(2)' =  " + (ageDays/686.2).toFixed(2));
  return Number((ageDays/686.2).toFixed(2)); 
}

export function inJupiterYrs(ageDays){ //Takes a parameter containing the user's age in Earth-days, and returns their age in Jupiter-years. 
  //1 Solar Year on Jupiter = 4328.9 Earth-Days. 
  console.log("Age in Jupiter-years after application of rounding by '.toFixed(2)' =  " + (ageDays/4328.9).toFixed(2));
  return Number((ageDays/4328.9).toFixed(2));
}

/*
export function yearsLeft(currEarthAge, lifeExpectancy){  //Compares user's current age to what their demographic's average life expectancy would be on Mercury, Venus, Mars and/or Jupiter. (This is based solely on the result of comparing two age calculations). Then, tell's user how long they have left to live or, if their current age exceeds the calculated expectancy, how far past (for a given planet) they are [positive number, not in Earth-years but that of the given planet]. 
}
*/