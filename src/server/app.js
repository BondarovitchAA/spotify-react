import express from 'express';
import path from 'path';
import settings from './constants/settings';

const app = express();

app.use(express.static(path.resolve(__dirname, '../..', 'public')));

app.get('/api/login', (req, res) => {
  res.redirect('https://accounts.spotify.com/authorize?' +
    `client_id=${settings.clientId}&response_type=token&` +
    `redirect_uri=${encodeURIComponent(settings.redirectUrl)}`);
});

app.get('/refresh/:token', (req, res) => {
  const refreshToken = req.params.token;
  const authToken = refreshToken;

  res.send(authToken);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../..', 'public', 'index.html'));
});

module.exports = app;
