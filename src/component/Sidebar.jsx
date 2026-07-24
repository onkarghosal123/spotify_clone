import React from "react";
import { assets } from "../assets/assets"
import { Link } from "react-router-dom"

function Sidebar() {

    return (
        <>
            <div className="sidebar" style={{ color: "white", width: "20%", height: "90vh", display: "flex", flexDirection: "column" }}>
                <div className="upper" style={{ width: "100%", height: "15%", background: "#121212", display: "flex", flexDirection: "column", gap: "15px", margin: "8px 0px 0px 5px", padding: "15px 0px 0px 20px", borderRadius: "5px" }}>
                    <Link to="/"> 
                      <div className="home" style={{ display: "flex", width: "40%", cursor: "pointer", gap: "5px" }}>
                        <img src={assets.home_icon} alt="home" style={{ height: "25px", width: "25px" }} />
                        <p style={{ fontWeight: "500" }}>Home</p>
                      </div>
                    </Link>
                    <div className="search" style={{ display: "flex", width: "40%", cursor: "pointer", gap: "5px" }}>
                        <img src={assets.search_icon} alt="search" style={{ height: "25px", width: "25px" }} />
                        <p style={{ fontWeight: "500" }}>Search</p>
                    </div>
                </div>
                <div className="lower" style={{ width: "100%", height: "100%", margin: "8px 0px 0px 5px", background: "#1f1f1f", display: "flex", flexDirection: "column", borderRadius: "3px", }}>
                    <div className="library" style={{ width: "100%", padding: "10px", height: "10%", display: "flex", justifyContent: "space-between" }}>
                        <div className="left" style={{ width: "40%", display: "flex", gap: "5px" }}>
                            <img src={assets.stack_icon} alt="library" style={{ height: "25px", width: "25px" }} />
                            <p>Your Library</p>
                        </div>
                        <div className="right" style={{ width: "20%", display: "flex", gap: "10px" }}>
                            <img src={assets.arrow_icon} style={{ height: "20px", width: "20px" }} />
                            <img src={assets.plus_icon} style={{ height: "20px", width: "20px" }} />
                        </div>

                    </div>
                    <div className="create-playlist" style={{ width: "100%", padding: "10px", height: "20%", display: "flex", background: "#292929", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                        <h1>Create your first playlist</h1>
                        <p>it's easy we will help you</p>
                        <button style={{ background: "white", color: "black", cursor: "pointer", borderRadius: "10px", width: "45%", height: "20%" }}>Create playlist</button>
                    </div>
                    <div className="browse-podcast" style={{ width: "100%", padding: "10px", height: "20%", display: "flex", background: "#292929", flexDirection: "column", gap: "10px", paddingLeft: "20px", marginTop: "20px" }}>
                        <h3>Lets find some podcast to follow</h3>
                        <p>it's easy we will help you</p>
                        <button style={{ background: "white", color: "black", borderRadius: "10px", width: "45%", height: "20%", cursor: "pointer" }}>Create playlist</button>
                    </div>

                </div>
            </div>
        </>

    )
}
export default Sidebar