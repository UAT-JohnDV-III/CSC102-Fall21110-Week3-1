function playCraps() {
    console.log("playCraps() function started");
    var die1 = Math.ceil(Math.random() * 6); //Generates a random decimal number between 0 and 1 excluding 1, multiplies the result by 6, then rounds it to the ceiling.
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.write("Die 1 = " + die1); //Adds the first die to this string.
    document.write("<br/>"); //This adds a new line in the window.
    document.write("Die 2 = " + die2); //Adds the second die to this string.
    document.write("<br/>");
    document.write("Sum = " + sum); //Adds the sum to this string.
    document.write("<br/>");
    if (sum == 7 || sum == 11) { //Either the sum of the 2 dice must be 7 or 11 to lose.
        document.write("CRAPS - you lose!");
        document.write("<br/>");
    }
    else if (die1 == die2 && die1 % 2 == 0) { //If the 2 dice are even numbers and are exactly the same, then we won.
        document.write("DOUBLES - you win!");
        document.write("<br/>");
    }
    else //Neither conditions are met, draw.
    {
        document.write("Draw - You neither won nor lost. Please try again,");
        document.write("<br/>");
    }
}