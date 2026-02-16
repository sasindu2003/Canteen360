import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
  rating: Number,
  comment: String
});

export default mongoose.model('Review', reviewSchema);