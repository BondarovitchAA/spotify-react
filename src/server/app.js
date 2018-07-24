import express from 'express';
import path from 'path';
import request from 'request';
import settings from './constants/settings';

const app = express();

app.use(express.static(path.resolve(__dirname, '../..', 'public')));

app.get('/api/login', (req, res) => {
  res.redirect('https://accounts.spotify.com/authorize?' +
    `client_id=${settings.clientId}&response_type=token&` +
    `redirect_uri=${encodeURIComponent(settings.redirectUrl)}`);

app.get('/api/token', function(req, res) {
  const code = req.query.code || null;
  const redirect_uri = req.query.redirect_uri || null;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(settings.client_id + ':' + settings.client_secret).toString('base64'))
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

      const access_token = body.access_token;
      const refresh_token = body.refresh_token;

      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });

      res.json({
        access_token,
        refresh_token
      });
    } else {
      res.status(400).json({
        error: 'error'
      })
    }
  });
});

app.get('/api/token/refresh', function(req, res) {

  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(settings.client_id + ':' + settings.client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const access_token = body.access_token;

      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      });

      res.json({
        'access_token': access_token
      });
    } else {
      res.status(400).json({
        error: 'error'
      })
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../..', 'public', 'index.html'));
});

module.exports = app;
