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
This part of the section [before the Sidenotes] will be completed once HTML functionality has been implemented. Until then, the brief description of the program (see above) should be sufficient. 


Other Notes, Side-note(s) on Internet sources-- 
* This is the Google Search where I found the initial 'life expectancy' number in Earth-Years in the US:  https://www.google.com/search?q=average+life+expectancy+for+white+male+in+usa&newwindow=1&rlz=1C1CHBF_enUS863US863&ei=LW4SY_PCN8e20PEPgpmvoAU&ved=0ahUKEwizjdDN__b5AhVHGzQIHYLMC1QQ4dUDCA4&uact=5&oq=average+life+expectancy+for+white+male+in+usa&gs_lcp=Cgdnd3Mtd2l6EAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsAMyCggAEEcQ1gQQsANKBAhBGABKBAhGGABQAFgAYJAGaAFwAXgAgAEAiAEAkgEAmAEAyAEIwAEB&sclient=gws-wiz 

* This is the Search in which I found more-updated life expectancy figures (see page 2 of CDC result [which 'NYT', 'NPR', et al. reference in stories published on 8-31-2022]):   https://www.google.com/search?q=What+is+the+life+expectancy+of+a+white+male+in+the+united+states+in+2022%3F&newwindow=1&rlz=1C1CHBF_enUS863US863&ei=eZcTY_KVIcaV0PEPx5aniAQ&ved=0ahUKEwiytsmQm_n5AhXGCjQIHUfLCUEQ4dUDCA4&uact=5&oq=What+is+the+life+expectancy+of+a+white+male+in+the+united+states+in+2022%3F&gs_lcp=Cgdnd3Mtd2l6EAM6CggAEEcQ1gQQsAM6BAghEApKBAhBGABKBAhGGABQ9AZYlc4BYMbXAWgRcAF4AIAB5AKIAe4ikgEJMTYuMTcuMy4xmAEAoAEByAEHwAEB&sclient=gws-wiz   
  * Out of curiosity (mainly),  I wanted to figure out my exact, general Remaining-Life-Expectancy (RLE) in Earth-Years, based solely on the figures found in the table on Page 2 of the CDC document (the top result), which I'll link here in case it's no longer there after a certain length of time:   https://www.cdc.gov/nchs/data/vsrr/vsrr023.pdf. 
  So:  According to that Page 2 chart, White male 25 year-olds have 49.8 years RLE, while White male 20 year-olds have 54.4 years RLE.   The change in RLE between them is 4.6 Earth-Years.      My age in days (8147 at the time of writing) divided by 365  gives me '22.32'.    To find the change in RLE per 1 Earth-Year in this 5-year age span, I enter  '4.6 / 5' and get '0.92'.    Then, '(0.92)*(2.32)' =   '2.1344'.    Thus, my personal RLE is approximately  '54.4' - '2.1344'=  '52.2656'  (as of 2021).  
    -SM, 12:55pm, 9-3-2022. 


## Setup/Installation Requirements

* All that's required to run this application -- at minimum -- is: a decently-performing laptop, and a reliable Internet connection.
* To Clone the program from the GitHub repo to your local machine:
  * 1.) Click the green button labelled 'Code'. Under the 'HTTPS' tab, there are 3 Options. This program will only work at the moment if you choose Option 1, so move on to Step 2. 

  * 2.)  If you selected Option 1: Copy the link. Then, in Git BASH, navigate to the folder you want to put the files in. This can be your Desktop directory, or a different subfolder, whatever you prefer. Next, still in the Git BASH console, type the following (with the copied-link in place of 'HTTPS') and hit ENTER:
  'git clone HTTPS' Several lines of text will come up in the console -- that's the files being copied into whichever directory/folder you're in currently. Then, do the following once your prompt line reappears: While still in the console window, type 'pwd' and press ENTER. This will display your current file path. Copy that by highlighting it and pressing 'Ctrl-C', and then pasting it in an easily-accessible word processor like Notepad for reference.
  Next, open File Explorer, and navigate to through your files according to that File Path you just copy-pasted for reference. Once you've done this, move on to Step 3. 
  
  * 3.) Before opening the HTML file, do the following: right-click the containing folder (in which the newly-copied files are stored) and select the option that says 'Pin to Quick Access'. This is to ensure that you can find this folder again in the steps that follow. 
  Move on to Step 4. 

  * 4.) Open VS Code.  Then, click on the page icon at the top of the left-hand toolbar. Then click 'Open Folder'.  When the Windows File Explorer window appears, navigate to and select the containing folder you pinned in the previous step. Once you've selected the folder and clicked the button to open the folder in VS Code, move on to Step 5. 

  * 5.) Open a New Terminal (shortcut is Ctrl+Shift+`).  Then, in the command line, type 'npm install'. Everything needed to run the program with 'npm' will install -- your command prompt will show up again once the operation is complete; DO NOT Kill the terminal or close VS Code. 
  Once this is complete, move onto the next Section. 

* Running the program. 
  * (This will only work if you've completed Step 5 of the previous Section.) 
  Type 'npm run test'.  This will run the program's Jest tests. Your command prompt will appear at the bottom of the terminal once done. Preceding that will be a summary of the results from the Test Suite. 


* Note:  The above instructions will be updated once the UI Logic and HTML page functionality has been implemented.


## Known Bugs

* User input via HTML not currently available. 



## License
Email me at ladolego@gmail.com for questions, ideas, concerns, or even any issues you run into that aren't listed in the previous section. You may also clone or Fork the content in this Repo to fiddle around with it, if you like. 

Licensed through MIT. Copyright (c) 9/2/2022, Samuel Majerus. 