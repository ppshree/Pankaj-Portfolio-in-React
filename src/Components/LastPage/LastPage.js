import React from "react";
import classes from "./LastPage.module.css";

export default function LastPage() {
  return (
    <div className={classes.lastPageWrapper}>
      <div className={classes.leftDivWrapper}>
        <div className={classes.projectTitleWrapper}>
          <h3>Got a Project?</h3>
          <h3>Let's talk.</h3>
        </div>
        <div className={classes.projectDescription}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            possimus?
          </p>
        </div>
        <div className={classes.mailWrapper}>
          <a href="mailto:ppankajshree@gmail.com">
            ppankajshree@gmail.com
          </a>
        </div>
      </div>
      <div className={classes.rightDivWrapper}>
        <div className={classes.estimateProjectTitleWrapper}>
          <h3>Estimate your project?</h3>
          <h3>Let me know here.</h3>
        </div>
        <div className={classes.formWrapper}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className={classes.formActual}
          >
            <div className={classes.formContent}>
              <p>What's your name?</p>
              <input type="text" />
            </div>
            <div className={classes.formContent}>
              <p>Your email-id:</p>
              <input type="text" />
            </div>
            <div className={classes.formContent}>
              <p>Tell me about your project</p>
              <input type="text" />
            </div>
            <div>
              <button className={classes.submitBtn} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
