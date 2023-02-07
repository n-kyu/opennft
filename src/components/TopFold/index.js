import React from "react";
import Button from "../../common/styles/Button";
import "./topFold.css";

const TopFold = () => {
  return (
    <div className="topfold-main">
        <div className="topfold absolute-center">
          <div className="tf-left">
            <div className="tf-heading">
              <span className="heading-gradient">0% Fees </span>
              Buy & Sell NFTs, Get Rewards
            </div>
            <div className="tf-description">
              <span className="heading-gradient">OpenNFTs is the web3 </span>
              NFT Marketplace where traders and collectors have{" "}
              <span>earned over $2.1 Billion in rewards.</span>
            </div>
            <div className="tf-left-btns">
              <Button btnType="PRIMARY" btnText="EXPLORE" />
              <Button
                btnType="SECONDARY"
                btnText="Create"
                customClass="tf-left-secondary-btn"
              />
            </div>
            <div className="tf-left-infoStats">
              <div className="tf-is-infoItem absolute-center">
                <div className="tf-infoItem-count">562K+</div>
                <div className="tf-infoItem-label">Collections</div>
              </div>
              <div className="tf-is-infoItem absolute-center">
                <div className="tf-infoItem-count">14K+</div>
                <div className="tf-infoItem-label">Artists</div>
              </div>
              <div className="tf-is-infoItem absolute-center">
                <div className="tf-infoItem-count">232K+</div>
                <div className="tf-infoItem-label">Community</div>
              </div>
            </div>
          </div>
          <div className="tf-right">
            <div className="tf-r-bg-blob"></div>
            <div className="tf-right-diamond">
              <div className="tf-r-diamond-item absolute-center">
                <img
                  className="tf-r-diamond-img"
                  alt="diamond-banner"
                  src="https://media0.giphy.com/media/eFcogs1U4VGbb9Ufwj/giphy.gif?cid=790b761127825e7d969c7e71a618a9bb7c0fc05ad8b85157&rid=giphy.gif&ct=g"
                />
              </div>
              <div className="tf-r-diamond-item absolute-center">
                <img
                  className="tf-r-diamond-img"
                  alt="diamond-banner"
                  src="https://media3.giphy.com/media/gwXbywvoBDynCWJnpB/giphy.gif?cid=790b7611d49e02b19b8a78edf4ba5cff0530111f773153bc&rid=giphy.gif&ct=g"
                />
              </div>
              <div className="tf-r-diamond-item absolute-center">
                <img
                  className="tf-r-diamond-img"
                  alt="diamond-banner"
                  src="https://media1.giphy.com/media/WXTxqVawZsIaAohF3N/giphy.gif?cid=790b76111b52a949a48238554ce0e38b07a7eea314313ad4&rid=giphy.gif&ct=g"
                />
              </div>
              <div className="tf-r-diamond-item absolute-center">
                <img
                  className="tf-r-diamond-img"
                  alt="diamond-banner"
                  src="https://media1.giphy.com/media/fELw5UHlOw1oUJJGbI/giphy.gif?cid=790b76119e07614ce227d005deffd217fb11bd7913bf1de6&rid=giphy.gif&ct=g"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TopFold;
