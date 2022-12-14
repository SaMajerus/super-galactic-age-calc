/*     Business Logic     */
export default class AgeCalc{ 
  constructor(today, born, demographicLifeEx, planetName) {
    this.currDay = today; 
    this.birthday = born; 
    this.currAge = this.daysSince(); //Age in Earth-days
    this.ageInYrs = this.yearsSince(); //Age in Earth-years
    this.earthLifeEx = demographicLifeEx; 
    this.planet = planetName;
  }

  daysSince() {
    return((this.currDay-this.birthday)/86400000);  //1 Earth-Day = 86,400,000 milliseconds (ms) 
  }
  
  yearsSince() {  //Returns age in Earth-Years rounded to the nearest tenth
    return(Number(((this.currDay-this.birthday)/31540000000).toFixed(1)));  //1 Earth-Year = 31,540,000,000 milliseconds (ms) 
  }

  inMercuryYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Mercury-years.  
    //1 Solar Year on Mercury = 87.6 Earth-Days. 
    let retval = this.currAge/87.6; 
    return Number((retval).toFixed(1)); 
  }

  inVenusYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Venus-years. 
    //1 Solar Year on Venus = 226.3 Earth-Days. 
    return Number((this.currAge/226.3).toFixed(1));
  }

  inMarsYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Mars-years. 
    //1 Solar Year on Mars = 686.2 Earth-Days. 
    return Number((this.currAge/686.2).toFixed(2)); 
  }

  inJupiterYrs() { //Takes a parameter containing the user's age in Earth-days, and returns their age in Jupiter-years. 
    //1 Solar Year on Jupiter = 4328.9 Earth-Days. 
    return Number((this.currAge/4328.9).toFixed(2));
  }

  //Compares user's current age to what their demographic's average life expectancy would be on a given 'planet': Mercury, Venus, Mars or Jupiter (user's choice). This is based solely on the result of comparing two age calculations.   Then, tells user how long they have left to live OR, if their current age exceeds the calculated life expectancy, how far past the average they are [positive number].
  yearsLeftPlanet() { 
    let userRLEOnEarth = (this.earthLifeEx)-(this.ageInYrs);  //Subtracts user's age from 'lifeEx' (both in Earth-years).  
    let retval; //User's RLE on ['planetName'] in ['planetName']-years.   ('userRLEOnEarth' converted to ['planetName']-years). 
    let yearsPast;  //Saves the number of [planet]-years past the entered life expectancy the User is age-wise. 
    
    if(this.planet === "Mercury") {
      retval = Number((userRLEOnEarth/0.24).toFixed(2));  
    } else if(this.planet === "Venus") { 
      retval = Number((userRLEOnEarth/0.62).toFixed(2));  
    } else if(this.planet === "Mars") {
      retval = Number((userRLEOnEarth/1.88).toFixed(2));   
    } else {
      retval = Number((userRLEOnEarth/11.86).toFixed(2)); 
    }

    if(retval >= 0) {  //Retval Case 1 
      return Number(retval.toFixed(2));
    } else { //Retval Case 2
      yearsPast = Number(Math.abs(retval).toFixed(2)); 

      return (`Congrats! Your age indicates that so far, you've lived longer than the calculated RLE for your demographic on ${this.planet} by   ${yearsPast} ${this.planet}-years!`); 
    }    
  }
}
