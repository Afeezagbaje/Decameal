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

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/dashboard/" element={<ProtectedRoute />}>
      <Route path="" element={<Dashboard />} />
      <Route path="demo" element={<SubscriberNotification />} />
      <Route exact path="profile" element={<SubscriberDashboardProfile />} />
    </Route>
    <Route path="/reset-password" element={<Reset />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/meals" element={<Meal />} />

    <Route exact path="/kitchen-profile" element={<KitchenProfile />} />
  </Routes>
);

export default App;
