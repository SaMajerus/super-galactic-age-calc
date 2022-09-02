import ageCalc from '../src/js/ageCalc.js';

describe('daysSince', () => {  
  test("Should return user's correct age in days, based on entered birthdate", () => {
    //Syntax used by Date object on next 2 lines:  ('year number' [yyyy], 'month number' [0-11], 'date number' [1-31])
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146] 
    let d8Today = new Date(2022, 8, 2);  //Today's date (assume it's entered by user). 
    let lifeExp = 78.8;  //Average life expectancy of my demographic -- white male -- in USA as of 2019, according to World Bank (Google Search link in README).
    let userObj = new ageCalc(d8Today, bday, lifeExp); 
    
    let ageDays = userObj.daysSince(); //Age in days 
    expect(ageDays).toEqual(8146);  //As of today (9-2-2022), this is how many days since 5-14-2000.
  });
});

describe('inMercuryYrs', () => { 
  let bday; 
  let d8Today; 
  let lifeExp; 

  beforeEach(() => {
    bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146] 
    d8Today = new Date(2022, 8, 2);  //Today's date (assume it's entered by user).   
    lifeExp = 78.8;  //Average life expectancy of my demographic -- white male -- in USA as of 2019, according to World Bank (Google Search link in README). 
  }); 

  test("Should return user's correct age in Mercury-years, based on their age in Days", () => { 
    let userObj = new ageCalc(d8Today, bday, lifeExp);
    let age = userObj.inMercuryYrs(); 
    expect(age).toEqual(93.0); 
  }); 
  test("Should return user's correct age in Mercury-years (based on their age in Days), and rounded to the nearest tenth.", () => {
    let bday2 = new Date(2000, 0, 1); //Another individual's entered birthday.  [Age today in Earth-Days = 8280] 
    let user1 = new ageCalc(d8Today, bday, lifeExp); 
    let user2 = new ageCalc(d8Today, bday2, lifeExp); 

    let age1 = user1.inMercuryYrs(); 
    let age2 = user2.inMercuryYrs(); 

    expect(age1).toEqual(93.0); 
    expect(age2).toEqual(94.5); 
  });
});

describe('inVenusYrs', () => { 
  test("Should return user's correct age in Venus-years, rounded to the nearest tenth.", () => {
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146] 
    let d8Today = new Date(2022, 8, 2);  //Today's date (assume it's entered by user).  
    let lifeExp = 78.8;  //Average life expectancy of my demographic -- white male -- in USA as of 2019, according to World Bank (Google Search link in README).
    let userObj = new ageCalc(d8Today, bday, lifeExp);
 
    let age = userObj.inVenusYrs(); 
    expect(age).toEqual(36.0);
  }); 
});

describe('inMarsYrs', () => { 
  test("Should return user's correct age in Mars-years, rounded to the nearest hundredth.", () => {
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146] 
    let d8Today = new Date(2022, 8, 2);  //Today's date (assume it's entered by user).    
    let lifeExp = 78.8;  //Average life expectancy of my demographic -- white male -- in USA as of 2019, according to World Bank (Google Search link in README).
    let userObj = new ageCalc(d8Today, bday, lifeExp);

    let age = userObj.inMarsYrs(); 
    expect(age).toEqual(11.87);
  }); 
});

describe('inJupiterYrs', () => { 
  test("Should return user's correct age in Jupiter-years, rounded to the nearest hundredth.", () => {
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146] 
    let d8Today = new Date(2022, 8, 2);  //Today's date (assume it's entered by user).    
    let lifeExp = 78.8;  //Average life expectancy of my demographic -- white male -- in USA as of 2019, according to World Bank (Google Search link in README).
    let userObj = new ageCalc(d8Today, bday, lifeExp);

    let age = userObj.inJupiterYrs(); 
    expect(age).toEqual(1.88);
  }); 
});

describe('yearsLeft', () => { 
  let bday; 
  let d8Today; 
  let lifeExp; 
  let userObj; 

  beforeEach(() => {
    bday = new Date(2000, 4, 14); //User's entered birthday [using my own in this test].
    d8Today = new Date(2022, 8, 2);  //Today's date, entered by user.  
    lifeExp = 78.8;  //Average life expectancy of my demographic -- white male -- in USA as of 2019, according to World Bank (Google Search link in README).
    userObj = new ageCalc(d8Today, bday, lifeExp); 
  });

  test("It should determine what the average life expectancy of the User's demographic is in Mercury-years.", () => {  
    let ageComp = userObj.yearsLeft("Mercury"); 
    expect(ageComp).toEqual(0);  
  }); 
  
  /*
  test("It should determine how many years they'd have left to live if they were on Mercury.", () => { 
    const earthAge = 8146; //My age (in Earth days) 
    const lifeExp = 78.8;  //Average life expectancy of my demographic -- white male -- in USA as of 2019, according to World Bank (Google Search link in README). 
    let ageComp = yearsLeft(earthAge, lifeExp); 
    
    expect(ageComp).toEqual(0);  
  });
  */ 
});