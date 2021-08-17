import React from "react";
import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
    clientId:"0d93ef1877de493f8b39aae874391a57"
})
export default function Dashbord({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const  [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResult([])
        if (!accessToken) return

        let cancel = false
        if (cancel) return
        spotifyApi.searchTracks(search).then(res => {
            setSearchResult(res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    }, track.album.images[0])

                return {
                    artist: track.artist[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url
                }
            }))
        })

        return () => cancel = true
    }, [search. accessToken])
  
  
    return (
    <Container
      className="d-flex flex-column py-2"
      style={{
        height: "100vh",
      }}
    >
      <Form.Control
        type="Search"
        placeholder="Search songs/ Artist"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div ClassName="flex-grow-1 my-2" style={{ overflowY: "auto" }}>
        Songs
      </div>
      <div>Bottom</div>
    </Container>
  );
}
