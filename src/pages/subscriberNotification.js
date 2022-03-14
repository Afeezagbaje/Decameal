import React from "react";
import staff from "./images/staff_1.png";
import MainOne from "./components/main_one";
import MainTwo from "./components/main_two";
import "./notifications.css";


const SubscriberNotification = () => (
  <>
    <section>
      {/* <aside></aside> */}
      <div className="main">
        <nav></nav>
        <MainOne />
        <MainTwo />
      </div>
    </section>
  </>)

export default SubscriberNotification;
