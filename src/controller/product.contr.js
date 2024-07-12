import header from "../model/products.model.js";

class productsContr {
    async get(req, res) {
        try {
            const id = req.params?.id;
            let data;
            if (id) data = await header.select(id);
            else if (Object.keys(req.query).length)
                data = await header.select(null, req.query);
            else data = await header.select();
            return res.send({
                status: 200,
                data,
                message: "products",
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
    async post(req, res) {
        try {
            let { name, count, imageLink, price, size, description, details, shipping, cat_ref_id } = req.body;

            res.send({
                status: 201,
                data: await header.insert({
                    name: name,
                    count: count,
                    imageLink: imageLink,
                    price: price,
                    size: size,
                    description: description,
                    details: details,
                    shipping: shipping,
                    cat_ref_id: cat_ref_id,
                }),
                message: "success",
            });

        } catch (error) {
            return res.status(400).json({
                status: 400,
                data: null,
                message: error.message,
            });
        }
    }

    async put(req, res) {
        try {
            const id = req.params?.id;
            let data;
            let { name, count, imageLink, price, size, description, details, shipping, cat_ref_id } = req.body;
            const obj = {
                $set: {
                    name: name ? name : data.name,
                    count: count ? count : data.count,
                    imageLink: imageLink ? imageLink : data.imageLink,
                    price: price ? price : data.price,
                    size: size ? size : data.size,
                    description: description ? description : data.description,
                    details: details ? details : data.details,
                    shipping: shipping ? shipping : data.shipping,
                    cat_ref_id: cat_ref_id ? cat_ref_id : data.cat_ref_id,
                },
            };
            return res.send({
                status: 201,
                data: await header.update({ _id: id }, obj),
            });

        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
    async delete(req, res) {
        try {
            const id = req.params?.id;

            return res.send({
                status: 201,
                data: await header.delete(id),
                message: "success",
            });
        } catch (error) {
            return res.status(404).json({
                status: 404,
                data: null,
                message: error.message,
            });
        }
    }
}

export default new productsContr();
