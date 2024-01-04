import 'dotenv/config.js';
import mongoose from 'mongoose';
import app from './app.js';

const CONN_STR = process.env.MONGODB_CONN_STRING;
const PORT = process.env.PORT;

mongoose.connect(CONN_STR).then(() => {
  console.log('Database Connection - OK');
  app.listen(PORT, () => {
    console.log('Server is listning on port:', PORT);
  });
});
