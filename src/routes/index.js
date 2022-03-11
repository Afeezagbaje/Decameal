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
    <Route exact path="/kitchen-profile" element={<KitchenProfile />} />
  </Routes>
);

export default App;
