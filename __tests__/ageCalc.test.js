import { daysSince } from '../src/js/ageCalc.js';
import { inMercuryYrs } from '../src/js/ageCalc.js';
import { inVenusYrs } from '../src/js/ageCalc.js';
import { inMarsYrs } from '../src/js/ageCalc.js';
//import { inJupiterYrs } from '../src/js/ageCalc.js';

describe('daysSince', () => {  
  test("Should return user's correct age in days, based on entered birthdate", () => {
    //When calling Date like below  ('year number', 'month number', 'date number'), note this:   the Month number goes from 0-11.
    let bday = new Date(2000, 4, 14); //User's entered birthday [using my own in this test]. 
    let d8Today = new Date(2022, 8, 2);  //Today's date, entered by user.
    let ageDays = daysSince(d8Today, bday); //Age in days 

    expect(ageDays).toEqual(8146);  //As of today (9-2-2022), this is how many days since 5-14-2000.
  });
});

describe('inMercuryYrs', () => { 
  test("Should return user's correct age in Mercury-years, based on their age in Days", () => {
    const earthAge = 8146; //My age (in Earth days)  
    let age = inMercuryYrs(earthAge);

    expect(age).toEqual(93.0);
  }); 
  test("Should return user's correct age in Mercury-years (based on their age in Days), and rounded to the nearest tenth.", () => {
    const earthAge1 = 8146; //My age (in Earth days)  
    const earthAge2 = 8280; //Age in Earth-days (as of today) for an individual who was born on 1-1-2000. 
    let age1 = inMercuryYrs(earthAge1);
    let age2 = inMercuryYrs(earthAge2);

    expect(age1).toEqual(93.0);
    expect(age2).toEqual(94.5); 
  });
});

describe('inVenusYrs', () => { 
  test("Should return user's correct age in Venus-years, rounded to the nearest tenth.", () => {
    const earthAge = 8146; //My age (in Earth days) 
    let age = inVenusYrs(earthAge); 
    expect(age).toEqual(36.0);
  }); 
});

describe('inMarsYrs', () => { 
  test("Should return user's correct age in Mars-years, rounded to the nearest tenth.", () => {
    const earthAge = 8146; //My age (in Earth days) 
    let age = inMarsYrs(earthAge); 
    expect(age).toEqual(11.9);
  }); 
});

/*
describe('inJupiterYrs', () => { 
  test("Should return user's correct age in Jupiter-years, rounded to the nearest tenth.", () => {
    const earthAge = 8146; //My age (in Earth days) 
    let age = inJupiterYrs(earthAge); 
    expect(age).toEqual();
  }); 
});
*/