import React, { useState } from "react";
import Favorits from "./Favorits";
import Privacy_Report from "./Privacy Report";
import Siri_Sugg from "./Siri Suggestions";

const Box  = ({content, boxTitle}) => {
    return ( 
        <div className="area">
            <h1>
                {boxTitle}
            </h1>
            
            <div className="content">
            {content.map((bookMark) =>
            {
              if(boxTitle === "Favorites"){return <Favorits content = {bookMark}/>}
              if(boxTitle === "Privacy Report"){return <Privacy_Report content = {bookMark}/>}
              if(boxTitle === "Siri Suggestions"){return <Siri_Sugg content = {bookMark}/>}
            }
            )} 
            </div>
        </div>
    )
} 

export default Box