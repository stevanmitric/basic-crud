import express from 'express';

import { json } from 'express';

import cors from 'cors';

import userRoutes from './src/user/user.routes.mjs';

const app = express();
const bodyParser = json();


app.use(cors());

// app.use(bodyParser());

const routes = {
    users: userRoutes,
};


routes.users(app);

export { app }