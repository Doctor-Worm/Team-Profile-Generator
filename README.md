# Team Profile Generator

## User Story
As a manager of my team, I would like to generate a webpage that displays my team's basic info so that I have quick access to their emails and GitHub profiles.

<br>

___

<br>

## Application Details
- Uses a command-line application using the Inquirer package with Node.js that accepts user input
- Prompts for my team members and their information, and then generates an HTML file that displays a nicely formatted team roster based on user input
- The email address in the HTML opens the default email program and populates the TO field of the email with the address when clicked
- The GitHub username opens that GitHub profile in a new tab when clicked

___

<br>

## Challenges Faced
- The most challenging thing I faced creating this application was getting the generateTeam() function to correctly return to me all of the user inputed data and append it to the HTML document. At first I was returning all of the data when I console.log()'ed it, but it kept returning undefined when I created my HTML document. I was able to fix this by, instead of returning my data (card), I inputed the data into an empty string literal after every time it looped through, and then returned the final string literal after it had all of the data pushed into it.
- Being able to figure out how to get the inquirer prompts to function correctly within a chain of functions inside of a larger function was tricky at first. I had to make sure to put all of the inquirer prompts into array brackets.

<br>

## *Links to GitHub repository, walkthrough video, and a sample HTML file generated from this application :*

<br>

- **[Link to the GitHub Repository](https://github.com/Doctor-Worm/Team-Profile-Generator)**

- **[Link to Walkthrough Video](https://drive.google.com/file/d/10ucH7n9y0a6LtCC3jWa8vuVHbG3Xvvpx/view)**

![Website Screenshot](/images/team-profile-generator-screenshot.png)