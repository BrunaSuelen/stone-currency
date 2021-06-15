import "./Background.scss";
import React from "react";

import wallpaper from "../../assets/images/wallpaper.svg";

const Background = (props) =>
  <React.Fragment>
    <div className='container-background'>
      <img src={wallpaper} alt=""/>
    </div>

    <div className="content-page">
      {props.children}
    </div>
  </React.Fragment>

export default Background;