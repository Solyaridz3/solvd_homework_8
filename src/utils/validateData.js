//@ts-check
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
