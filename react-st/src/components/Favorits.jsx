import React, { useState } from "react";

const Favorits  = (props) => {
    return ( 
        <div className = "icon">
            {/*<strong> {props.content.name} </strong>*/}
            <div className = "icon_content">
                <div>
                    {/* <img src={props.content.src} style={{borderRadius:10, width:60, height:60}}/> */}
                    <a href={props.content.link} style={{width:60, height:60}}><img src={props.content.src} style={{borderRadius:10, width:60, height:60}}/></a>
                    <a href={props.content.link} style={{textDecoration:"none", color:"black"}}> {props.content.name}</a>
                </div>
            </div>
        </div>  
    )
} 

export default Favorits