import React, { useState } from "react";

const Siri_Sugg  = (props) => {
    return ( 
        <div className = "blok_content">
            <div className="news">
                <div className="news_link">
                    <a href={props.content.href} style={{textDecoration:"none", textOverflow:"ellipsis", color:"black"}} > {props.content.label}</a>   
                </div>
                <div className="news_site">
                    <a href={props.content.href} style={{textDecoration:"none", color:"gray"}}> {props.content.link}</a>
                </div>
            </div>
            <div className="news_img">
                <a href={props.content.href}><img src={props.content.src} style={{borderRadius:10, width:80, height:50}}/></a>   
            </div>

        </div>
    )
} 
export default Siri_Sugg