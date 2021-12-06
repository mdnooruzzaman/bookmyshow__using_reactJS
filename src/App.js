import React from "react"
import './App.css';
import Entertainment from "./Pages/Home/entertainment";
import Navbar from "./Pages/Home/navbar";
import Fun from "./Pages/Home/funActivitis"
import Games from "./Pages/Home/games";
import Recommended from "./Pages/Home/recommend";
import Laughter from "./Pages/Home/laughter";
import Popular from "./Pages/Home/popular";
import Outdoor from "./Pages/Home/outdoor";
import Premier from "./Pages/Home/premier";
import Streaming from "./Pages/Home/streaming";
import Near from "./Pages/Home/nearyou"
import Footer from "./Pages/Home/footer"
import Trending from "./Pages/Home/trending";

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <img src="https://in.bmscdn.com/promotions/cms/creatives/1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg" alt="nothing" width="1250px" height="300px" style={{marginLeft : "140px" , marginRight : "140px" , marginTop: "10px"}}/>
      <Recommended/>
      <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt="nothing" width="1250px" height="100px" style={{marginLeft : "140px" , marginRight : "140px"}}/>
      <Entertainment/>
      <Premier/>
      <Near/>
      <Streaming/>
      <Outdoor/>
      <Laughter/>
      <Popular/>
      <Games/>
      <Trending/>
      <Fun/>
      <Footer/>
    </div>
  );
}

export default App;
