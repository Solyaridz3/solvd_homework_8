/**
 * Generates a unique identifier based on the current timestamp and a random number.
 *
 * @return {string} A unique identifier.
 */
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}


export default uid;
