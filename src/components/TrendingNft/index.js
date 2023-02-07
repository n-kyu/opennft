import React from 'react'
import Slider from 'react-slick/lib/slider';
import { TRENDING_NFTS } from '../../data/trendingNfts';
import TrendingCard from './TrendingCard';
import Button from '../../common/styles/Button';
import './trendingNft.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 2500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 535,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const TrendingNft = () => {
  return (
  <div className='trending-nfts'>
    <div className='tn-title absolute-center'>
      <span className='heading-gradient'>TRENDING NFTs</span>
    </div>
    <div className='tn-bg-blob'></div>
    
    <Slider {...settings}>
      {TRENDING_NFTS.map((_nft) => (
      <TrendingCard nft={_nft}/>
      ))}
    </Slider>
    <div className='tn-btn absolute-center'>
      <Button btnText='See More' btnType='Secondary' customClass='seemore-btn'/>
    </div>
      
  </div>
)

}

export default TrendingNft