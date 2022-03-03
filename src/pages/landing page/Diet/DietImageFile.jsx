import React from 'react'
import { Box } from "@mui/material"
import OnionJollof from "../../../assets/img/onion-jollof.png"
import Samosa from "../../../assets/img/samosa.png"
import FruitSalad from "../../../assets/img/fruit-salad.png"
const DietImage = () => {
  return (
    <Box sx={{ display: { xs: "none", sm:"none", md:"none", lg: "flex"}, gap:'30px'}}>
    <Box className="big-image">
    <img src={OnionJollof} alt="A bowl of jollof rice" className="onion-jollof"/>
    </Box>
    <Box sx={{ display:"flex", flexDirection: "column", gap: "29px"}}>
    <img src={Samosa} alt="A bowl of jollof rice" className="onion-jollof"/>
    <img src={FruitSalad} alt="A bowl of jollof rice" className="onion-jollof"/>
    </Box>
    </Box>
  )
}

export default DietImage