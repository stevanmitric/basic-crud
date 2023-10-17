import { app } from '../app.mjs';

import { connectDB } from './config/db.mjs';

const port = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();
