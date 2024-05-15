import readline from "readline";

/**
 * Creates a new input text interface to prompt the user with the specified question.
 *
 * @param {string} question - The question to display to the user.
 * @return {Promise<string>} A promise that resolves with the user's input text.
 */
function inputText(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
            rl.close();
        });
    });
}

export default inputText;
