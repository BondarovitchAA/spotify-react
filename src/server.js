import express from 'express';

const app = express();

app.use((req, res) => {
    res.end('<p>Hello world</p>');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {

});