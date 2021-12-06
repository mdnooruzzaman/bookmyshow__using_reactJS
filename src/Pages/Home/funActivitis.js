import React, { Component } from "react"
import "./funActivities.css";

class Fun extends Component{
    state = {
        data : [
            {id: 1 , title: "Heritahe Tour of Bombay High Court" , place: "Bombay High Court: Mumbai" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00316453-bwedbpushs-portrait.jpg"},
            {id: 2 , title: "Pawna Lake Camping" , place: "Pawna Lake Camping: Lonavala" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00074418-yyhnykabkw-portrait.jpg"},
            {id: 3 , title: "BEST-Operation of Heritage Tour" , place: "Dr. S.P.M.Chowk(Museum): Mumbai" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00318079-fjmssvaesd-portrait.jpg"},
            {id: 4 , title: "Candle Light Dinner in Arabian Sea" , place: "Meeting Point Gateway Of India: Mumbai" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00316995-dhatawyjaw-portrait.jpg"},
            {id: 5 , title: "Adventure Geek - Private Sailing" , place: "Jetty No 5: Mumbai" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00115085-ugxcmyvldm-portrait.jpg"},
        ]
    }
    render(){
        return(
            <div className = "fun">
                <div  className = "don11 ">
                        
                        <h3>Explore Fun Activities</h3>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don11c">
                            <img src={c.img} alt="nothing" width="222px" height="378px"/>
                            <h5>{c.title}</h5>
                            <p>{c.place}</p>
                        </div>
                        )}
                        </div>
                </div>
            </div>
        )
    }
}
export default Fun;