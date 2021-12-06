import React, { Component } from "react"
import "./nearyou.css"

class Near extends Component{
    state = {
        data : [
            {id : 1 , title : "Jo Bolta Hai Wohi Hota Hai By Harsh Gujral MUMBAI" , place : "Dublin Square , Phoenix Market city: Kurla" , distance : 1.6 , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318089-mxvtaffsrs-portrait.jpg"},
            {id : 2 , title : "Jaspreet Singh Live" , place : "Dublin Square, Phoenix Market city: Kurla" , distance : 1.6 , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxNSBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318075-ubvkunthwz-portrait.jpg"},
            {id : 3 , title : "The SteppinOut Night Market - Christmas..." , place : "JW Marriott Hotel: Andheri(East)" , distance : 3 , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA0IERlYyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00318085-ydekshvkyg-portrait.jpg"},
            {id : 4 , title : "SCC SkyCinema - Premiere Night" , place : "Saptami-Holiday Inn International Airport: Andheri" , distance : 3.2 , img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzIERlYw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318584-cgfzwwcdrv-portrait.jpg"},
            {id : 5 , title : "Direkt with Stephan Bodzin Live at Opa! Bar & Cafe" , place : "Opa Bar and Cafe : Mumbai" , distance : 3.2, img : "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318792-zzxwucncxb-portrait.jpg"},
            
        ]
    }
    render(){
        return(
            <div className = "near">
                <div  className = "don5 ">
                        
                        <h3>Happaning near you!</h3>
                        <div className="d-inline-flex">
                        {this.state.data.map(c => <div key = {c.id} className="don5c">
                            <img src={c.img} alt="nothing" width="222px" height="378px"/>
                            <h5>{c.title}</h5>
                            <p>{c.place}</p>
                            <p>{c.distance} Kms away</p>
                        </div>
                        )}
                        </div>
                </div>
            </div>
        )
    }
}
export default Near;