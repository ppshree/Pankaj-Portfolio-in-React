import React from "react";
import classes from "./SkillsPage.module.css";

export default function SkillsPage() {
  return (
    <div className={classes.skillsPageWrapper}>
      <div className={classes.qualificationWrapper}>
        <div className={classes.grey_line_div}></div>
        <h2>Skills</h2>
      </div>

      <div className={classes.skillsWrapper}>
        <div>
          <h3>- Programming Languages:</h3>
          <div className={classes.pLanguagesWrapper}>
            <span className={classes.pLanguagesBox}>C</span>
            <span className={classes.pLanguagesBox}>C++</span>
            <span className={classes.pLanguagesBox}>HTML5</span>
            <span className={classes.pLanguagesBox}>CSS3</span>
            <span className={classes.pLanguagesBox}>JavaScript</span>
          </div>
        </div>
        <div className={classes.databaseWrapper}>
          <h3>- Others:</h3>
          <div className={classes.pLanguagesWrapper}>
            <span className={classes.pLanguagesBox}>DSA</span>
           
          </div>
        </div> 
        <div className={classes.databaseWrapper}>
          <h3>- FrameWorks & Libraries:</h3>
          <div className={classes.pLanguagesWrapper}>
            <span className={classes.pLanguagesBox}>React JS</span>
          </div>
        </div>
        <div className={classes.databaseWrapper}>
          <h3>- Tools:</h3>
          <div className={classes.pLanguagesWrapper}>
            <span className={classes.pLanguagesBox}>Visual Studio Code</span>
            <span className={classes.pLanguagesBox}>CodeBlocks</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}
