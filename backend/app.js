// app.js

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./Routes/routes');
const cors=require("cors")

const app = express();
app.use(cors({origin:'*'}))
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://vk6056902:9936616326@restaurentapp.qiburps.mongodb.net/RestaurentappData', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
