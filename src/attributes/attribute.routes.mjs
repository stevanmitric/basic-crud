import {
  getAll,
  post,
  getById,
  update,
  remove
} from "./attribute.controller.mjs";

export default (app) => {
  app.route("/attributes").get(getAll).post(post);

  app.route("/attribute/:id").get(getById).put(update).delete(remove);
};
