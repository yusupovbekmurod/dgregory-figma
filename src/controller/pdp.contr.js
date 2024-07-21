import header from "../model/pdp.model.js";

class pdpContr {
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
        message: "PDP",
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
      let { title, imageLink, description, bg_image, signature_image } =
        req.body;

      res.send({
        status: 201,
        data: await header.insert({
          title: title,
          description: description,
          bg_image: bg_image,
          signature_image: signature_image,
          imageLink: imageLink,
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

      let { title, imageLink, description, bg_image, signature_image } =
        req.body;

      const obj = {
        $set: {
          title: title ? title : data.title,
          description: description ? description : data.description,
          signature_image: signature_image
            ? signature_image
            : data.signature_image,
          bg_image: bg_image ? bg_image : data.bg_image,
          imageLink: imageLink ? imageLink : data.imageLink,
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

export default new pdpContr();
