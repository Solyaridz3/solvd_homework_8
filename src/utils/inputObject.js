import inputText from "./inputText.js";
import createObject from './createObject.js';
//@ts-check
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
