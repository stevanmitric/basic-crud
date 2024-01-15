import {
  getAll,
  create,
  getById,
  update,
  remove
} from "./company.controller.mjs";

export default (app) => {
  app.route("/companies").get(getAll).post(create);

  app.route("/company/:id").get(getById).put(update).delete(remove);
};
