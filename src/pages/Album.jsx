import React from "react";
import Navbar from "../component/Navbar";
import { useLocation, useParams } from "react-router-dom";
import { albumsData } from "../assets/assets";

function Album() {
    const params = useParams();
    const albumId = params.id;
    const location = useLocation();  // to get full url "/album/1" (to check which page is active album or home page from url ?)
    const isAlbumPage = location.pathname.includes("album");
    console.log(isAlbumPage,albumId);
    const bgColor = albumsData[albumId].bgColor

    return (
        <>
            <div className="album-page" style={{ width: "100%", height: "90vh", background: isAlbumPage? `${bgColor}` : "#123456", paddingLeft: "20px", display: "flex", gap: "20px", flexDirection: "column" }}>
                <Navbar />
            </div>

        </>

    )
}
export default Album