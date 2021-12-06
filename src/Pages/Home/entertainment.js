import React, { Component } from "react"
import "./entertainment.css"

class Entertainment extends Component{
    state = {
        data : [
            {id :1 , img : "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTE1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png"},
            {id :2 , img : "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png"},
            {id :3 , img : "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png"},
            {id :4 , img : "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTMwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png"},
            {id :5 , img : "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png"},
        ]
    }
    render(){
        return(
            <div className = "entertainment">
              <div className = "don3">
                <h3>The Best of Entertainment</h3>
                <div className="d-inline-flex">
                    {this.state.data.map( c => <div key = {c.id} className="don3c">
                    <img src={c.img} alt="nothing" width="222.4px" height="222.4px"/>
                    </div>
               )}
                </div>
              </div>
            </div>
        )
    }
}
export default Entertainment;