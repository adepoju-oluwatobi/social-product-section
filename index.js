const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve the index.html file when users access the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files (CSS, JavaScript, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, '/')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
