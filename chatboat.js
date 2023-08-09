const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 function respondToUserInput(userInput) {
  const lowerInput = userInput.toLowerCase();

  if (lowerInput.includes('milk')) {
    console.log('Bot: Our cows produce fresh milk twice a day.');
  } else if (lowerInput.includes('feeding')) {
    console.log('Bot: Our cows are fed a balanced diet three times a day.');
  } else if (lowerInput.includes('price')) {
    console.log('Bot: For current milk prices, please visit our website or contact us directly.');
  } else if (lowerInput.includes('schedule')) {
    console.log('Bot: Our farm tours are scheduled on weekends. You can find more details on our website.');
  } else {
    console.log('Bot: I\'m here to help with questions related to our dairy farm.');
  }

  rl.close();
}

rl.question('Welcome to our dairy farm! How can I assist you today? ', (userInput) => {
  respondToUserInput(userInput);
});

module.exports= {respondToUserInput}