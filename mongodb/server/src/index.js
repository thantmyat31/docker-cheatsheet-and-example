const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require("morgan");

require('dotenv').config();

const mongodbUrl = process.env.MONGODB_URI;
const app = express();
const PORT = process.env.PORT || 8000;

// Database connection
mongoose
	.connect(mongodbUrl, {
		useNewUrlParser: true,
        useUnifiedTopology: true
	})
	.then(() => console.log('[MongoDB Connected.....]'))
	.catch((error) => {
        console.error(error)
        console.error("[Database Connection Failed]")
    });


// Routes
const employeeRoutes = require('./routes/employee');


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(morgan('common'));
app.use('/api/employee', employeeRoutes);


// Listener
app.listen(PORT, () => console.log(`Listen on PORT ${PORT}...`));
