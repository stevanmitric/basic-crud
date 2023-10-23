import express from "express";

import { json } from "express";

import cors from "cors";

import userRoutes from "./src/user/user.routes.mjs";
import orderRoutes from "./src/order/order.routes.mjs";
import invoiceRoutes from "./src/invoices/invoice.routes.mjs";

const app = express();
const bodyParser = json();

app.use(cors());

// app.use(bodyParser());

const routes = {
  users: userRoutes,
  orders: orderRoutes,
  invoices: invoiceRoutes
};

routes.users(app);
routes.orders(app);
routes.invoices(app);

export { app };
