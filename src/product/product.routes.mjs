import {
  getAll,
  create,
  getById,
  update,
  removeProduct
} from "./product.controller.mjs";

export default (app) => {
  app.route("/products").get(getAll).post(create);

  app.route("/product/:id").get(getById).put(update).delete(removeProduct);
};
