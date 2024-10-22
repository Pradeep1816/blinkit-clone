const ProductType = require("../models/productType");
exports.get = async (req, res) => {
  try {
    const { productId } = req.params;
    const dbRes = await ProductType.findAll({ where: { productId } });
    res.send(dbRes);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
exports.create = async (req, res) => {
  try {
    const { productId, name, price, discount, stock } = req.body;

    const dbRes = await ProductType.create({
      productId,
      name,
      price,
      stock,
      discount,
    });
    console.log(dbRes);
    res.send(dbRes);
  } catch (error) {
    console.log(error);
    res.status(404).send(error.message);
  }
};
