import { Schema, model, Types } from "mongoose";
const headerSchema = new Schema(
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

export default model("headers", headerSchema);
