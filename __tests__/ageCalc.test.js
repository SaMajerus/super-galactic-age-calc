import AgeCalc from './../src/js/ageCalc.js';

describe('daysSince', () => {  
  test("Should return user's correct age in Earth-Days, based on entered birthdate", () => {
    // ***Syntax used by Date object on lines 7-8:  ('year number' [yyyy], 'month number' [0-11], 'date number' [1-31])
    
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146]
    let d8Today = new Date(2022, 8, 2);  //"Today's date" (assume it's entered by user). 
    let lifeExp = 52.2656;  //My personal, Remaining life expectancy based off of my demographic: "White, 22ish year-old male".  (See 'other notes' [bulle point 2] in README's Description section for source info, and how I found this number.)
    let userObj = new AgeCalc(d8Today, bday, lifeExp, "Mercury"); 
    
    let ageDays = userObj.daysSince(); //Age in days 
    expect(ageDays).toEqual(8146);  //As of today (9-2-2022), this is how many days since 5-14-2000.
  });
});

describe('yearsSince', () => {  
  test("Should return user's correct age in Earth-Years, based on entered birthdate", () => { 
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146]
    let d8Today = new Date(2022, 8, 2);  //"Today's date" (assume it's entered by user). 
    let lifeExp = 52.2656;  //My personal, Remaining life expectancy based off of my demographic: "White, 22ish year-old male".  (See 'other notes' [bulle point 2] in README's Description section for source info, and how I found this number.)
    let userObj = new AgeCalc(d8Today, bday, lifeExp, "Mercury"); 
    
    let ageYears = userObj.yearsSince(); //Age in years
    expect(ageYears).toEqual(22.32);  //As of today (9-2-2022), this is how many days since 5-14-2000.
  }); 
});

describe('inMercuryYrs', () => { 
  let bday; 
  let d8Today; 
  let lifeExp; 

  beforeEach(() => {
    bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146]
    d8Today = new Date(2022, 8, 2);  //"Today's date" (assume it's entered by user).
    lifeExp = 52.2656;  //My personal, Remaining life expectancy based off of my demographic: "White, 22ish year-old male".  (See 'other notes' [bulle point 2] in README's Description section for source info, and how I found this number.)
  }); 

  test("Should return user's correct age in Mercury-years, based on their age in Days", () => { 
    let userObj = new AgeCalc(d8Today, bday, lifeExp, "Mercury");
    let age = userObj.inMercuryYrs(); 
    expect(age).toEqual(93.0); 
  }); 
  test("Should return user's correct age in Mercury-years (based on their age in Days), and rounded to the nearest tenth.", () => {
    let bday2 = new Date(2000, 0, 1); //Another individual's entered birthday.  [Age today in Earth-Days = 8280] 
    let user1 = new AgeCalc(d8Today, bday, lifeExp, "Mercury"); 
    let user2 = new AgeCalc(d8Today, bday2, lifeExp, "Mercury"); 

    let age1 = user1.inMercuryYrs(); 
    let age2 = user2.inMercuryYrs(); 

    expect(age1).toEqual(93.0); 
    expect(age2).toEqual(94.5); 
  });
});

describe('inVenusYrs', () => { 
  test("Should return user's correct age in Venus-years, rounded to the nearest tenth.", () => {
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146]
    let d8Today = new Date(2022, 8, 2);  //"Today's date" (assume it's entered by user).  
    let lifeExp = 52.2656;  //My personal, Remaining life expectancy based off of my demographic: "White, 22ish year-old male".  (See 'other notes' [bullet point 2] in README's Description section for source info, and how I found this number.)
    let userObj = new AgeCalc(d8Today, bday, lifeExp, "Venus");
 
    let age = userObj.inVenusYrs(); 
    expect(age).toEqual(36.0);
  }); 
}); 

describe('inMarsYrs', () => { 
  test("Should return user's correct age in Mars-years, rounded to the nearest hundredth.", () => {
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146]
    let d8Today = new Date(2022, 8, 2);  //"Today's date" (assume it's entered by user).      
    let lifeExp = 52.2656;  //My personal, Remaining life expectancy based off of my demographic: "White, 22ish year-old male".  (See 'other notes' [bullet point 2] in README's Description section for source info, and how I found this number.)
    let userObj = new AgeCalc(d8Today, bday, lifeExp, "Mars");

    let age = userObj.inMarsYrs(); 
    expect(age).toEqual(11.87);
  }); 
});

