import header from "../model/bookmark.model.js";
import users from "../model/users.modul.js";
import product from "../model/products.model.js";
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
  async buy(req, res) {
    try {
      const user_ref_id = req.params?.id;

      let user = await header.select(null, {
        user_ref_id,
      });
      let zkzId = [];
      let proCt = [];
      let proId = [];
      user.forEach((eid) => {
        zkzId.push(eid.id);
        proCt.push(eid.count);
        proId.push(eid.product_ref_id.id);
      });

      // edit

      for (let i = 0; i < proId.length; i++) {
        let pro = await product.select(proId[i]);
        let ct = proCt[i];

        const obj = {
          $set: {
            user_ref_id: pro.user_ref_id,
            product_ref_id: pro.product_ref_id,
            count: pro.count ? (pro.count -= ct) : pro.count,
          },
        };

        await product.update({ _id: proId[i] }, obj);
      }
      // edit end
      // del

      zkzId.forEach(async (zkId) => {
        await header.delete(zkId);
      });

      return res.send({
        status: 200,
        data: "SOTILDI",
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
