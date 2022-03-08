import React from "react"
import TextField from "@mui/material/TextField"
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import BasicSwitch from '@mui/base/SwitchUnstyled';
import Switch from 'react-switch'

export default function MainOne()  {
    return (
        <div className="main_one">
        <div className="main_one_text">
            <div> 27-10-2021 <span>Subscription </span></div>
            {/* <ToggleOnIcon color="string" fontSize="large"/> */}
            <Switch />
            
        </div>
        <TextField 
             id="outlined-basic"
             variant="outlined"
             fullWidth
             label="Search meals, messages and timetable."
             sx={{height:105}}
             
        />
        </div>
    )
}