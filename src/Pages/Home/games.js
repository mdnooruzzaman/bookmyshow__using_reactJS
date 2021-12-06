import React, { Component } from "react"
import "./games.css"

class Games extends Component{
    state = {
        data : [
            {id: 1 , title: "Free Fire Solo And Squad (Bermuda)" , place: "Online(Play From Home)" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00134925-fefjnkxlec-portrait.jpg"},
            {id: 2 , title: "Adventure Geek- Midnight Cycling" , place: "Meeting Point , Happy Cycle Shop: Mumbai" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318647-frjlnlbgca-portrait.jpg"},
            {id: 3 , title: "Battlegrounds Mobile India Tournament" , place: "Online(Play From Home" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00311112-tqteqectva-portrait.jpg"},
            {id: 4 , title: "Matrix Fight Night 7" , place: "Watch on BookMyShow" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317737-hmtdcvgtmx-portrait.jpg"},
            {id: 5 , title: "Indian Chess League 2021" , place: "Online(Play from Home)" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00137986-gefmuqksxb-portrait.jpg"},
        ]
    }
    render(){
        return(
            <div className = "games">
                <div  className = "don10 ">
                        
                        <h3>Top Games & Sport Events</h3>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don10c">
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
export default Games;