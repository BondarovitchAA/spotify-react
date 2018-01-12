import express from 'express';
import path from 'path';

const server = express();

server.use(express.static(path.resolve(__dirname, '../..', 'public')));

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../..', 'public', 'index.html'));
});

module.exports = server;
