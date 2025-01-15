import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import Userroute from "./routes/Userroute.js"

dotenv.config();

mongoose.connect(process.env.MONGO_URI,)

  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

const app = express();

app.use('backend/routes/Userroute.js',);

app.listen(3001, () =>{
    console.log('server is running on port 3001')
});
export default app;