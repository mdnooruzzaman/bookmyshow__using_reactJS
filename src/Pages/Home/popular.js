import React, { Component } from "react"
import "./popular.css"

class Popular extends Component{
    state = {
        data : [
            {id : 1 , title : "Mumbai Comedy Festival 2021" , place : "Multiple Venues" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00317920-rpxewzddfc-portrait.jpg"},
            {id : 2 , title : "International Health, Sports And Fitness Festival" , place : "Bombay Convention & Exhibition Centre: Nesco..." , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00317445-cygrstsplm-portrait.jpg"},
            {id : 3 , title : "DIVINE| Punya Paap Tour" , place : "Venue To Be Announced: Pune" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00317225-gaufrhafqc-portrait.jpg"},
            {id : 4 , title : "AP Dhillon Live In Mumbai" , place : "Venue To Be Announced: Mumbai" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxMiBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316990-epgnknxbzh-portrait.jpg"},
            {id : 5 , title : "Pancham The Immortal Note" , place : "Prabodhankar Thackeray Audi: Borivali(W)" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-50/et00318117-wysagkrvff-portrait.jpg"},
        ]
    }
    render(){
        return(
            <div className = "popular">
                 <div  className = "don9 ">
                        
                        <h3>Popular Events</h3>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don9c">
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
export default Popular;