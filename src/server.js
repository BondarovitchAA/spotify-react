import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from 'components/App/App';
import template from './template';

const server = express();

server.use('/public/assets', express.static('public/assets'));

server.get('/', (req, res) => {
    const appString = renderToString(<App />);
    res.send(template({
        body: appString,
        title: 'Spotify-react app'
    }));
});

const PORT = process.env.PORT || 3001;

server.listen(PORT);