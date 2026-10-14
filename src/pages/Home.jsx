
import { useContext } from "react";
import { albumsData, songsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { PlayerContext } from "../context/playerContext";

function Home() {
  const { setTrack } = useContext(PlayerContext);
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Navbar />

      <h3 className="section-title">Featured Charts</h3>
      <div className="album-grid">
        {albumsData.map((album) => (
          <div className="music-card" key={album.id}>
            <img
              src={album.image}
              alt={album.name}
              onClick={() => navigate(`/album/${album.id}`)}
            />
            <h3>{album.name}</h3>
            <p>{album.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="section-title">Today's Big Hits</h3>
      <div className="song-grid">
        {songsData.map((song) => (
          <div className="music-card" key={song.id}>
            <img
              src={song.image}
              alt={song.name}
              onClick={() => setTrack(song)}
            />
            <h3>{song.name}</h3>
            <p>{song.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
