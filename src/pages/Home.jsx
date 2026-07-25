import React, { useContext, useState } from "react";
import { albumsData, songsData, assets } from "../assets/assets";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Navbar from "../component/Navbar";
import { PlayerContext } from "../context/playerContext";

function Home() {
    const {setTrack} = useContext(PlayerContext)
    
    const navigate = useNavigate()
    return (
        <>
            <div className="home-page" style={{ width: "99%", height: "90vh", background: "#000", marginLeft:"10px",paddingLeft: "20px", display: "flex", color:"white",gap: "20px", flexDirection: "column" }}>
                <Navbar/>
                <h3 style={{fontSize:"20px",fontWeight:"bold"}}>Featured Charts</h3>
                <div style={{ height: "33%", background: "#121212", display: "flex", gap: "50px",}}>
                    {albumsData.map((album) => (
                        <div key={album.id} style={{ width: "12%", height: "100%", display:"flex",flexDirection:"column",alignItems:"center" ,gap:"7px"}}>
                            <img onClick={()=>navigate(`/album/${album.id}`) } src={album.image} style={{ width: "160px",cursor: "pointer" , height: "150px" }} />
                            <h3 style={{fontSize:"17px",fontWeight:"500"}}>{album.name}</h3>
                            <p>{album.desc}</p>
                        </div>
                    ))}
                </div>
                <h3 style={{fontSize:"20px",fontWeight:"bold"}}>Today's Big hits</h3>
                <div style={{ height: "32%", background: "#121212", display: "flex", gap: "50px", }}>
                    {songsData.map((song) => (
                        <div key={song.id} style={{ width: "12%", height: "100%", display:"flex",flexDirection:"column",alignItems:"center" ,gap:"5px" }}>
                            <img onClick={()=>setTrack(song)} src={song.image} style={{ width: "160px",cursor: "pointer", height: "150px" }} />
                            <h3 style={{fontSize:"15px",fontWeight:"500"}}>{song.name}</h3>
                            <p>{song.desc}</p>
                        </div>
                    ))}
                </div>

            </div>

        </>

    )
}
export default Home