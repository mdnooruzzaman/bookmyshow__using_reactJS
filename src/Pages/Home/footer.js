import React from "react"
import { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"
import { FaFacebook } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn} from "react-icons/fa";
import { FaRegUser} from "react-icons/fa";
import {FaEnvelopeOpenText} from "react-icons/fa";
import {FaTicketAlt} from "react-icons/fa"



class Footer extends Component{
    render(){
        return(
            <div className = "footer">
                <div style={{backgroundColor: "#F2F2F2" , color: "gray" , marginBottom: "0px" , height: "100px" }}>
                    <p style={{ marginRight: "140px" , marginLeft: "140px"}}>Privacy Note</p>
                    <p style={{fontSize: "12px" ,  marginRight: "140px" , marginLeft: "140px"}}>
                        By using www.bookmyshow.com(our website), you are fully accepting the Privacy Policy available
                         at https://bookmyshow.com/privacy governing your access to Bookmyshow and provision of services 
                         by Bookmyshow to you . If you do not accept term mentioned in the Privacy Policy. you must not share any of your personal information and immediately exit BookMyShow.
                    </p>
                </div>
                <div className= "foot">

                    <div className="d-inline-flex m-4">
                        <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="nothing" style={{marginRight: "10px" }}/>
                        <h6 style={{color: "white" , marginRight: "10px"}}>List Your Show</h6>
                        <p style={{color: "white" , marginLeft: "10px"}}><strong>Got a Show, event, activity or a great experience? Partner with us & get listed on BookMyShow</strong></p>
                        <button style={{marginLeft : "150px"}}className="btn btn-danger ">Contact today!</button>
                    </div>
                    <div className="d-inline-flex">
                        <div style={{ marginRight: "130px" , marginLeft: "130px", textAlign: "center"}}>
                            <FaRegUser style={{width: "60px" , height: "60px" }}/>
                            <p>24/7 CUSTOMER CARE</p>
                        </div>
                        <div style={{ marginRight: "130px" , marginLeft: "130px" ,textAlign: "center"}}>
                            <FaTicketAlt style={{width: "60px" , height: "60px" }}/>
                            <p>RESEND BOOKING CONFIRMATION</p>
                        </div>
                        <div style={{ marginRight: "130px" , marginLeft: "130px" ,textAlign: "center"}}>
                            <FaEnvelopeOpenText style={{width: "60px" , height: "60px"}}/>
                            <p>SUBSCRIBE TO NEWSLETTER</p>
                        </div>
                    </div>
                    <p style={{fontSize: "12px" , marginTop: "35px" }}>MOVIES PLAYING IN MUMBAI</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand| No time to die</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>UPCOMING MOVIES </p>
                    <small style={{fontSize: "11px"}}>Jail | West Side Story | Avatar Pursha | 3:33 | Consilium | Muddy | 21mu Tiffin | Velle | Nayeem Diaries |Divaswanpna | Lakshay(Telgu) | R23 Criminal`s Diary |Code Name Abdul | Darling | Drishya 2 | Garmannam | Marjaney | Rhymes |Oomai sennai | Kaka pardhan</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>MOVIES BY GENRE</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>MOVIES BY LANGUAGE</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>PLAYS BY GENRE IN MUMBAI</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>MOVIE REVIEWS</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>MOVIE UPDATES AND CELEBRITIES</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>THINGHS TO DO IN MUMBAI</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>SPORTS EVENTS IN MUMBAI</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>EVENTS IN MUMBAI</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>EVENTS IN TOP CITIES</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>PLAYS IN TOP CITIES</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>ACTIVITIES IN TOP CITIES</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>MOVIES IN TOP CITIES</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>COUNTRIES</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>HELP</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                    <p style={{fontSize: "12px" , marginTop: "35px"}}>BOOKMYSHOW EXCLUSIVES</p>
                    <small style={{fontSize: "11px"}}>Tadap | Pandu | Antim: The Final Truth | Sooryavansi | Resident Evil: Welcome To Raccoon City | Jhimma | Marakkar: Arabikadalinte Simham | House of Gucci | Clifford The Big Red Dog| Akhand</small>
                    
                   
                    
                </div>
                <img src="/Screenshot.png" alt="" width="160" height="100" style={{marginLeft : "680px" , marginTop : "30px"}}/>
                <div style = {{marginLeft: "650px" , marginTop: "40px" }}>
                    <FaFacebook style={{width:"30px" , height:"30px" , marginLeft : "10px"}}/>
                    <FaTwitter  style={{width:"30px" , height:"30px" , marginLeft : "10px"}}/>
                    <FaYoutube style={{width:"30px" , height:"30px" , marginLeft : "10px"}}/>
                    <FaPinterestP style={{width:"30px" , height:"30px" , marginLeft : "10px"}}/>
                    <FaLinkedinIn style={{width:"30px" , height:"30px" , marginLeft : "10px"}}/>
                </div>
                <div style={{margin:"30px"}}>
                    <p style={{fontSize: "11px" , textAlign: "center"}}>
                            Copyright 2021 Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
                    </p>
                    <p style={{fontSize: "11px" , marginLeft:"140px" , marginRight:"140px"}}>
                           The content and images used on this site are Copyright protected
                            and copyrigts vests with the respective owners. The usage of the 
                            content and images on this site is intented to promot the works 
                            and no endorsment of the artist shall be 
                            <span>                          </span>implied. Unauthorized 
                            use is prohibited and punishable by law.
                    </p>
                </div>
            </div>
        )
    }
}
export default Footer