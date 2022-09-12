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
  yearsLeftPlanet() {   // ***Subtract age from LifeEx in earth years, then convert that number to [planetName]-years for RLE on that planet. 
    //'Earth-years to [planetName]-years conversion' -- Divisor values
    let earthToMcy = 87.6; 
    let earthToVns = 226.3; 
    let earthToMars = 686.2; 
    let earthToJpr = 4328.9; 

    //Other variables
    let userRLEOnEarth = this.earthLifeEx-this.ageInYears;  //Subtracts user's age from 'lifeEx' (both in Earth-years).  
    let retval; //User's RLE on ['planetName'] in ['planetName']-years.   ('userRLEOnEarth' converted to ['planetName']-years). 
    let yearsPast;

    if(this.planet === "Mercury") {
      retval = Number((userRLEOnEarth/earthToMcy).toFixed(2));  
    } else if(this.planet === "Venus") { 
      retval = Number((userRLEOnEarth/earthToVns).toFixed(2));  
    } else if(this.planet === "Mars") {
      retval = Number((userRLEOnEarth/earthToMars).toFixed(2));   
    } else {
      retval = Number((userRLEOnEarth/earthToJpr).toFixed(2)); 
    }

    if(retval >= 0) { 
      return Number(retval.toFixed(2));
    } else { //[Any tests that meet this condition should be expecting a string value]
      yearsPast = Number(Math.abs(retval).toFixed(2));  //Saves number of ['planetName']-years past the calculated RLE the user is. 

      return (`Congrats! Your age indicates that so far, you've lived longer than the calculated RLE for your demographic on ${this.planet} by   ${yearsPast} ${this.planet}-years!`); 
    }    
  }
}
