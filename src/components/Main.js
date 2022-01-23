import React from "react";
const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className=" punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src="https://ipfs.thirdweb.com/ipfs/QmbxpMKvCQV9rGNujnWBr1cb41QnFk18UBb1uYEfJihy5y/0.jpg"
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
          <div className="ownerDetails"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
