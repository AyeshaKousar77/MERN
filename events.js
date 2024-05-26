// models/UpcomingEvent.js
import mongoose from 'mongoose';

const upcomingEventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const UpcomingEvent = mongoose.model('UpcomingEvent', upcomingEventSchema);

export default UpcomingEvent;
