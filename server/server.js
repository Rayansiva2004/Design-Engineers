const express = require('express');
const cors = require('cors');
const path = require('path');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Design Engineers API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
