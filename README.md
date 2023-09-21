# Gambling javascript project
To practice js
Steps: 
 1. desposit some money
 2. determine number of lines to bet
 3. collect a bet amount
 4. spin the slot machine
 5. check if the user won
 6. give the user their winnings
 7. play again

## Step 1

```
const prompt = require("prompt-sync")();  // calls package prpmt-sync

//create a function/cosntant
const deposit = () => {     //this is the same as                 function deposit() {    }
    while(true){
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);   //parseFloat converts string to number

    if (isNaN(numberDepositAmount) || numberDepositAmount<= 0 ){
        console.log("Invalid deposit amount, try again. ")
    }     //NaN is "not a number"
    else {
        return numberDepositAmount;

    }
}
};

const depositAmount= deposit(); 
```
## Step 2
```

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the numbers of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);   
    
        if (isNaN(numberOfLines) || numberOfLines<= 0 || numberOfLines > 3){
            console.log("Invalid deposit amount, try again. ")
        }     
        else {
            return numberOfLines;
        }
    }
}

 
