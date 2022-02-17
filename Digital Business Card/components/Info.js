import React from "react"

export default function Info(){
    return(
        <div className = "info-box">  
            <img className = "profile-pic" src = "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg"></img>
            <h2 className = "person-name">Aman Singh</h2>
            <p className = "job-role">Frontend Developer</p>
            <p className = "website">Aman.website.co</p>
            <div className = "contact">
                <button className = "btn1">
                    <i className ="fas fa-envelope"></i>
                    <p>Email</p>
                </button>
                 <button className = "btn2">
                    <i className="fab fa-linkedin"></i>
                    <p>Linkedin</p>
                </button>
                
            </div>
            
        </div>
    )
}
