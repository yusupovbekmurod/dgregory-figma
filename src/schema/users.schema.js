import { Schema, model, Types } from "mongoose";
const usersSchema = new Schema(
    {

        username: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        birth_date: {
            type: String,
            required: true
        },

    },
    {
        timestamps: {
            createdAt: "create_at",
            deletedAt: "delete_at",
        },
    }
);

export default model("users", usersSchema);
