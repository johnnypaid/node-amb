import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';

const app = express();

// db connection
createConnection().then(() => {
    
    // middleware
    const corsOption = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }

    app.use(cors(corsOption));
    app.use(express.json());

    // routes
    app.get('/', (req, res) => {
        res.send('<h2>Ambassador app..</h2>');
    });

    const port = process.env.PORT || 8000;

    app.listen(port, () => {
        console.log(`Server is listening at ${port}`);
    });
});
