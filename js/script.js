/**
 * Conditionals Wacky Created by Phirom Yim on 5/22/14.
 */

//Create a variable to determine to engage user to guess the number I am thinking in my head
//if else and else if statements are used

var number = prompt("Let's play a game! \nI think of a number and you guess that number.\nEnter a number between 1 to 50");
//create a prompt for user input to play the number guessing game
if (number >= 1 && number <= 5){//if condition is true
    console.log("Not even close!");//print to console
    alert(" Not even close!")//alert string
}else if (number >= 5 && number <= 10){//if number is greater equal to 5 and less than equal to 10
    console.log("Nice try but not quite.");//print this to console
    alert("Nice try but not quite.")//alert this string
}else if (number >= 15 && number <= 20){//if number is greater equal to 15 and less than equal to 20
    console.log("Getting closer!");//print this string to console
    alert("Getting closer!")//alert this string
}else if (number == 21){//if condition is equal this 21
    console.log("You guessed it! \nI was thinking of number 21!");//print to console
    alert("You guessed it! I was thinking of number 21!")//alert string
}else if (number >= 22 && number <= 30){//if number is greater equal to 22 and less than equal to 30
    console.log("Nice try but you're little bit over.");//print to console
    alert("Nice try but you're little bit over.")//alert this string
}else if (number >= 30 && number <= 50){//if number is greater equal to 30 and less than equal to 50
    console.log("You're way over, try guessing lower.");
    alert("You're way over, try guessing lower.")
}else if (number < 1 || number > 50){//if condition is false and number is between 1 and 50
    console.log("You entered a number less than 1 or greater than 50");//print to console
    alert("You entered a number less than 1 or greater than 50")//alert string
}else{
    console.log("You did not enter a number!");//if no user input
    alert("You did not enter a number!")//alert string
}
