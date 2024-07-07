import headMod from "../schema/header.schema.js";
import { Types } from "mongoose";

class Header {
    async select(id, filter, option) {
        try {
            if (id) return await headMod.findById(id, option)
            return await headMod.find(filter, option)
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

export default new Header();