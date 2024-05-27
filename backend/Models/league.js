import mongoose from 'mongoose';

const leagueSchema = new mongoose.Schema({
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'games',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'completed'],
    default: 'upcoming'
  },
  
  winner: {
    type: String,
  }
});

const leagues = mongoose.model('leagues', leagueSchema);

export default leagues;