describe('inJupiterYrs', () => { 
  test("Should return user's correct age in Jupiter-years, rounded to the nearest hundredth.", () => {
    let bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146] 
    let d8Today = new Date(2022, 8, 2);  //"Today's date" (assume it's entered by user). 
    let lifeExp = 52.2656;  //My personal, Remaining life expectancy based off of my demographic: "White, 22ish year-old male".  (See 'other notes' [bulle point 2] in README's Description section for source info, and how I found this number.)
    let userObj = new AgeCalc(d8Today, bday, lifeExp, "Jupiter");

    let age = userObj.inJupiterYrs(); 
    expect(age).toEqual(1.88);
  }); 
});

describe('yearsLeftPlanet', () => { 
  let bday; 
  let d8Today; 
  let lifeExp; 
  let userObj; 

  beforeEach( () => {
    bday = new Date(2000, 4, 14); //User's entered birthday (using my own here).  [My Age today in Earth-Days = 8146]
    d8Today = new Date(2022, 8, 2);  //"Today's date" (assume it's entered by user).  
    lifeExp = 52.3;  //My personal, Remaining life expectancy (in Earth-years) based off of my demographic: "White, 22ish year-old male".  (See 'other notes' [bullet point 2] in README's Description section for source info, and how I found this number.)
  });

  test("It should tell the User how many Mercury-years past the estimated remaining-life-expectancy (RLE) they are.", () => {  
    userObj = new AgeCalc(d8Today, bday, lifeExp, "Mercury");
    let ageComp = userObj.yearsLeftPlanet();

    expect(typeof ageComp === String); 
  });
  test("It should tell the User how many Venus-years past the estimated remaining-life-expectancy (RLE) they are.", () => {  
    userObj = new AgeCalc(d8Today, bday, lifeExp, "Venus");
    let ageComp = userObj.yearsLeftPlanet();

    expect(typeof ageComp === String); 
  });
  test("It should tell the User how many Mars-years past the estimated remaining-life-expectancy (RLE) they are.", () => {  
    userObj = new AgeCalc(d8Today, bday, lifeExp, "Mars");
    let ageComp = userObj.yearsLeftPlanet();

    expect(typeof ageComp === String); 
  });
  test("It should tell the User how many Jupiter-years past the estimated remaining-life-expectancy (RLE) they are.", () => {  
    userObj = new AgeCalc(d8Today, bday, lifeExp, "Jupiter");
    let ageComp = userObj.yearsLeftPlanet();

    expect(typeof ageComp === String); 
  });  

  beforeEach( () => {
    bday = new Date(1922, 4, 15); //User/individual's birthday  (assume they or their guardian entered it). 
    d8Today = new Date(2022, 8, 3);  //"Today's date" (assume it was entered by User).
    lifeExp = 100;  //User's Remaining life expectancy (RLE) [in Earth-years] based off of their demographic.  (Assume they entered it.) 
  });

  test("It should determine how many years the User would have left in Mercury-years", () => {  
    userObj = new AgeCalc(d8Today, bday, lifeExp, "Mercury");
    let ageComp = userObj.yearsLeftPlanet(); 
    
    expect(typeof ageComp === Number); 
  });  
  test("It should determine how many years the User would have left in Venus-years", () => {  
    userObj = new AgeCalc(d8Today, bday, lifeExp, "Venus");
    let ageComp = userObj.yearsLeftPlanet();
    
    expect(typeof ageComp === Number); 
  });  
  test("It should determine how many years the User would have left in Mars-years", () => {  
    userObj = new AgeCalc(d8Today, bday, lifeExp, "Mars");
    let ageComp = userObj.yearsLeftPlanet(); 
    
    expect(typeof ageComp === Number); 
  });  
  test("It should determine how many years the User would have left in Jupiter-years", () => {  
    // bday = new Date(1921, 4, 15); //User/individual's birthday  (assume they or their guardian entered it). 
    // d8Today = new Date(2022, 8, 3);  //"Today's date" (assume it was entered by User).
    userObj = new AgeCalc(d8Today, bday, lifeExp, "Jupiter");
    let ageComp = userObj.yearsLeftPlanet();  
    
    expect(typeof ageComp === Number); 
  });  
}); 