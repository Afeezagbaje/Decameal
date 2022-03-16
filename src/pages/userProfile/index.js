import React from "react";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { userProfile } from "../../store/slices/userProfileSlice";
import UserProfile from "./userProfile"

const UsersProfile = () => {
  const dispatch = useAppDispatch();
  const kitchenProfile = useAppSelector((store) => store.userProfile);
  const { data } = kitchenProfile;
  console.log("Kitchen Pro: ", kitchenProfile);
  const Email = data[0] && data[0] ? data[0]["email"] : "";
  const Role = data[0] && data[0] ? data[0]["role"] : "";
  const mobile_number = data[0] && data[0] ? data[0]["mobile_number"] : "";
  const first_name = data[0] && data[0] ? data[0]["first_name"] : "";
//   const last_name = data[0] && data[0] ? data[0]["last_name"] : "";
  console.log(data);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
   <><UserProfile email={Email} role={Role} phoneNumber={mobile_number} fullName={first_name} /></>
  );
};

export default UsersProfile;