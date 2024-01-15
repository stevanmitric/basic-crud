import express from "express";

import { json } from "express";

import cors from "cors";

import userRoutes from "./src/user/user.routes.mjs";
import orderRoutes from "./src/order/order.routes.mjs";
import invoiceRoutes from "./src/invoices/invoice.routes.mjs";
import productRoutes from "./src/product/product.routes.mjs";
import companyRoutes from "./src/company/company.routes.mjs";

const app = express();
const bodyParser = json();

app.use(cors());

app.use(bodyParser);

const routes = {
  users: userRoutes,
  orders: orderRoutes,
  invoices: invoiceRoutes,
  products: productRoutes,
  companies: companyRoutes
};

routes.users(app);
routes.orders(app);
routes.invoices(app);
routes.products(app);
routes.companies(app);

export { app };
