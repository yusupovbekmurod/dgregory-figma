import { Schema, model, Types } from "mongoose";
const plpSchema = new Schema(
    {

        title: {
            type: String,
            required: true
        },
        imageLink: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: {
            createdAt: "create_at",
            deletedAt: "delete_at",
        },
    }
);

export default model("plp", plpSchema);
