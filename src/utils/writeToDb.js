import { writeFile } from "fs/promises";

//@ts-check

/**
 * Writes data to a specified path in the database.
 *
 * @param {string} path - The path where the data will be written.
 * @param {any} data - The data to be written to the database.
 * @return {Promise<void>} A promise that resolves once the data is written to the specified path.
 */
function writeToDb(path, data) {
    return writeFile(path, JSON.stringify(data), function (err) {
        if (err) {
            console.log(err.message);
        }
    });
}

export default writeToDb;
