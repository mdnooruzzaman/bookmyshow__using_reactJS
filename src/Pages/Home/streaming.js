import React, { Component } from "react"
import "./streaming.css"

class Streaming extends Component{
    state = {
        data : [
            {id : 1 , title : "The Kavi Collective" , platform : "BookMyShow" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317780-wlzkthvgwd-portrait.jpg"},
            {id : 2 , title : "FrontRow Open Mics" , platform : "Zoom" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-wzhbnnlyvf-portrait.jpg"},
            {id : 3 , title : "WEIGHT LOSS WEBINAR" , platform : "Zoom" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317841-gqbnuwarby-portrait.jpg"},
            {id : 4 , title : "Blockchain Masterclass" , platform : "Zoom" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314593-skxjygvuhj-portrait.jpg"},
            {id : 5 , title : "An Actor's Voice" , platform : "Zoom" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311629-kkslxwlrtw-portrait.jpg"},
        ]
        
    }
    render(){
        return(
            <div className = "streaming">
                <div  className = "don6 ">
                        
                        <h3>Online Streaming Events!</h3>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don6c">
                            <img src={c.img} alt="nothing" width="222px" height="378px"/>
                            <h5>{c.title}</h5>
                            <p>{c.platform}</p>
                        </div>
                        )}
                        </div>
                </div>
            </div>
        )
    }
}
export default Streaming;