import React, { useState, useEffect } from "react";
import DUMMY_DATA from "./data/mealConstant";
import Cards from "../../components/Cards/Cards";
import classes from "./meal.module.css";
import { Button } from "@mui/material";

const MealSpread = () => {
  const [data, setData] = useState(DUMMY_DATA);

  useEffect(() => {
    setData(DUMMY_DATA);
  }, []);

  return (
    <div className={classes.flexcontainer}>
      <section className={classes.foodie}>
        {data &&
          data.map((item) => (
            <Cards
              key={item.id}
              image={item.img ? item.img : DUMMY_DATA[1].img}
              title={item.title}
              body={item.description}
            />
          ))}
      </section>
      <div className={classes.sidecontainer}>
        <div>
          <h4>Meal Categories</h4>
          <div className={classes.foodT}>Swallow</div>
          <div className={classes.foodT}>Cereals</div>
          <div className={classes.foodT}>Porridge</div>
          <div className={classes.foodT}>Chips</div>
          <h4 className={classes.foodT}>Meal Type</h4>
        </div>

        <div className={classes.mealT}>
          <div className={classes.lunch}>Lunch</div>
          <div className={classes.dinner}>Dinner</div>
        </div>

        <div className={classes.darkT}>
          <div className="btn-readmore-align">
            <Button className="white-btn-text">Filter</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MealSpread;