import React from 'react';
import "./Loader.css";

const Loader = ({margin}) => {
    let styled = margin? {marginTop: "45vh"} : {};

    return ( 
        <div className="lds-ring" style={styled}><div></div><div></div><div></div><div></div></div>
    );
}
 
export default Loader;