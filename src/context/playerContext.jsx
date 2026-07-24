import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";
export const PlayerContext = createContext();

function PlayerProvider({ children }) {
    const [track, setTrack] = useState(songsData[0])
    const [isPlaying, setisPlaying] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const audioRef = useRef();
    const [currTime, setCurrtime] = useState(0)

    const contextValue = { track,setTrack,isPlaying,setisPlaying,audioRef,repeat,setRepeat,shuffle,setShuffle,currTime,setCurrtime }

    return (
        <>
            <PlayerContext.Provider value={contextValue}>
                {children}
            </PlayerContext.Provider>
        </>
    )
}
export default PlayerProvider