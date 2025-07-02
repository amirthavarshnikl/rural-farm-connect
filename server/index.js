const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let applications = [];

app.post('/api/apply', (req, res) => {
  const application = req.body;
  application.status = 'Pending';
  applications.push(application);
  res.json({ message: 'Application submitted!', data: application });
});

app.get('/api/applications', (req, res) => {
  res.json(applications);
});

app.listen(PORT, () => {
  console.log(`✅ Backend server is running at http://localhost:${PORT}`);
});
