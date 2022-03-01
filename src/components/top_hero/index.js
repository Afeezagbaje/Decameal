import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from '../../images/decameal.jpeg';
import './style.css'
import Overlay from './Overlay'


function TopHero() {
    return (
        <>
            <Overlay />
            <div className='tophero-container' onClick={() => alert('container says hello')}> <Box sx={{ flexGrow: 1 }} >
                <Grid md={8} xs={12}>
                    <div className={'parent-container'}>
                        <div className="food">
                            <h2>
                                <span className="eat">Eat</span> Healthy

                                <div>Natural Food</div>
                            </h2>
                        </div>
                        <div className="paragraph-text">

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnqua.
                        </div>

                        <button className="button"
                            // style={{ zIndex: 100 }} 
                            onClick={() => alert('')}>Get Started</button></div>
                </Grid>
            </Box >
            </div>
        </>
    )
};


export default TopHero
