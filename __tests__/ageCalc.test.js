import { daysSince } from '../src/js/ageCalc.js';

describe('userAgeInDays', () => {
  
  test("Should return user's correct age in days, based on entered birthdate", () => {
    //When calling Date in the fashion shown below  ('year number', 'month number', 'date number'), note this:   the Month number goes from 0-11.
    let bday = new Date(2000, 4, 14); //User's entered birthday [using my own in this test]. 
    let d8Today = new Date(2022, 8, 2);  //Today's date, entered by user.
    let ageDays = daysSince(d8Today, bday); //Age in days 

    expect(ageDays).toEqual(8146);  //As of today (9-2-2022), this is how many days since 5-14-2000.
  });
});