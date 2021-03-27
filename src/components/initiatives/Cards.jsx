import React from 'react';
import './OurInitiatives.css'
function Card(props)
{
    return(
        <>
                <div className="cards">
                    <div className="card">
                        <img className="Card" src={props.imgsrc} alt="mypic"  />
                        <div classname="card_info">
                        <span><h3 className="card_title">{props.sname}</h3></span>
                            <span className="card_category">{props.title}</span>< br/>< br/>
                            <span></span>
                            <div>
                              <button className="button"> 
                               <span>Learn More</span>
                              </button>
                          </div>  
                          <br />
                        </div>
                    </div>
                </div>
                
            </>


    )
}
export default Card;