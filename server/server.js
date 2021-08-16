const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken
  console.log("hi")
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "0d93ef1877de493f8b39aae874391a57",
    clientSecret: "c2f72e4060544515ae14f51ba8664867",
    refreshToken
  })

  spotifyApi
  .refreshAccessToken()
  .then(data => {
    res.json({
      accessToken: data.body.accessToken,
      expiresIn: data.body.expiresIn,
    })
  })
  .catch(err => {
    console.log(err)
    res.sendStatus(400)
  })
})

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
  .catch(err => {
      console.log(err)
      res.sendStatus(400)
  })
});

app.listen(3001)