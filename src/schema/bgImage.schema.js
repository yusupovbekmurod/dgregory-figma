import { Schema, model, Types } from "mongoose";
const bgSchema = new Schema(
    {


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

export default model("bgImage", bgSchema);
