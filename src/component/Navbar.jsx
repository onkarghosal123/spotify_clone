import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Navbar() {
   const [Tab, setTab] = useState("All")
   const navigate = useNavigate()
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", height: "5%",marginTop:"5px",paddingRight:"5px" }}>
                <div className="arrow" style={{ display: "flex", gap: "15px", alignItems: "center", }}>
                    <img onClick={()=>(navigate(-1))} src={assets.arrow_left} style={{ width: "20px", height: "20px",cursor:"pointer" }} />
                    <img onClick={()=>(navigate(+1))} src={assets.arrow_right} style={{ width: "20px", height: "20px",cursor:"pointer" }} />

                </div>
                <div style={{ display: "flex", gap: "25px", marginRight: "10px", alignItems: "center" }}>
                    <button style={{ borderRadius: "15px", background: "white", color: "black", padding: "4px" }}>Explore premium</button>
                    <button style={{ borderRadius: "15px", background: "black", color: "white", padding: "4px" }}>Install app</button>
                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "blue", color: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>A</div>

                </div>
            </div>
            <div className="div" style={{ height: "5%", display: "flex", gap: "10px", color: "white", margin: "5px" }}>

                <div onClick={() => setTab("All")} style={{ background: Tab === "All" ? "white" : "black", color: Tab === "All" ? "black" : "white",cursor: "pointer", padding: "5px", borderRadius: "10px" }}>
                    <p>All</p>
                </div>


                <div onClick={() => setTab("Music")} style={{ background: Tab === "Music" ? "white" : "black", color: Tab === "Music" ? "black" : "white", cursor: "pointer",padding: "5px", borderRadius: "10px" }}>
                    Music
                </div>

                <div onClick={() => setTab("Podcast")} style={{ background: Tab === "Podcast" ? "white" : "black", color: Tab === "Podcast" ? "black" : "white", cursor: "pointer", padding: "5px", borderRadius: "10px" }}>
                    Podcast
                </div>


            </div>
        </>
    )
}
export default Navbar