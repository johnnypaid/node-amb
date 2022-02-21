import express from 'express';
import cors from 'cors';

const app = express();

// middleware
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});