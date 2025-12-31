import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import auth from './routes/auth.js';
import tasks from './routes/tasks.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect DB
await connectDB();

// Routes
app.use('/api/auth', auth);
app.use('/api/tasks', tasks);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API is running!");
});

export default app;