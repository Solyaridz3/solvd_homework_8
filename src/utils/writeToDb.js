import { writeFile } from "fs/promises";

//@ts-check
function writeToDb(path, data) {
    return writeFile(path, JSON.stringify(data), function (err) {
        if (err) {
            console.log(err.message);
        }
    });
}

export default writeToDb;
