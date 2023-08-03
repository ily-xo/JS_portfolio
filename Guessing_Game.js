// //Greater Than Function

// function isGuessGreaterThanRandomNumber(guess, randomNumber) {
//   if (guess > randomNumber) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const randomNumber = Math.floor(Math.random() * 100) + 1;


// while (true) {
//   const guess = parseInt(prompt("Guess a number:"));

//   if (isGuessGreaterThanRandomNumber(guess, randomNumber)) {
//     console.log("Your guess is greater than the random number.");
//   } else {
//     console.log("Your guess is less than to the random number.");
//   }

//   if (guess === randomNumber) {
//     console.log("Congratulations! You guessed the correct number.");
//     break;
//   }
// }


// //Less Than Function

// function isGuessLessThanRandomNumber(guess, randomNumber) {
//   if (guess < randomNumber) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const randomNumber = Math.floor(Math.random() * 100) + 1;

// while (true) {
//   const guess = parseInt(prompt("Guess a number:"));

//   if (isGuessLessThanRandomNumber(guess, randomNumber)) {
//     console.log("Your guess is less than the random number.");
//   } else {
//     console.log("Your guess is greater than the random number.");
//   }

//   if (guess === randomNumber) {
//     console.log("Congratulations! You guessed the correct number.");
//     break;
//   }
// }



// // 

// case 'divide':
//       const divisor = parseInt(prompt('Is there a remainder when I divide by:'));
//       const hasRemainder = targetNumber % divisor !== 0;
//       alert(`Yes, there's${hasRemainder ? '' : ' not'} a remainder when you divide by ${divisor}.`);
//       guessNumber();
//       break;
//     case 'how many digits?':
//       const numDigits = targetNumber.toString().length;
//       alert(`The number has ${numDigits} digit(s).`);
//       guessNumber();
//       break;

// // 

// // BETWEEN
// const Lifeline = confirm('Would you like to use your lifeline?')
//   if (Lifeline) {
//     const used = prompt('Choose a lifeline: BETWEEN');
//     if (used.toUpperCase() === 'BETWEEN') {
//       const lowerBound = parseInt(prompt('Is the number between (lower bound)?'));
//       const upperBound = parseInt(prompt('and (upper bound)?'));
//       if (guess > lowerBound && guess < upperBound) {
//         console.log('Your guess is between the given bounds.'):
//       } else {
//         console.log('Your guess is not between the given bounds.');
//       }
//     } else {
//       console.log('No lifeline chosen');
//       }
//     }
//   }
// // 




// // Gameplay

// // require('./test.js')

// // *********** GLOBAL VARIABLES to be used ****************



// *********** GLOBAL VARIABLES to be used ****************

// *********** GLOBAL VARIABLES to be used ****************

// require('./test.js')

// *********** GLOBAL VARIABLES to be used ****************

// require('./test.js')

// *********** GLOBAL VARIABLES to be used ****************

// require('./test.js')

// *********** GLOBAL VARIABLES to be used ****************

const hintsCache = [{'Guesses Remaining': 5}, {'Guesses': []}]

const hasBeenUsed = {
  GREATERTHAN: false,
  LESSTHAN: false,
  BETWEEN: false,
  DIVISIBLEBY: false,
  PRIME: false
}

function numberPicker () {
  return Math.ceil(Math.random() * 99)
}

const numHero = `                                                                                                                     
                          ##                    ##                       
                          ##                    ##                       
 ####   ## ##  # ## ##   ####    ###   # ##    ####    ###   # ##   ###  
 ## ##  ## ##  ## ## ##  ## ##  ## ##  ###     ## ##  ## ##  ###   ## ## 
 #  ## ##  ##  ## ## ##  #  ##  #####  ##      #  ##  #####  ##   ##  ## 
## ##  ## ##  ## ## ##  ##  #  ##     ##      ## ##  ##     ##    ##  ## 
## ##  ## ##  ## ## ##  ## ##  ## ##  ##      ## ##  ## ##  ##    ## ##  
## ##   ## #  ## ## ##  ####    ###   ##      ## ##   ###   ##     ###   
                                                                         
`;



// ############## LIFELINE FUNCTIONS ##############

