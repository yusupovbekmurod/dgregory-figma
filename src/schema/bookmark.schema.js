
import { Schema, model, Types } from "mongoose";
const bookSchema = new Schema(
    {


        product_ref_id: {
            type: Types.ObjectId,
            ref: "products",
            key: "_id",
            required: true,
        },
        user_ref_id: {
            type: Types.ObjectId,
            ref: "users",
            key: "_id",
            required: true,
        },
        count: {
            type: String,
            required: true
        }

    },
    {
        timestamps: {
            createdAt: "create_at",
            deletedAt: "delete_at",
        },
    }
);

export default model("bookmark", bookSchema);
