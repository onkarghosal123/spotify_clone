import { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Songbar from './component/Songbar'
import { songsData } from './assets/assets'
import { PlayerContext } from './context/playerContext';

function App() {

  const { audioRef, track, setTrack } = useContext(PlayerContext)
  const { repeat, setRepeat } = useContext(PlayerContext)
  const {shuffle,setShuffle } = useContext(PlayerContext)
  const {currTime,setCurrtime} = useContext(PlayerContext)
  const [Loading, setLoading] = useState(false);
  const handleEnd = () => {
    if (repeat) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
    else if(shuffle){
      const num = Math.floor(Math.random()*songsData.length)
      setTrack(songsData[num])
    }
    else 
      setTrack(songsData[((track.id + songsData.length) + 1) % songsData.length])
  }


  return !Loading ? (
    <>
      <div className="div" style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden", background: "#000" }}>
        <div className="upper" style={{ display: "flex", height: "90vh", overflow: "hidden" }}>
          <Sidebar />
          <div className="outlet" style={{ flex: "1", overflowY: "auto" }}>
            <Outlet />
          </div>
        </div>
        <Songbar />
        <audio ref={audioRef} src={track.file} preload='auto' onTimeUpdate={()=>{setCurrtime(audioRef.current.currentTime)}} onEnded={handleEnd}></audio>
      </div>

    </>
  ) : null
}

export default App
