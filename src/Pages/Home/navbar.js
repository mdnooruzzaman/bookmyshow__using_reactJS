import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { FaBars } from "react-icons/fa";

//import './Screenshot(8).png'

class Navbar extends Component{
    render(){
        return(
            <div className = "topBar" style={{width : "1519.2px" , height: "100px"}}>
                 <nav className="navbar navbar-expand-lg navbar-dark bhagaA">
                <div className="container-fluid don1">
                <span className="header Navbar-brand d-inline-flex" href="google.com">
                <img src="/Screenshot.png" alt="" width="100" height="60" className="d-inline-block align-text-top m-1"/>
                  <input type="text" style={{width: "600px", height: "36px" , borderRadius: "3px" , border: "none" , marginLeft: "10px"}} placeholder="&#xf002;  search for Movies, Events, Plays, Sports and Activities"></input>
                  <div style={{marginLeft: "310px" , color:"white"}}>
                      <div className="btn-group" role="group">
                          <button type="button" style={{color: "white"}} className="btn btn-default dropdown-toggle ml-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Mumbai
                            <span className="caret"></span>
                          </button>
                         
                        </div>
                      <button className="btn btn-danger ml-2 btn-sm " >Sign in</button>
                      <FaBars style={{marginLeft: "10px"}}/>
                  </div>
                </span>

              </div>
           </nav>
           <nav className="navbar navbar-expand-lg navbar-dark bhagaB ">
                <div className="container-fluid don1">
                <div className="header Navbar-brand d-inline-flex" href="google.com">
                    <p href="google.com" style={{color: "#cccccc" ,marginRight: "20px" , marginTop:"10px"}} >Movies</p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight: "20px" , marginTop:"10px"}} >Stream<span className="lable lable-danger"></span></p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>Events</p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>Plays</p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>Sports</p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>Activities</p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>Buzz</p>
                   <span className="d-inline-flex" style={{marginLeft: "390px"}}>
                   <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>ListYourShow</p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>Corporates</p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>Offers</p>
                    <p href="google.com" style={{color: "#cccccc" ,marginRight:"20px" , marginTop:"10px"}}>Gift Cards</p>
                   </span>
                 
                  
                </div>

              </div>
           </nav>
            </div>
        )
    }
}
export default Navbar;