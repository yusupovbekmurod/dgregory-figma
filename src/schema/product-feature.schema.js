import { Schema, model, Types } from "mongoose";
const productFeaturesSchema = new Schema(
    {

        title: {
            type: String,
            required: true
        },
        product_ref_id: [{
            type: Types.ObjectId,
            ref: "products",
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

export default model("product-features", productFeaturesSchema);