function between(numToGuess) {

        hasBeenUsed['BETWEEN'] = true
        console.clear();
        console.log(numHero)
        console.table(hintsCache)
        alert(`Is THE NUMBER in between #A ----- and ----- #B?`);
        const firstNum = parseInt(prompt(`Enter an integer for #A`));

        if (!promptCheck(firstNum)) {
        between(numToGuess)}
  
        console.log(`"Is THE NUMBER in between ${firstNum} ----- and ----- #B?"`);
        const secondNum = parseInt(prompt(`Enter an integer for #B`));

        if (!promptCheck(secondNum)) {
        between(numToGuess)}
      
        let max = Math.max(firstNum, secondNum);
        let min = Math.min(firstNum, secondNum);
      
        const result = numToGuess >= min && numToGuess <= max;
        if (result) {
          console.clear();
          hintsCache.push(`Is between ${min} and ${max} (inclusive).`)
          console.log(numHero)
          console.table(hintsCache)
          confirm(`Yes. THE NUMBER is between ${min} and ${max} (inclusive).`);
        } else {
          console.clear();
          hintsCache.push(`NOT between ${min} and ${max} (inclusive).`)
          console.log(numHero)
          console.table(hintsCache)
          confirm(`No, THE NUMBER is NOT between ${min} and ${max} (inclusive).`);
        }
        return getHelp(numToGuess, hintsCache);
 
}

function greaterThan (numToGuess) {

      hasBeenUsed['GREATERTHAN'] = true
      console.clear()
      console.log(numHero)
      console.table(hintsCache)
      alert(`Is THE NUMBER greater than _____`)
      const userInput = Math.round(parseInt(prompt(`Enter an integer`)))

      if (!promptCheck(userInput)) {
      greaterThan(numToGuess)}
  
      const result = numToGuess > userInput
      console.clear()
  
      if (result) {
      hintsCache.push(`IS greater than ${userInput}`)
      } else {
        hintsCache.push(`NOT greater than ${userInput}`)
      } // end of else

      console.log(numHero)
      console.table(hintsCache)
      confirm(`Continue`)
  
    return getHelp(numToGuess, hintsCache)

}

function lessThan (num) {

      hasBeenUsed['LESSTHAN'] = true
      console.clear()
  
      console.log(numHero)
      console.table(hintsCache)
      alert(`Is THE NUMBER less than _____`)
      const userInput = Math.round(parseInt(prompt(`Enter an integer`)))

      if (!promptCheck(userInput)) {
      lessThan(numToGuess)}
  
      const result = num < userInput
      console.clear()
  
      if (result) {
      hintsCache.push(`Is less than ${userInput}`)
      } else {
        hintsCache.push(`NOT less than ${userInput}`)
      } // end of else

      console.log(numHero)
      console.table(hintsCache)
      confirm(`Continue`)
  
    return getHelp(numToGuess, hintsCache)

}

function divisibleBy (numToGuess) {
  hasBeenUsed['DIVISIBLEBY'] = true;
  
  console.clear()
  console.log(numHero)
  console.table(hintsCache)
  
  alert(`Is THE NUMBER divisible by _____`)
  const userInput = Math.round(parseInt(prompt(`Enter an integer`)))
  
  if (!promptCheck(userInput)) {
    divisibleBy(numToGuess)}
    
  const result = numToGuess % userInput;
  console.clear()
  
  if (result === 0){
    hintsCache.push(`Divisible by ${userInput}`)
  } else {
    hintsCache.push(`NOT divisible by ${userInput}`)
  }

    console.log(numHero)
    console.table(hintsCache)
    confirm(`Continue`)
  
  return getHelp(numToGuess, hintsCache)
}


function prime (n) {
  hasBeenUsed['PRIME'] = true;
  const maxRt = Math.ceil(Math.sqrt(n))

  let result;

  for (let i = 2; i <= maxRt; i++) {
    if (n % i === 0) {
      result = false
      break
    }
    result = true
  }

  console.clear()
  
  if (result) {
    hintsCache.push(`IS prime!`)
  } else {
    hintsCache.push(`NOT a prime number.`)
  }

  console.log(numHero)
  console.table(hintsCache)
  confirm('Continue')

  return getHelp(numToGuess, hintsCache)
}

// ############ Accessibility & Gameplay Functions ##############

