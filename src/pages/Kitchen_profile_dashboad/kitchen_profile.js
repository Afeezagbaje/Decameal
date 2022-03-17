import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import "./kitchen_profile.css";
import human from "../../assets/header_background_image.png";
import profile from "../../assets/profile_image.png";
import Icon from "@mui/material/Icon";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import Chip from "@mui/icons-material/Phone";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { userProfile } from "../../store/slices/userProfileSlice";


const KitchenProfile = () => {
  const dispatch = useAppDispatch();
  

  const kitchenProfile = useAppSelector((store) => store.userProfile);
  const { data } = kitchenProfile;
  const email = data[0] && data[0] ? data[0]["email"] : ""
  const role = data[0] && data[0] ? data[0]["role"] : ""
  const mobile_number = data[0] && data[0] ? data[0]["mobile_number"] : ""
  // console.log(data[0])



  useEffect(() => {
    dispatch(userProfile())
  }, [dispatch])

  return (
    <div className="container">
      <Card className="card-body">
        <div className="kitchen_bg_header">
          <img src={human} alt="mm" className="profile_picture" />
          <div className="profile-pic-wrapper">
            <img src={profile} alt="mm" className="kitchen-staff-picture" />
          </div>
        </div>
        <div className="text">
          <h3 style={{ marginBottom: '0.5em' }}>Anthony Obatola</h3>
          <Typography className="staff">{role}</Typography>
          <div className="icon">
            <Typography className="phone">
              <Chip
                icon={<Icon className="fas fa-phone-alt" />}
                label="Call me"
              />
              <span>{mobile_number}</span>
            </Typography>
            <Typography className="mail">
              <MailOutlineIcon
                icon={<Icon className="mail-icon" />}
                label="mail"
              />
              <span>{email}</span>
            </Typography>
            <Typography className="location">
              <FmdGoodIcon
                icon={<Icon className="location_icon" />}
                label="location"
              />
              <span>07, Asajon way, Sangotedo, Ajah, Lagos State</span>
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default KitchenProfile;
