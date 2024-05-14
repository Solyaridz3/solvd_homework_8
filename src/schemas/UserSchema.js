//@ts-check

const UserSchema = {
    name: { required: true, type: "string" },
    email: { required: true, type: "string" },
    userId: { required: true, type: "string" },
};

export default UserSchema;