function beginGame() {
  console.clear()
  numToGuess = numberPicker();
  hintsCache[0]['Guesses Remaining'] = 5

  for (let keys in hasBeenUsed) {
    hasBeenUsed[keys] = false
  }
  
  hintsCache[1]['Guesses'] = []
  hintsCache.splice(2)

 console.log(`                                      

   ###                ##                                 ###                     
    ##               ##                                   ##                     
   ##       ####  #######     #####             ####     ##       #####   ##  ## 
   ##     ##   ##   ##       ##                ##  ##    ##     ##   ##  ##  ##  
  ##     ########  ##         ##              ##   ##   ##     ##    ##  ##  ##  
  ##     ##        ##          ##             ##  ##    ##     ##  ###    ####   
 ####     ####      ###    #####             #####     ####     ### ##      ##   
                                             ##                          ####    

                                           
##   ##                ##               
###  ##                ##               
###  ## ## ## # ## ##  ####   ###  # ## 
## # ## ## ## ## ## ## ## ## ## ## ###  
## # ## ## ## ## ## ## ##  # ##### ##   
##  ### ## ## ## ## ## ##  # ##    ##   
##  ### ## ## ## ## ## ## ## ## ## ##   
##   ##  ## # ## ## ## ####   ###  ##   
                                        
                                       
                           
##  ##                  ## 
##  ##                  ## 
##  ##  ###  # ##  ###  ## 
###### ## ## ###  ## ## ## 
##  ## ##### ##   ## ## #  
##  ## ##    ##   ## ## #  
##  ## ## ## ##   ## ##    
##  ##  ###  ##    ###  ## 
                           
`);


  console.table(hintsCache)
  confirm(`OK, I've picked a number FROM 1 TO 99. Choose Y to continue`)
  return getHelp(numToGuess, hintsCache)
}

function guess (numToGuess) {
  console.clear()
  console.log(numHero)
  console.table(hintsCache)
  if (hintsCache[0]['Guesses Remaining'] > 0){
    const userInput = prompt(`Guess the number: `)
    
    if (!promptCheck(userInput)) {
    return guess(numToGuess)}
    
    if (Number(userInput) === numToGuess) {
      confirm(`You guessed it! THE NUMBER was ${numToGuess}! Congratulations!`)
      return beginGame()
      
    } else {
      console.clear()
      hintsCache[0]['Guesses Remaining'] -= 1;
      hintsCache[1]['Guesses'].push(userInput)
      if (hintsCache[0]['Guesses Remaining'] === 0){
        console.log(numHero)
        console.table(hintsCache)
        confirm(`You ran out of guesses. GAME OVER. The mystery number was ${numToGuess}. Play again?`)
        return beginGame()
      }
      console.log(numHero)
      console.table(hintsCache)
      confirm(`The Number is not ${userInput}. Please continue`)
     return getHelp(numToGuess, hintsCache)
    } // end else
  } // end check that still have guesses left
  // console.table(hintsCache)
  // confirm(`OUTSIDE***  The mystery number was ${numToGuess}. Play again?`)
  return beginGame()
}

function getHelp (numToGuess, hintsCache) {
  console.clear()
  console.log(numHero)
  console.table(hintsCache)

  let allUsed = Object.values(hasBeenUsed).every(value => value === true)

  if(allUsed) {
    confirm(`You have used up all lifelines. You can only GUESS the number now.`)
    return guess(numToGuess)
  }
  
  const userChoice = prompt(`Do you want to GUESS or choose between a LIFELINE?`)
  if (userChoice.toUpperCase() === "LIFELINE"){
    return lifelines(numToGuess)
  }
  if (userChoice.toUpperCase() === "GUESS"){
    return guess(numToGuess)
  }
  else {
    return getHelp(numToGuess, hintsCache)
  }
}

function lifelines (numToGuess) {
  console.clear()

  console.log(numHero)
  console.table(hintsCache)

  let allUsed = Object.values(hasBeenUsed).every(value => value === true)

  if(allUsed) {
    confirm(`You have used up all lifelines. You can only GUESS the number now.`)
    return guess(numToGuess)
  }
  
  alert(`You have these lifelines: greaterThan, lessThan, between, divisibleBy, prime`)
  const userSelect = prompt(`Which would you like to use?`).toUpperCase()
  return elegCheck(userSelect)
}

function elegCheck (userSelectFunc) {

  const hintsObj = {
    GREATERTHAN: greaterThan,
    BETWEEN: between,
    DIVISIBLEBY: divisibleBy,
    PRIME: prime,
    LESSTHAN: lessThan
  }

  if (!hintsObj.hasOwnProperty(userSelectFunc)) {
    confirm(`Hmmm...we don't have that lifeline on deck. Please check your spelling & try again`)
    return lifelines(numToGuess)
  }

  if (!hasBeenUsed[userSelectFunc]) {
    const selectedLifeline = hintsObj[userSelectFunc]
    return selectedLifeline(numToGuess)
  } else {
    
    console.clear()
    console.log(numHero)
    console.table(hintsCache)
    confirm(`Sorry, you've already used ${userSelectFunc}. Please pick a different lifeline.`)
    return getHelp(numToGuess, hintsCache)
  }
}

function promptCheck(userInput) {
  
  const verify = parseInt(userInput)

  return !isNaN(verify) && verify > 0
  
}


beginGame()