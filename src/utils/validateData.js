//@ts-check

/**
 * Validates data based on a schema.
 *
 * @param {Object} data - The data to validate.
 * @param {Object} schema - The schema to validate the data against.
 * @return {boolean} Returns true if data is valid based on the schema, otherwise false.
 */
function validateData(data, schema) {
    for (const [key, options] of Object.entries(schema)) {
        const exists = data.hasOwnProperty(key);
        if (exists) {
            if (options.type !== typeof data[key]) {
                return false;
            }
        } else if (options.required) {
            return false;
        }
    }
    return true;
}

export default validateData;
