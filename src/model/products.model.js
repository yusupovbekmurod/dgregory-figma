import headMod from "../schema/product.schema.js";
import { Types } from "mongoose";

class Users {
    async select(id, filter, option) {
        try {
            if (id) return await headMod.findById(id, option).populate("cat_ref_id");
            return await headMod.find(filter, option).populate("cat_ref_id");;
        } catch (error) {
            return error.message;
        }
    }
    async insert(body) {
        try {
            return await headMod.create(body);
        } catch (error) {
            return error.message;
        }
    }
    async update(id, obj) {
        return await headMod.findOneAndUpdate(id, obj);
    }
    async delete(id) {
        return await headMod.deleteOne(
            { _id: new Types.ObjectId(id) },
            { close_at: Date.now() },
            { upsert: true }
        );
    }
}

export default new Users();