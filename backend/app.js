import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });  
import foodRoutes from './routes/foodRoutes.js'
import orderRoutes from './routes/OrderRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import staffRoutes from './routes/StaffRoutes.js'

const app = express();

app.use(cors({
  origin: `${process.env.CORS_ORIGIN}`,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/food', foodRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/staff', staffRoutes);

mongoose.connect(`${process.env.MONGODBURL}`)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server on ${PORT}`));
