const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const schoolRoutes = require('./routes/v1');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', schoolRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
