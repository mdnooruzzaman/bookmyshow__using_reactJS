import React, { Component } from "react"
import "./premier.css";

class Premier extends Component{
    state = {
        data : [
            {id : 1 , title : "Escape Room: Tournament of champion" , lang : "English" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00311680-wayeandlqy-portrait.jpg"},
            {id : 2 , title : "The Conjuring: The Devil made me do it" , lang : "English" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-kbshjujplv-portrait.jpg"},
            {id : 3 , title : "Nobody" , lang : "English" , img: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122451-ebbbdcqkdm-portrait.jpg"},
            {id : 4 , title : "Malignant" , lang : "English" , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122449-mbvnedwdec-portrait.jpg"},
            {id : 5 , title : "Venome : Let there be carnage" , lang : "English" ,img:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122532-sceuqzhksu-portrait.jpg"},
        ]
    }
    render(){
        return(
            <div className = "premier">
                <div  className = "don4 ">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="hi" width="1250px" height = "auto" style={{marginBottom : "35px"}}/>
                        <h3>Premieres</h3>
                        <p>Brand new release every friday</p>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don4c">
                            <img src={c.img} alt="nothing" width="222px" height="378px"/>
                            <h5>{c.title}</h5>
                            <p>{c.lang}</p>
                        </div>
                        )}
                        </div>
                </div>
            </div>
        )
    }
}
export default Premier;