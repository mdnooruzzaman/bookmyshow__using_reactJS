import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './trending.css'

class Trending extends Component{
    state = {
        data : [
            {id : 1 , movie : "Pandu" , category: "Movies"},
            {id : 2 , movie : "Spider-Man: No way Home" , category: "Movies"},
            {id : 3 , movie : "Eternals" , category: "Movies"},
            {id : 4 , movie : "Satyameva Jayte 2" , category: "Movies"},
            {id : 5 , movie : "Tadap" , category: "Movies"},
            {id : 6 , movie : "Jhimma" , category: "Movies"},
           {id : 1 , movie : "Bunty Aur Babli 2" , category: "Movies"},
            {id : 1 , movie : "Return Ticket" , category: "Movies"},
         //   {id : 1 , movie : "My Hero Academia: World Heroes Mission" , category: "Movies"},
            {id : 1 , movie : "House of Gucci" , category: "Movies"}
        ]
    }
    render(){
        return(
            <div className="trending">
                <h3> Trending Searches Right Now </h3>
            <div className="d-inline-flex">
           {this.state.data.map(c =>  <div key = {c.id} >
               <div className="trend">
                <h5 style={{color: "red" , marginRight: "15px"}}>{c.movie}</h5>
                <p>{c.category}</p>
                </div>
            </div>
            )}
            </div>
            </div>
        )
    }
}
export default Trending