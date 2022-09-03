/*     Business Logic     */
export default class ageCalc{ 
  constructor(today, born, demographicLifeEx) {
    this.currDay = today; 
    this.birthday = born; 
    this.currAge = this.daysSince(); //Age in Earth-days
    this.earthLifeEx = demographicLifeEx; 
  }

  daysSince() {
    return((this.currDay-this.birthday)/86400000);  //1 Earth-Day = 86,400,000 milliseconds (ms)
  } 

  inMercuryYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Mercury-years.  
    //1 Solar Year on Mercury = 87.6 Earth-Days. 
    let retval = this.currAge/87.6; 
    console.log("Age in Mercury-years (unrounded) =  " + retval); 
    console.log("Age in Mercury-years after application of rounding by '.toFixed(1)' =  " + retval.toFixed(1));
    return Number((retval).toFixed(1)); 
  }

  inVenusYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Venus-years. 
    //1 Solar Year on Venus = 226.3 Earth-Days. 
    console.log("Age in Venus-years after application of rounding by '.toFixed(1)' =  " + (this.currAge/226.3).toFixed(1));
    return Number((this.currAge/226.3).toFixed(1));
  }

  inMarsYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Mars-years. 
    //1 Solar Year on Mars = 686.2 Earth-Days. 
    console.log("Age in Mars-years after application of rounding by '.toFixed(2)' =  " + (this.currAge/686.2).toFixed(2));
    return Number((this.currAge/686.2).toFixed(2)); 
  }

  inJupiterYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Jupiter-years. 
    //1 Solar Year on Jupiter = 4328.9 Earth-Days. 
    console.log("Age in Jupiter-years after application of rounding by '.toFixed(2)' =  " + (this.currAge/4328.9).toFixed(2));
    return Number((this.currAge/4328.9).toFixed(2));
  }

  //Compares user's current age to what their demographic's average life expectancy would be on a given 'planet': Mercury, Venus, Mars or Jupiter (user's choice). This is based solely on the result of comparing two age calculations.   Then, tells user how long they have left to live OR, if their current age exceeds the calculated life expectancy, how far past the average they are [positive number].
  yearsLeftMercury(userAge, lifeEx) {  
    let lifeExpect = Number((lifeEx/87.6).toFixed(1));  //Calculated average life expectancy of User (based on Earth demographics) on Mercury in Mercury-years. 
    let retval = lifeExpect - userAge;  //Subtracts user's age (in Mercury-years) from total average life expectancy (also in Mercury-years). 
    console.log("Time left on Mercury (in Mercury-years):  " + retval); 
    if(retval < 0) { //[Any tests that meet this condition should be expecting a string value]
      return ("You've surpassed the average life expectancy of your demographic on Mercury by  " + Math.abs(retval) + " Mercury-years!"); 
    } else {
      return retval; 
    } 
  }

  yearsLeftVenus(userAge, lifeEx) {  
    console.log("RLE in Earth-years =  " + lifeEx); 
    let lifeExNeo = Number((lifeEx/4328.9).toFixed(2));  //Calculated remaining life expectancy of User on Venus (in Venus-years). 
    console.log("RLE in Venus-years =  " + lifeExNeo);
    let retval = lifeExNeo - userAge;  //Subtracts user's age from 'lifeExNeo' (both in Venus-years). 
    console.log("Time left on Venus (in Venus-years), unrounded:  " + retval); 
    if(retval < 0) { //[Any tests that meet this condition should be expecting a string value]
      return ("You've surpassed the remaining life expectancy of your demographic on Venus by  " + Number(Math.abs(retval).toFixed(2)) + " Venus-years!"); 
    } else {
      return Number(retval.toFixed(2)); 
    } 
  }

  yearsLeftMars(userAge, lifeEx) {  
    console.log("RLE in Earth-Years =  " + lifeEx); 
    let lifeExNeo = Number((lifeEx/686.2).toFixed(2));   //Calculated remaining life expectancy of User on Mercury (in Mercury-years). 
    console.log("RLE in Mars-Years =  " + lifeExNeo);
    let retval = lifeExNeo - userAge;  //Subtracts user's age from 'lifeExNeo' (both in Mercury-years). 
    console.log("Time left on Mars (in Mars-years), unrounded:  " + retval); 
    if(retval < 0) { //[Any tests that meet this condition should be expecting a string value]
      return ("You've surpassed the average life expectancy of your demographic on Mars by  " + Number(Math.abs(retval).toFixed(2)) + " Mars-years!"); 
    } else {
      return Number(retval.toFixed(2));  
    } 
  }

  yearsLeftJupiter(userAge, lifeEx){  
    console.log("RLE in Earth-Years =  " + lifeEx);
    let lifeExNeo = Number((lifeEx/4328.9).toFixed(2));  //Calculated remaining life expectancy of User on Jupiter (in Jupiter-years). 
    console.log("RLE in Jupiter-Years =  " + lifeExNeo);
    let retval = lifeExNeo - userAge;  //Subtracts user's age from 'lifeExNeo' (both in Jupiter-years). 
    console.log("Time left on Jupiter (in Jupiter-years), unrounded:  " + retval); 
    if(retval < 0){ //[Any tests that meet this condition should be expecting a string value]
      return ("Congrats! You've surpassed the average life expectancy of your demographic on Jupiter by  " + Number(Math.abs(retval).toFixed(2)) + " Jupiter-years!"); 
    }else{
      return Number(retval.toFixed(2));
    } 
  }

  yearsLeftPlanet(userAge, lifeEx, planetName) {  
    //'Earth-years to [planetName]-years conversion' -- Divisor values
    let earthToMcy = 87.6; 
    let earthToVns = 226.3; 
    let earthToMars = 686.2; 
    let earthToJpr = 4328.9; 
    
    //Other variables
    let lifeExNeo;  //Calculated remaining life expectancy of User on ['planetName'] (in ['planetName']-years).
    let retval;

    console.log("RLE in Earth-Years =  " + lifeEx); 
    if(planetName === "Mercury") {
      lifeExNeo = Number((lifeEx/earthToMcy).toFixed(2));  
      console.log("RLE in Mercury-years =  " + lifeExNeo); 
    } else if(planetName === "Venus") {
      lifeExNeo = Number((lifeEx/earthToVns).toFixed(2));  
      console.log("RLE in Venus-years =  " + lifeExNeo); 
    } else if(planetName === "Mars") {
      lifeExNeo = Number((lifeEx/earthToMars).toFixed(2));   
      console.log("RLE in Mars-years =  " + lifeExNeo); 
    } else {
      lifeExNeo = Number((lifeEx/earthToJpr).toFixed(2));  
      console.log("RLE in Jupiter-years =  " + lifeExNeo); 
    }
    
    retval = lifeExNeo - userAge;  //Subtracts user's age from 'lifeExNeo' (both in ['planetName']-years), to see if userAge > lifeExNeo.  (If so, retval is a -#) 
    console.log("Time left on Jupiter (in Jupiter-years), unrounded:  " + retval); 
    if(retval < 0) { //[Any tests that meet this condition should be expecting a string value]
      let yearsPast = Number(Math.abs(retval).toFixed(2));  //Saves number of ['planetName']-years past the calculated RLE the user is. 
      return (`Congrats! Your age indicates you've lived longer than the calculated RLE for your demographic on ${planetName} by ${yearsPast} ${planetName}-years!`); 
    } else {
      return Number(retval.toFixed(2)); 
    } 
  }
}
