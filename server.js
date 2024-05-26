import  express from 'express';
const app = express()
const port = 5000;
import cors from 'cors';
import connectDB from './db_connection.js';
import User from '../backend/Routes/user.js'
import AdminRoute from '../backend/Routes/admin.js';
connectDB();
app.use(cors());
app.use(express.json());


app.use('/user', User);
app.use('/admin', AdminRoute );
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})