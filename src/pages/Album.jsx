import React from "react";
import Navbar from "../component/Navbar";
import { useLocation, useParams } from "react-router-dom";
import { albumsData } from "../assets/assets";
import Albumpage from "../component/Albumpage"

function Album() {
    const params = useParams();
    const albumId = params.id;
    const location = useLocation();  // to get full url "/album/1" (to check which page is active album or home page from url ?)
    const isAlbumPage = location.pathname.includes("album");
    console.log(isAlbumPage,albumId);
    const bgColor = albumsData[albumId].bgColor

    return (
        <>
            <div className="album-page" style={{ width: "99%", height: "100vh",background:`linear-gradient(${bgColor},#121212)` ,marginTop:"8px", marginLeft:"10px",paddingLeft: "20px", display: "flex", color:"white", borderRadius:"5px",flexDirection: "column" }}>
                <Navbar />
                <Albumpage albumId={albumId}/>
            </div>

        </>

    )
}
export default Album