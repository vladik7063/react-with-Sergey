import React, { useState } from "react";

const Privacy_Report  = (props) => {
    return ( 
        <div className = "number_box">
            <div className="number">
                <h2>{props.content} In the last seven days, Safari has prevent {props.content} tracers.</h2>
            </div>
        </div>
      )
} 
export default Privacy_Report