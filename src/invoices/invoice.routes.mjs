import {
  getAll,
  createInvoice,
  getById,
  update,
  removeInvoice
} from "./invoice.controller.mjs";

export default (app) => {
  app.route("/invoices").get(getAll).post(createInvoice);

  app.route("/invoice/:id").get(getById).put(update).delete(removeInvoice);
};
