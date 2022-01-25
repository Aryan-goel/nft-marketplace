import React, { useEffect, useState } from "react";
import InstagramLogo from "../assets/owner/instagram.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";
const Main = ({selectedPunk,punkListData}) => {
  const[activePunk,setActivePunk]=useState(punkListData[0])


  useEffect(()=>{
    setActivePunk(punkListData[selectedPunk])
  },[punkListData,selectedPunk])

  return (
    <div className="main">
      <div className="mainContent">
        <div className=" punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={
                activePunk.image_original_url
              }
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {/* {activePunk.name} */}
            Zombie punk
          </div>
          <span className="itemNumber">#1</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src="https://ipfs.thirdweb.com/ipfs/QmbxpMKvCQV9rGNujnWBr1cb41QnFk18UBb1uYEfJihy5y/0.jpg"
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div className="address">
                0xe911396b58898D08bd1264f4746b40651026B932
              </div>
              <div className="ownerHandle">@AryanGoel</div>
            </div>
            <div className="ownerLink">
              <img src={InstagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
