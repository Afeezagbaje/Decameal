import { Route, Routes } from "react-router-dom";

import AboutPage from "../pages/about/about";
import Dashboard from "../pages/dashBoard/dashboard";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Home from "../pages/home/LandingPage";
import KitchenProfile from "../pages/Kitchen_profile_dashboad/kitchen_profile";
import Login from "../pages/login/login";
import NotificationDropDown from '../components/nav/Notification_icon';
import ProfileDropDown from '../components/nav/Profile_DropDown';
import Reset from "../pages/resetPassword/ResetPassword";
import SubscriberDashboardProfile from "../components/SubscriberDashboard/SubscriberDashboardProfile";
import SubscriberNotification from "../pages/subscriberNotification";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/dashboard/demo" element={<SubscriberNotification />} />
    <Route path="/reset-password" element={<Reset />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/icon" element={<NotificationDropDown  />} />
    <Route path="/profile_dropdown" element={<ProfileDropDown  />} />
    
    
    <Route exact path="/kitchen-profile" element={<KitchenProfile />} />
    <Route exact path="/profile-dashboard" element={<SubscriberDashboardProfile />} />
    <Route path="/icon" element={<NotificationDropDown  />} />
    <Route path="/profile_dropdown" element={<ProfileDropDown  />} />
    
    
  </Routes>
);

export default App;
