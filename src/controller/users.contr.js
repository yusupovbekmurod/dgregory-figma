import header from "../model/users.modul.js";

class usersContr {
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
                message: "users",
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
            let { username, email, password, birth_date } = req.body;

            res.send({
                status: 201,
                data: await header.insert({

                    username: username,
                    email: email,
                    password: password,
                    birth_date: birth_date,
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

            let { username, email, password, birth_date } = req.body;

            const obj = {
                $set: {

                    username: username ? username : data.username,
                    email: email ? email : data.email,
                    password: password ? password : data.password,
                    birth_date: birth_date ? birth_date : data.birth_date,
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

export default new usersContr();
