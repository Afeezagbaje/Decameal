import React from 'react'
import classes from "./meal.module.css";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Button } from "@mui/material";


const SearchSection = () => {
  return (
    <div>
    <section className={classes.inside}>
        <div className={classes.container}>
          <div >
            <button className={classes.button}>

              <input 
              className={classes.search} 
              type="text" 
              placeholder="search for food category e.g Swallow"/>
              <SearchIcon />
            </button>

          </div>
          <div className={classes.showing}>
            <div>
            <span className={classes.results}>Showing 1–8 of 10 results</span>
            </div>
            <div>
            <span >Show&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;</span>
            </div>
            
            <div className={classes.btnTop}>
            <div className={classes.dvfilter}>
            <div className="btn-readmore-align">
                <Button className="white-btn-text">Filter</Button>
                <ExpandMoreOutlinedIcon />
              </div>

            </div>
              <div className="btn-readmore-align">
                <Button className="white-btn-text">Sort by</Button>
                <ExpandMoreOutlinedIcon />

              </div>
            </div>


          </div>

        </div>
      </section>
    </div>
  )
}

export default SearchSection