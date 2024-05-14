//@ts-check
import validateData from "./validateData.js";

function createObject(givenClass, data) {   
    if (validateData(data, givenClass.schema)) {
        return new givenClass(data);
    }
    return null;
}
export default createObject;

