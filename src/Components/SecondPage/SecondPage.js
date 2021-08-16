import React from "react";
import classes from "./SecondPage.module.css";

export default function SecondPage() {
  return (
    <div className={classes.secondPageWrapper}>
      <div className={classes.left_div}>
        <div className={classes.contactTextWrapper}>
          <div className={classes.greyLine}></div>
          <h3>Contact</h3>
        </div>
        <div className={classes.queryTextWrapper}>
          <h2>Any Type Of Query & Discussion.</h2>
        </div>
        <div className={classes.queryDescriptionTextWrapper}>
          <h3>
            
          </h3>
        </div>
        <div className={classes.mailTextWrapper}>
          <a href="mailto:ppankajshree@gmail.com">
            ppankajshree@gmail.com
          </a>
        </div>
      </div>
      <div className={classes.rightDiv}>
        <div className={classes.rightMessageWrapper}>
          <h3>
            You can't use up creativity, the more you use, more you have in your
            significant mind.
          </h3>
        </div>
        <div className={classes.meassageDescriptionWrapper}>
          <h3>
            
          </h3>
        </div>

        <div className={classes.experienceTextWrapper}>
          <div className={classes.projectTextWrapper}>
            <h2>1+</h2>
            <div>
              <h3>Year of</h3>
              <h3>Experience.</h3>
            </div>
          </div>
          <div className={classes.projectTextWrapper}>
            <h2>16+</h2>
            <div>
              <h3>Projects</h3>
              <h3>Completed.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
