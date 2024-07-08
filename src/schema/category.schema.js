import { Schema, model, Types } from "mongoose";
const categorySchema = new Schema(
    {

        cat_name: {
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

export default model("category", categorySchema);
