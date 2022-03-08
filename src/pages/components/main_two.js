import React from "react"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function MainTwo(){
    return (
        <div className="main_two">
        <div className="main_two_first">
            <div className="first"> </div>
            <div className="second">
               <div className="second_second"> 
               < KeyboardArrowLeftIcon fontSize="small" className="arrow3"/>

                Wednesday
                <KeyboardArrowRightIcon fontSize="small" className="arrow2"/>
                </div>
            </div>
            <div className="third"> 
                <div className="third_third_first">
                    05:00 pm <br/>  <span className="dinner">Lunch</span>
                </div>
                <div className="third_third_second"> 
                        <select className="foods" name="food">
                            <option value="Amala">Amala</option>
                            <option value="saab">Rice</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select className="foods bgcolor_3" name="food">
                            <option value="Amala">Amala</option>
                            <option value="saab">Rice</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                </div>
                <div className="third_third_third"> 
                Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque
                </div>
            </div>

            <div className="third"> 
                <div className="third_third_first">
                    05:00 pm <br/>  <span className="dinner">Dinner</span>
                </div>
                <div className="third_third_second"> 
                        <select className="foods" name="food">
                            <option value="Amala">Amala</option>
                            <option value="saab">Rice</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>

                        <select className="foods bgcolor_3" name="food">
                            <option value="Amala">Amala</option>
                            <option value="saab">Rice</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>
                </div>
                <div className="third_third_third"> 
                Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque
                </div>
            </div>

        </div>

        <div className="main_two_second">
            <div className="first message"> Messages </div>
            
            <div className="subscription_first"> 
                <div className="sub_all_text bgcolor_1">
                    <small className="sub_text_first "> 19 hours ago</small> <br/>
                    <small className="sub_text_second"> Subscription!</small> <br/>
                    <small className="sub_text_third"> Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnqua.
                    </small>
                </div>
            </div>

            <div className="subscription_first"> 
                <div className="sub_all_text bgcolor_2">
                    <small className="sub_text_first "> 19 hours ago</small> <br/>
                    <small className="sub_text_second"> Subscription!</small> <br/>
                    <small className="sub_text_third"> Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnqua.
                    </small>
                </div>
            </div>

            <div className="subscription_first"> 
                <div className="sub_all_text bgcolor_3">
                    <small className="sub_text_first "> 19 hours ago</small> <br/>
                    <small className="sub_text_second"> Subscription!</small> <br/>
                    <small className="sub_text_third"> Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnqua.
                    </small>
                </div>
            </div>
       
            
            
          
            
            
        </div >
    </div>
    )
}