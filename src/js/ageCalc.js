/*     Business Logic     */
export default class ageCalc{ 
  constructor(today, born, demographicLifeEx) {
    this.currDay = today; 
    this.birthday = born;
    this.currAge = this.daysSince(); //Age in Earth-days
    this.earthLifeEx = demographicLifeEx * 365;  //Reminder-for-self: 'demographicLifeEx' set to 78.8 [Earth-Years].
  }

  daysSince() {
    return((this.currDay-this.birthday)/86400000);  //1 Earth-Day = 86,400,000 milliseconds (ms)
  } 

  inMercuryYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Mercury-years.  
    //1 Solar Year on Mercury = 87.6 Earth-Days. 
    this.retval = this.currAge/87.6; 
    console.log("Age in Mercury-years (unrounded) =  " + this.retval); 
    console.log("Age in Mercury-years after application of rounding by '.toFixed(1)' =  " + this.retval.toFixed(1));
    return Number((this.retval).toFixed(1)); 
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

  yearsLeft(givenPlanet){  //Compares user's current age to what their demographic's average life expectancy would be on a given 'planet': Mercury, Venus, Mars or Jupiter (user's choice). This is based solely on the result of comparing two age calculations.   Then, tells user how long they have left to live OR, if their current age exceeds the calculated life expectancy, how far past the average they are [positive number]. 
    this.planet = givenPlanet; 
    let lifeExCalcd = (this.earthLifeEx/87.6).toFixed(2);  //
    return Number(lifeExCalcd); 
  }
}