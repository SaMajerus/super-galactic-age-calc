# Super Galactic Age Calculator

#### Takes User's birthday, input for the current day, and their demographic group's average life expectancy (in Earth-Years). Then, can convert that into life expectancy and current age of the user on any of these 4 planets in our solar system (based on their respective Solar Year periods compared to Earth): Mercury, Venus, Mars or Jupiter.

#### By Sam Majerus


## Technologies Used

* JavaScript (JS)
* Node Package Manager (npm) 
* JSON
* Jest
* Babel
* webpack
* webpack-cli 
* webpack-dev-server
* clean-webpack-plugin
* EsLint 
* Markdown 
* Git Bash (Used in:  Local Cmd-line Terminal, navigation of local directories) 
* GitHub (Remote repositories) 
* Google Search (for finding realistic life-expectancy figures) 



## Description




Other Notes, Side-note(s) on Internet sources-- 
* This is the Google Search where I found the initial 'life expectancy' number in Earth-Years in the US:  https://www.google.com/search?q=average+life+expectancy+for+white+male+in+usa&newwindow=1&rlz=1C1CHBF_enUS863US863&ei=LW4SY_PCN8e20PEPgpmvoAU&ved=0ahUKEwizjdDN__b5AhVHGzQIHYLMC1QQ4dUDCA4&uact=5&oq=average+life+expectancy+for+white+male+in+usa&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsANKBAhBGABKBAhGGABQAFgAYJAGaAFwAXgAgAEAiAEAkgEAmAEAyAEIwAEB&sclient=gws-wiz 

* This is the Search in which I found more-updated life expectancy figures (see page 2 of CDC result [which 'NYT', 'NPR', et al. reference in stories published on 8-31-2022]):   https://www.google.com/search?q=What+is+the+life+expectancy+of+a+white+male+in+the+united+states+in+2022%3F&newwindow=1&rlz=1C1CHBF_enUS863US863&ei=eZcTY_KVIcaV0PEPx5aniAQ&ved=0ahUKEwiytsmQm_n5AhXGCjQIHUfLCUEQ4dUDCA4&uact=5&oq=What+is+the+life+expectancy+of+a+white+male+in+the+united+states+in+2022%3F&gs_lcp=Cgdnd3Mtd2l6EAM6CggAEEcQ1gQQsAM6BAghEApKBAhBGABKBAhGGABQ9AZYlc4BYMbXAWgRcAF4AIAB5AKIAe4ikgEJMTYuMTcuMy4xmAEAoAEByAEHwAEB&sclient=gws-wiz   
  * Out of curiosity (mainly),  I wanted to figure out my exact, general Remaining-Life-Expectancy (RLE) in Earth-Years, based solely on the figures found in the table on Page 2 of the CDC document (the top result), which I'll link here in case it's no longer there after a certain length of time:   https://www.cdc.gov/nchs/data/vsrr/vsrr023.pdf. 
  So:  According to that Page 2 chart, White male 25 year-olds have 49.8 years RLE, while White male 20 year-olds have 54.4 years RLE.   The change in RLE between them is 4.6 Earth-Years.      My age in days (8147 at the time of writing) divided by 365  gives me '22.32'.    To find the change in RLE per 1 Earth-Year in this 5-year age span, I enter  '4.6 / 5' and get '0.92'.    Then, '(0.92)*(2.32)' =   '2.1344'.    Thus, my personal RLE is approximately  '54.4' - '2.1344'=  '52.2656'  (as of 2021).  
    -SM, 12:55pm, 9-3-2022. 


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_



## Known Bugs

* Currently there are no Jest tests for the cases in which a user's age in non-Earth-Years is greater than that of the calculated life expectancy on that planet. 
* User input not available currently



## License
Email me at ladolego@gmail.com for questions, ideas, concerns, or even any issues you run into that aren't listed in the previous section. You may also clone or Fork the content in this Repo to fiddle around with it, if you like. 

Licensed through MIT. Copyright (c) 9/2/2022, Samuel Majerus. 