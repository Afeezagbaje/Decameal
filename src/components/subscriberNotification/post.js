import React from "react"
import { Box,Avatar} from "@mui/material";
import "./index.css"

export default function Post (){
    return (
        <Box className="post-container" sx={{
            paddingTop: 2
        }}> 
            
            <Avatar 
            src="https://res.cloudinary.com/dlur1zfow/image/upload/v1647265278/profile_image_ujnme7.png" 
            alt="Avatar"
            sx={{ width: 56, 
                  height: 56,
                  marginLeft: 4,
            }}/>
           
           
            <Box className="post-text">
            That’s exactly why they subscribed to you in the first place,
             isn’t it? But here’s the catch, even when you aim at the bull’s eye,
              chances are the users will not interact with it..
            </Box>
        </Box>
           

    )
}