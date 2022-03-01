import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import './style.css';
import Overlay from './Overlay';


const ColorButton = styled(Button)(({ theme }) => ({
    color: "#FFF",
    backgroundColor: "#34A853",
    '&:hover': {
        backgroundColor: "#34A853",
    },
    padding: "15px 40px",
    fontWeight: 700,
    marginTop: 30,
    borderRadius: "7px",


}));


function TopHero({ buttonText, color, Text1, Text2, Text3, Text4 }) {
    return (

        <>
            <Overlay />
            <div className='tophero-container' onClick={() => alert('container says hello')}> <Box sx={{ flexGrow: 1 }} >
                <Grid item md={8} xs={12}>
                    <div className={'parent-container'}>
                        <div className="food">
                            <div style={{ marginTop: '0' }}>
                                <span className="eat">{Text1 ? Text1 : "Eat"}</span> {Text2 ? Text2 : "Healthy"}
                                <div>{Text3 ? Text3 : "Natural Food"}</div>
                            </div>
                        </div>


                        <div className="paragraph-text">

                            {Text4 ? Text4 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnqua."}
                        </div>

                        <ColorButton
                            // variant="contained"  color={color ? color : "success"}
                            // style={{ marginTop: 50 }} 
                            onClick={() => alert('')}>{buttonText ? buttonText : "Get Started"}</ColorButton>
                        {/* <div className="button">
                        </div> */}

                    </div>
                </Grid>
            </Box >
            </div>
        </>
    )
};


export default TopHero
