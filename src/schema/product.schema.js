
import { Schema, model, Types } from "mongoose";
const productSchema = new Schema(
    {

        name: {
            type: String,
            required: true
        },

        count: {
            type: String,
            required: true
        },

        imageLink: {
            type: String,
            required: true
        },

        price: {
            type: String,
            required: true
        },
        sizes: [{
            type: String,
            required: true
        }],
        description: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        },
        shipping: {
            type: String,
            required: true
        },
        cat_ref_id: [{
            type: Types.ObjectId,
            ref: "category",
            key: "_id",
            required: true,
        }],

    },
    {
        timestamps: {
            createdAt: "create_at",
            deletedAt: "delete_at",
        },
    }
);

export default model("products", productSchema);
