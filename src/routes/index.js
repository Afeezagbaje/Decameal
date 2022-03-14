import { Route, Routes } from "react-router-dom";

import AboutPage from "../pages/about/about";
import Dashboard from "../pages/dashBoard/dashboard";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Home from "../pages/home/LandingPage";
import KitchenProfile from "../pages/Kitchen_profile_dashboad/kitchen_profile";
import Login from "../pages/login/login";
import Reset from "../pages/resetPassword/ResetPassword";
import SubscriberDashboardProfile from "../components/SubscriberDashboard/SubscriberDashboardProfile";
import SubscriberNotification from "../pages/subscriberNotification";
import Meal from "../pages/mealPage/meal"
import ProtectedRoute from "./ProtectedRoute";
import UserProfile from "../pages/userProfile/index";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    {/* <Route path="/dashboard/" element={<ProtectedRoute />}> */}
      <Route path="/dashboard/" element={<Dashboard />} />
      <Route path="/dashboard/demo/" element={<SubscriberNotification />} />
      <Route exact path="/dashboard/profile/" element={<SubscriberDashboardProfile />} />
    {/* </Route> */}
    <Route path="/reset-password" element={<Reset />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/meals" element={<Meal />} />

    <Route exact path="/kitchen-profile" element={<KitchenProfile />} />
    <Route exact path="/profile" element={<UserProfile />} />
  </Routes>
);

export default App;
