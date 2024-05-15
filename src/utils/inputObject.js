//@ts-check
import inputText from "./inputText.js";
import createObject from "./createObject.js";
/**
 * Creates an object based on the given class schema and by prompting the user for input values.
 * After that it validates if data is corresponding schema return instance, otherwise: null.
 * @param {Object | null} givenClass - The class schema to create an object from.
 */
async function inputObject(givenClass) {
    const objData = {};
    for (let key in givenClass.schema) {
        objData[key] = await inputText(
            `Enter value of ${key} for new instance: `
        );
    }
    const instance = createObject(givenClass, objData);
    return instance;
}

export default inputObject;
