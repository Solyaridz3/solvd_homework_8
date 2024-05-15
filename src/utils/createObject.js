//@ts-check
import validateData from "./validateData.js";

/**
 * Creates an object of a given class if the data is valid based on the class schema.
 *
 * @param {Object} givenClass - The class to create an object of.
 * @param {Object} data - The data to initialize the object with.
 * @return {Object | null} The created object or null if data is invalid.
 */
function createObject(givenClass, data) {   
    if (validateData(data, givenClass.schema)) {
        return new givenClass(data);
    }
    return null;
}
export default createObject;

