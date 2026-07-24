import React, { useContext, useEffect, useState } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/playerContext";

function Songbar() {
    const { audioRef } = useContext(PlayerContext)
    const { track, setTrack } = useContext(PlayerContext);
    const { isPlaying, setisPlaying } = useContext(PlayerContext)
    const { time, setTime } = useContext(PlayerContext)
    const { seekBar, currentBar } = useContext(PlayerContext)
    const { repeat, setRepeat } = useContext(PlayerContext)
    const { shuffle, setShuffle } = useContext(PlayerContext)
    const { currTime, setCurrtime } = useContext(PlayerContext)
    const [volume, setVolume] = useState(0.5)
    const [fullScreen, setFullscreen] = useState(false)
    const [showlyrics, setShowlyrics] = useState(false)

    const prevTrack = (trackId) => {
        setTrack(songsData[((trackId + songsData.length) - 1) % songsData.length])
    }
    const nextTrack = (trackId) => {
        setTrack(songsData[((trackId + songsData.length) + 1) % songsData.length])
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        }
        else {
            audioRef.current.pause()
        }
    }, [isPlaying, track])

    const playpause = () => {
        setisPlaying(!isPlaying)
    }

    const handleVolume = (e) => {
        console.log(audioRef.current)
        const value = Number(e.target.value)
        setVolume(value)
        audioRef.current.volume = value
    }

    const handleFullscreen = () => {
        if (!fullScreen) {
            document.documentElement.requestFullscreen();
            setFullscreen(!fullScreen)
        }
        else {
            document.exitFullscreen();
            setFullscreen(!fullScreen)
        }
    }

    const handleMusicbar = (e) => {
        const t = Number(e.target.value)
        audioRef.current.currentTime = t
        setCurrtime(t)
    }
    const formatTime = (time) => {
        const min = Math.floor(time / 60)
        const sec = Math.floor(time % 60)
        return `${min}:${sec < 10 ? "0" : ""}${sec}`
    }

    return (
        <><div className="songbar" style={{ width: "100%", background: "black", padding: "15px", height: "10vh", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="song-details" style={{ display: "flex", gap: "20px" }}>
                <img src={track.image} style={{ width: "40px", height: "40px", }} />
                <div className="song-name">
                    <h2>{track.name}</h2>
                    <p>{track.desc}</p>
                </div>
            </div>

            <div className="music-player" >
                <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                    <img src={assets.shuffle_icon} style={{ width: "20px", height: "20px" }} onClick={() => { setShuffle(!shuffle) }} />
                    <img src={assets.prev_icon} onClick={() => prevTrack(track.id)} style={{ width: "20px", height: "20px" }} />

                    <img src={!isPlaying ? assets.play_icon : assets.pause_icon} onClick={() => playpause()} style={{ width: "20px", height: "20px" }} />

                    <img src={assets.next_icon} onClick={() => nextTrack(track.id)} style={{ width: "20px", height: "20px" }} />
                    <img src={assets.loop_icon} style={{ width: "20px", height: "20px" }} onClick={() => { setRepeat(!repeat) }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {/*
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                     <div ref={seekBar} style={{ width: "300px", height: "4px", background: "white", cursor: "pointer", borderRadius: "10px" }}>
                        <hr ref={currentBar} style={{ width: "300px", height: "3px", background: "blue" }} />
                    </div> 
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                 */}
                    <p>{formatTime(currTime)}</p>
                    <input type="range" min="0" max={track.duration || 0} value={currTime} onChange={handleMusicbar} style={{ width: "400px", height: "5px", cursor: "pointer", accentColor: "#1DB954" }} />
                    <p>{formatTime(track.duration)}</p>
                </div>

            </div>

            <div className="icons" style={{ height: "35%", display: "flex", gap: "10px", marginRight: "5px" }}>
                <img src={assets.speaker_icon} />
                <img src={assets.volume_icon} />
                <input type="range" min='0' max="1" step="0.01" value={volume} onChange={handleVolume} />
                <img src={assets.zoom_icon} onClick={handleFullscreen} />
                <img src={assets.queue_icon} />
                <img src={assets.mic_icon} onClick={() => { setShowlyrics(!showlyrics) }} />
                <img src={assets.mini_player_icon} />
            </div>
            {
                showlyrics && (
                    <div className="lyrics" style={{ position: "fixed", bottom: "90px", right: "20px", width: "350px", height: "400px", background: "#121212", color: "white", overflowY: "auto" }}>
                        <h2>{track.name}</h2>
                        <pre>{track.lyrics}</pre>
                    </div>
                )
            }

        </div>


        </>

    )
}
export default Songbar