import React from "react";
import SpotigyPlayer from "react-spotify-web-playback";
import { useState, useEffect } from 'react'

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null;
  return (
    <SpotigyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
          if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
    />
  );
}
