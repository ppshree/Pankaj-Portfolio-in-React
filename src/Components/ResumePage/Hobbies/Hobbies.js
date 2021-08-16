import React from "react";
import classes from "./Hobbies.module.css";

export default function Hobbies() {
  return (
    <div>
      <div className={classes.introTextWrapper}>
        <div className={classes.grey_line_div}></div>
        <h3>Hobbies</h3>
      </div>
      <div className={classes.hobbiesWrapper}>
        <ul>
          <li>Cooking</li>
          <li>Gardening</li>
          <li>Litsning Music</li>
          
        </ul>
      </div>
    </div>
  );
}
