const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

//  Import your routes
const applicationRoutes = require('./routes/applicationRoutes');

// ⬇ Middlewares
app.use(cors());
app.use(express.json());

// All routes start with /api
app.use('/api', applicationRoutes);

app.listen(PORT, () => {
  console.log(`✅ Backend server is running at http://localhost:${PORT}`);
});
