const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "0d93ef1877de493f8b39aae874391a57",
    clientSecret: "c2f72e4060544515ae14f51ba8664867",
  });

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expressIn: data.body.express_in,
    })
  })
  .catch(() => {
      res.sendStatus(400)
  })
});
