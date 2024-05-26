import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  email: {
       type: String,
       required: true
  },
  password: {
    type:   String,
    required: true
  },
  dgame: {
    type: String,
    required: true
  }
});

const User = mongoose.model('Player', playerSchema);

export default User;
