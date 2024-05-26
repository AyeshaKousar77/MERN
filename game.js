
import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define a schema for a game
const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const games = mongoose.model('games', gameSchema);

export default games;
