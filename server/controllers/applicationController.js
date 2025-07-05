let applications = []; // In-memory data for now

const submitApplication = (req, res) => {
  const application = req.body;
  application.status = 'Pending';
  applications.push(application);
  res.json({ message: 'Application submitted!', data: application });
};

const getAllApplications = (req, res) => {
  res.json(applications);
};

module.exports = { submitApplication, getAllApplications };