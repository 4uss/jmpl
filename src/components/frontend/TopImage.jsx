import React from "react";
import text from "../../assets/img/text.png"

function TopImage() {
  return (
    <div className="container bl__top_image" style={{position: "relative"}}>
        <div className="row">
            <div className="col-md-12 text-center">
                <a href="/" style={{color: "white", textDecoration: "none"}}>
                  <img src={text} alt="logo" className="img-fluid"/>
                </a>
            </div>
        </div>
    </div>
  );
}

export default TopImage;