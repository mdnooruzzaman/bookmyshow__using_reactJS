import React, { Component } from "react"
import "./outdoor.css"

class Outdoor extends Component{
    state = {
        data : [
            {id : 1 , title : "Mumbai Comedy Festival 2021" , place : "Multiple Venues" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00317920-rpxewzddfc-portrait.jpg"},
            {id : 2 , title : "Imagicaa Theme Park" , place : "Imagica Theme Park (Khopoli): Mumbai" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00014607-wewkzkfpgp-portrait.jpg"},
            {id : 3 , title : "Mumbai Half Marathon-Bandra Fort" , place : "Bandra Fort Garden: Mumbai" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318206-xpdthftvfa-portrait.jpg"},
            {id : 4 , title : "Hamleys Play" , place : "Hamleys Play, Jio World Drive, BKC" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00315217-pdyttmfykq-portrait.jpg"},
            {id : 5 , title : "Mumbai Filmcity Tour" , place : "Dadasaheb Phalke Chitranagri: Mumbai" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00022344-gplmnpqjlw-portrait.jpg"},
        ]
    }
    render(){
        return(
            <div className = "outdoor">
                 <div  className = "don7 ">
                        
                        <h3>Outdoor events</h3>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don7c">
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
export default Outdoor;