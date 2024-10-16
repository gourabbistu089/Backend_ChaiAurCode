// app.js
import express from 'express';
// import bodyParser from 'body-parser';
import bookRoutes from './routes/bookRoutes.js';
import { ApiError } from './utils/ApiError.js';

const app = express();

app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
        });
    }

    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
    });
});

export  {app};
