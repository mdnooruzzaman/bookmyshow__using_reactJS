import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./recommend.css"

class Recommended extends Component{
        state = {
            data : [
                {id : 1 , title: "Tadap" , tag : "Action/Romantic/Thriller" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MjBrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00307544-tmqelermhw-portrait.jpg"},
                {id : 2 , title: "Antim: The Final Truth" , tag : "Action/Crime/Drama" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICAzNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303116-cfgddhrhsg-portrait.jpg"},
                {id : 3 , title: "Sooryavanshi" , tag : "Action/Comedy/Drama" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODMlICAxMzdrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00097952-dtlsmauacu-portrait.jpg"},
                {id : 4 , title: "Pandu" , tag : "Comedy" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318116-xtsepzcvuy-portrait.jpg"},
                {id : 5 , title: "Jhimma" , tag : "Comedy/Drama/Family" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00308384-jucdkecyjm-portrait.jpg"},
            ] 

        }
    render(){
        return(
            <div className = "recommend">
                 <div  className = "don2 ">
                        
                        <h3>Recommended Movies</h3>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don2c">
                            <img src={c.img} alt="nothing" width="222px" height="378px"/>
                            <h5>{c.title}</h5>
                            <p>{c.tag}</p>
                        </div>
                        )}
                        </div>
                </div>
                
            </div>
        )
    }
}
export default Recommended;