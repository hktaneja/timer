// Fetching the required beep timer value
let cliArguments = process.argv.slice(2);
let sortedArguments;
//converting these beep timers into numbers and sorting them
sortedArguments = (cliArguments.map(x=> Number(x))).sort();

//if no numbers are provided:It should just not beep at all and end immediately since no beeps should get scheduled.
if (process.argv.length > 2) {
  for (let i = 0; i < sortedArguments.length; i++) {
    //ignore or skip any numbers that are negative and not a number
    if (sortedArguments[i] >= 0 && !isNaN(sortedArguments[i])) {
      setTimeout(()=> {
        process.stdout.write('.');
      },sortedArguments[i] * 1000);
    }
  }
}

