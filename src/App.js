import React from 'react'
import './App.css';
import Header from "./components/Header";
import TopFold from "./components/TopFold";
import BrandsIntegration from "./components/BrandsIntegration";
import TrendingNft from "./components/TrendingNft";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='container'>
      <Header />
      <TopFold />
      <BrandsIntegration />
      <TrendingNft />
      <InfoSection />
      <Footer />
    </div>
  )
}

export default App