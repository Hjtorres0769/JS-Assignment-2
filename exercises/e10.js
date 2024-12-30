// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
    let clientsWithLetter = [];
    for (let account of array) {
        for (let i = 0; i < account.name.length; i++) {
            if (letter.toLowerCase() === account.name[i].toLowerCase()) {
                clientsWithLetter.push(account.name);
                break;
            }
        }
    }    return clientsWithLetter;

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
