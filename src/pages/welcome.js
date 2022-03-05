import { useEffect } from "react";
import { user } from "../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import TestimonialSection from "../components/testimonial/index";
// import Notification from "../components/notification/notification";
import Notification from "../components/notification/index";
import Footer from "../components/footer/Footer";
import TopHero from "../components/topHero";
import Nav from "../component/nav/Nav";

const Welcome = () => {
  const dispatch = useAppDispatch();

  const usersData = useAppSelector((state) => state.users);

  const { data: users } = usersData;

  useEffect(() => {
    dispatch(user());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <TopHero />
      {users &&
        users.map((user, idx) => {
          return (
            <div key={idx}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          );
        })}
      <h1>Welcome to Decameal</h1>
      <p>
        DecaMeal is a food management system that would enable Decadevs and
        Decagon employees to subscribe and unsubscribe from Decagon Meal. The
        platform will allow its users (Decadevs and/or Decagon staff) to
        contact/message the kitchen staff and vise-versa, have a weekly meal
        time table and an admin dashboard
      </p>
      <TestimonialSection />
      <Notification />
      <Footer />
    </div>
  );
};

export default Welcome;
