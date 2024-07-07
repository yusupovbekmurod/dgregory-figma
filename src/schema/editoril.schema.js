import { Schema, model, Types } from "mongoose";
const editorilSchema = new Schema(
    {


        imageLink: {
            type: String,
            required: true,
        },
        description: {
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

export default model("editoril", editorilSchema);
