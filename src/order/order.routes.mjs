import {
  getAll,
  createOrder,
  getById,
  update,
  removeOrder
} from "./order.controller.mjs";

export default (app) => {
  app.route("/orders").get(getAll).post(createOrder);

  app.route("/order/:id").get(getById).put(update).delete(removeOrder);
};
