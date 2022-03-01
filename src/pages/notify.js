import React from "react"
import "./notifications.css"


const Notify = () => (
    <div className="notify-main">
        <div className="notify-sub"> 
            <h3>Get notified when we update!</h3>
             
            <small>Get notified when we add new items to our specials menu, <br/>
                update our price list of have promos!
            </small>
        </div>
          
        <div className="notify-sub2"> 
            
                <input type="text" />
                <button className="notify-button"><span className="button-text">Get notified</span></button>
               
            
        </div>   
    </div>

    
);


export default Notify;