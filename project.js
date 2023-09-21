// 1. desposit some money
// 2. determine number of lines to bet
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();  // calls package prpmt-sync


const ROWS = 3;
const COLS = 3;


const SYMBOLS_COUNT ={

A:2, //KEY= A,B,C,D   ":" map with values "2,4,6,8"
B:4,
C:6,
D:8

}

const SYMBOL_VALUES = {

    A:5, 
    B:4,
    C:3,
    D:2

}













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
//part 2

const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the total bet: ");
        const numberOfLines = parseFloat(lines);   
    
        if (isNaN(numberOfLines) || numberOfLines<= 0 || numberOfLines > 3){
            console.log("Invalid deposit amount, try again. ")
        }     
        else {
            return numberOfLines;
        }
    }
}
//part 3
const getBet = (balance, lines) => {

    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);   
    
        if (isNaN(numberBet) || numberBet<= 0 || numberBet > (balance / lines)){
            console.log("Invalid bet, try again. ")
        }     
        else {
            return numberBet;
        }
    }

}

const spin = () =>{
const symbols = [];
for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
for (let i=0;i<count;i++){
    symbols.push(symbol);
    
}
}

const reels = [];
for (let i=0; i < COLS; i++){
    reels.push([]); 
const reelSymbols = [...symbols];
    for(let j=0; j < ROWS; j++){
        const randomIndex = Math.floor(Math.random() * reelSymbols.length)
const selectedSymbol = reelSymbols[randomIndex];
reels[i].push(selectedSymbol);
reelSymbols.splice(randomIndex,1); // 1 removes one elemnt
    }
}
return reels; 
};
const reels = spin();
console.log(reels);




let balance = deposit(); //with a constant you cannot change the value, with let you can
const numberOfLines = getNumberOfLines();
const bet =getBet(balance, numberOfLines);

