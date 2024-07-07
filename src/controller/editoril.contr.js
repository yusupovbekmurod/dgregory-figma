import header from "../model/editoril.modal.js";

class editorailContr {
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
                message: "editoril-CTA",
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
            let { imageLink, description } = req.body;

            res.send({
                status: 201,
                data: await header.insert({

                    imageLink: imageLink,
                    description: description
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

            let { imageLink, description } = req.body;

            const obj = {
                $set: {
                    imageLink: imageLink ? imageLink : data.imageLink,
                    description: description ? description : data.description,
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

export default new editorailContr();
