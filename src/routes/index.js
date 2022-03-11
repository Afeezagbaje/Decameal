import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashBoard/dashboard";
import Login from "../pages/login/login";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Home from "../pages/home/LandingPage";
import Reset from "../pages/resetPassword/ResetPassword";
import AboutPage from "../pages/about/about";
import SubscriberNotification from "../pages/subscriberNotification";
import KitchenProfile from "../pages/Kitchen_profile_dashboad/kitchen_profile";
import SubscriberDashboardProfile from "../components/SubscriberDashboard/SubscriberDashboardProfile";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/dashboard/demo" element={<SubscriberNotification />} />
    <Route path="/reset-password" element={<Reset />} />
    <Route path="/about" element={<AboutPage />} />
    <Route exact path="/kitchen-profile" element={<KitchenProfile />} />
    <Route exact path="/profile-dashboard" element={<SubscriberDashboardProfile />} />
  </Routes>
);

export default App;
