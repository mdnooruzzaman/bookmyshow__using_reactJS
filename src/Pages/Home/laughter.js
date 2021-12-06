import React, { Component } from "react"
import "./laugter.css"

class Laughter extends Component{
    state = {
        data : [
            {id : 1 , title : "Opening Night Gala at Mumbai Comedy Festival..." , place : "St. Andrews Auditorium: Mumbai" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317733-bmgeyjdkut-portrait.jpg"},
            {id : 2 , title : "Mumbai Comedy Festival 2021" , place : "Multiple Venues" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00317920-rpxewzddfc-portrait.jpg"},
            {id : 3 , title : "Jo Bolta Hai Wohi Hota Hai By Harsh Gujral MUMBAI" , place : "Dublin Square, Phoenix Market city: Kurla" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318089-mxvtaffsrs-portrait.jpg"},
            {id : 4 , title : "MCF`21: Biswa Kalyan Rath" , place : "That Comedy Club: Bandra" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxMyBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317401-shnmpbqesz-portrait.jpg"},
            {id : 5 , title : "MCF`21: Urooj Ashfaq" , place : "That Comedy Club: Bandra" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA2IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00317493-skrmrupjav-portrait.jpg"},
        ]
    }
    render(){
        return(
            <div className = "laughter">
                 <div  className = "don8 ">
                        
                        <h3>Laughter Therapy</h3>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don8c">
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
export default Laughter;