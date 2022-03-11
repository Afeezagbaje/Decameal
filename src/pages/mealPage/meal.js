import { useEffect } from "react";
import { user } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../store/hooks";
import TopHero from "../../components/topHero";
import FixedContainer from "../../components/footer/Footer";
import MealSpread from "./MealSpread";
import Nav from "../../components/nav/Nav";
import SearchSection from "./SearchSection";

const Meal = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(user());
  // }, [dispatch]);

  return (
    <>
      <Nav />
      <TopHero />
      <SearchSection />
      <MealSpread />
      <FixedContainer />
    </>
  );
};

export default Meal;
