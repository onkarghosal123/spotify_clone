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
        <div className="songbar">
            <div className="song-details">
                <img src={track.image} alt={track.name} />
                <div className="song-name">
                    <h2>{track.name}</h2>
                    <p>{track.desc}</p>
                </div>
            </div>

            <div className="music-player">
                <div className="player-controls">
                    <img src={assets.shuffle_icon} alt="Shuffle"
                        onClick={() => setShuffle(!shuffle)} />
                    <img src={assets.prev_icon} alt="Previous"
                        onClick={() => prevTrack(track.id)} />
                    <img
                        src={!isPlaying ? assets.play_icon : assets.pause_icon}
                        alt={isPlaying ? "Pause" : "Play"}
                        onClick={playpause}
                    />
                    <img src={assets.next_icon} alt="Next"
                        onClick={() => nextTrack(track.id)} />
                    <img src={assets.loop_icon} alt="Repeat"
                        onClick={() => setRepeat(!repeat)} />
                </div>

                <div className="progress-container">
                    <p>{formatTime(currTime)}</p>
                    <input
                        type="range"
                        min="0"
                        max={track.duration || 0}
                        value={currTime}
                        onChange={handleMusicbar}
                    />
                    <p>{formatTime(track.duration || 0)}</p>
                </div>
            </div>

            <div className="icons">
                <img src={assets.speaker_icon} alt="Speaker" />
                <img src={assets.volume_icon} alt="Volume" />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolume}
                />
                <img src={assets.zoom_icon} alt="Fullscreen"
                    onClick={handleFullscreen} />
                <img src={assets.queue_icon} alt="Queue" />
                <img src={assets.mic_icon} alt="Lyrics"
                    onClick={() => setShowlyrics(!showlyrics)} />
                <img src={assets.mini_player_icon} alt="Mini player" />
            </div>

            {showlyrics && (
                <div className="lyrics">
                    <h2>{track.name}</h2>
                    <pre>{track.lyrics}</pre>
                </div>
            )}
        </div>
    );

}
export default Songbar