import mongoose  from 'mongoose';


connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect('mongodb://localhost:27017/Sports_App');

}

export default connectDB;