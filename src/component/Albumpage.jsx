import React, { useContext } from "react";
import Navbar from "./Navbar";
import { assets, albumsData, songsData } from "../assets/assets";
import { PlayerContext } from "../context/playerContext";

const Albumpage = ({ albumId }) => {
    const {setTrack} = useContext(PlayerContext)
    const albumData = albumsData[albumId];

    return (
        <>
            {/* Album Details */}

            <div style={{ marginTop: "30px", display: "flex", gap: "30px", }}>
                <img src={albumData.image}
                    alt=""
                    style={{ width: "200px", borderRadius: "8px", }} />

                <div
                    style={{
                        marginTop: "25px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <p>Playlist</p>

                    <h1 style={{ fontSize: "50px", fontWeight: "700", }}>
                        {albumData.name}
                    </h1>

                    <h4
                        style={{
                            color: "#b3b3b3",
                            fontWeight: "400",
                        }}
                    >
                        {albumData.desc}
                    </h4>

                    <p
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "5px",
                            gap: "8px",
                            fontSize: "15px",
                        }}
                    >
                        <img
                            src={assets.spotify_logo}
                            alt=""
                            style={{
                                width: "25px",
                            }}
                        />

                        <b>Spotify</b>

                        • 1,323,154 Likes

                        • <b>50 Songs</b>

                        • about 2 hr 30 min
                    </p>
                </div>
            </div>

            {/* Table Header */}
            <div
                style={{
                    display: "grid",

                    gridTemplateColumns: "3fr 2fr 2fr 1fr",
                    marginTop: "20px",
                    padding: "10px",
                    color: "#a7a7a7",
                    alignItems: "center",
                }}
            >
                <p style={{gap:"105px"}}>
                    <b style={{marginRight:"10px"}}>#</b> Title
                </p>

                <p>Album</p>

                <p>Date Added</p>

                <img
                    src={assets.clock_icon}
                    alt=""
                    style={{
                        width: "18px",
                        margin: "auto",
                    }}
                />
            </div>
            <hr style={{ borderColor: "#535353" }} />

            {/* Songs */}
            {songsData.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "3fr 2fr 2fr 1fr",
                        alignItems: "center",
                        padding: "15px",
                        cursor: "pointer",
                        borderBottom: "1px solid #2222223f",
                    }}
                >
                    <p
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                        }}
                    >
                        <b style={{ color: "#a7a7a7",}}>
                            {index + 1}
                        </b>
                        <div style={{display:"flex",alignItems:"center",gap:"10px"}} onClick={()=>{setTrack(songsData[item.id])}}>
                            <img
                                src={item.image}
                                alt=""
                                style={{
                                    width: "45px",
                                    borderRadius: "4px",
                                }}
                            />

                            {item.name}
                        </div>

                    </p>

                    <p>{albumData.name}</p>

                    <p>5 days ago</p>

                    <p
                        style={{
                            textAlign: "center",
                        }}
                    >
                        {item.duration}
                    </p>
                </div>
            ))}
        </>
    );
};

export default Albumpage;