import header from "../model/bookmark.model.js";
// import product from "../model/products.model.js";
class bookMContr {
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
        message: "bookmark",
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
      let { user_ref_id, product_ref_id, count } = req.body;
      res.send({
        status: 201,
        data: await header.insert({
          user_ref_id: user_ref_id,
          product_ref_id: product_ref_id,
          count: count,
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
  async buy(req, res) {
    try {
      const id = req.params?.id;
      let user = await header.select(id);
      let pro = await product.select();

      return res.send({
        status: 200,
        data:pro.data,
        message: "SOTILDI",
      });

    } catch (error) {
      return res.status(404).json({
        status: 404,
        data: null,
        message: error.message,
      });
    }
  }
  async put(req, res) {
    try {
      const id = req.params?.id;
      let data;

      let { product_ref_id, user_ref_id, count } = req.body;

      const obj = {
        $set: {
          user_ref_id: user_ref_id ? user_ref_id : data.user_ref_id,
          product_ref_id: product_ref_id ? product_ref_id : data.product_ref_id,
          count: count ? count : data.count,
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

export default new bookMContr();
