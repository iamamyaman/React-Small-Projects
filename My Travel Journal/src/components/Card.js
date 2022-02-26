import React from "react"


export default function Card(props){
    return(
    <>
      <div className = "cards">
            <div className = "cover-img">
                <img src = {props.item.imageUrl}/>
            </div>
            <div className = "card-info">
                <div className = "location-info">
                    <img className = "pin-img" src = "../images/pin.png"></img>
                    <p>{props.item.location}</p>
                    <a href = {props.item.googleMapsUrl} target ="blank">View on Google Maps</a>
                </div>
                    <h1 className = "title-name">{props.item.title}</h1>
                    <p className = "date">{props.item.startDate}-{props.item.endDate}</p>
                    <p>{props.item.description}</p>
           </div>
      </div> 
      
     <hr/>
    </>
    
    )
}