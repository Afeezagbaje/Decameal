import React from "react"
// import TextField from "@mui/material/TextField"
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import SearchIcon from '@mui/icons-material/Search';
import staff from "./images/staff_1.png"
import MainOne from "./components/main_one";
import MainTwo from "./components/main_two";
import "./notifications.css"
// import MainThird from "./components/main_third"


const SubscriberNotification = () => 
<>
    <section>
        <aside>
        </aside>
        <div className="main">
            <nav>
            </nav>
            <MainOne />
            <MainTwo />
            {/* <MainThird /> */}
            
            {/* <div className="main_one">
            <div className="main_one_text">
                <div> 27-10-2021 <span>Subscription </span></div>
                <ToggleOnIcon color="string" fontSize="large"/>
                
            </div>
            <TextField 
                 id="outlined-basic"
                 variant="outlined"
                 fullWidth
                 label="Search meals, messages and timetable."
                 sx={{height:105}}
                 
            />
            </div>  */}

            {/* <div className="main_two">
                <div className="main_two_first">
                    <div className="first"> </div>
                    <div className="second">
                       <div className="second_second"> </div>
                    </div>
                    <div className="third"> 
                        <div className="third_third_first">
                            05:00 pm <br/>  <span className="dinner">Dinner</span>
                        </div>
                        <div className="third_third_second"> 
                                <select id="foods" name="food">
                                    <option value="Amala">Amala</option>
                                    <option value="saab">Rice</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>

                                <select id="foods" name="food">
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
                                <select id="foods" name="food">
                                    <option value="Amala">Amala</option>
                                    <option value="saab">Rice</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>

                                <select id="foods" name="food">
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
            </div> */}

             
                <div className="section_three">
                    <p className="duty"> Staffs on duty</p>
                    <div className="main_three">
                        <div className="staff_one"> 
                        
                            <div> <img src={staff} alt="pix"/></div>
                            <div className="main_three_text_1"> 
                                <br/>
                                <span>PETRUS ONUKWU</span> <br/> <br/>
                                <span> Head chef</span> <br/>
                                <span>  Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque</span>
                            </div>
                            
                        </div>

                        <div className="staff_one"> 
                        
                            <div> <img src={staff} alt="pix"/></div>
                            <div className="main_three_text_1"> 
                                <br/>
                                <span>PETRUS ONUKWU</span> <br/> <br/>
                                <span> Head chef</span> <br/>
                                <span>  Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque</span>
                            </div>
                            
                        </div>

                        <div className="staff_one"> 
                        
                            <div> <img src={staff} alt="pix"/></div>
                            <div className="main_three_text_1"> 
                                <br/>
                                <span>PETRUS ONUKWU</span> <br/> <br/>
                                <span> Head chef</span> <br/>
                                <span>  Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque</span>
                            </div>
                            
                        </div>
                    </div>
            </div>
            
           

        </div>
    </section>
</>



export default SubscriberNotification;