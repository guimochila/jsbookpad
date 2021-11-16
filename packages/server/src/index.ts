import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});

app.listen(port, () => {
  console.log(`🚀 Web server running on port ${port}.`);
});
