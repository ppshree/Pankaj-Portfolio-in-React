import React, { useState } from "react";
import classes from "./TopBar.module.css";
import { Link } from "react-router-dom";
import video from "./logo/pankaj.mp4";
import poster from "./logo/pankaj.jpg";

export default function TopBar() {
  const [showHideClass, setShowHideClass] = useState([classes.navBarWrapper]);
  const [iconClassBars, setIconClassBars] = useState("fas fa-bars");
  const [isShow, setIsShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const changeShow = () => {
    if (isShow) {
      setShowHideClass([classes.navBarWrapper]);
      setIconClassBars("fas fa-bars");
      setIsShow(false);
    } else {
      setShowHideClass([classes.navBarWrapperShow]);
      setIconClassBars("fas fa-times");
      setIsShow(true);
    }
  };
  const playMovie = (e) => {
    e.target.play();
    console.log("on");
  };

  const stopMovie = (e) => {
    //e.target.pause();
    console.log("off");
  };

  return (
    <div className={classes.topbar_wrapper}>
      <div className={classes.homeIconWrapper}>
        <Link to="/" className={classes.routerLinks}>
          <video
            width="70"
            height="70"
            onMouseOver={playMovie}
            onMouseOut={stopMovie}
            src={video}
            poster={poster}
            preload="none"
            loop
            muted="muted"
          />
        </Link>
      </div>
      <div className={classes.right_div}>
        <div onClick={changeShow} className={classes.hamburgerWrapper}>
          <i class={iconClassBars}></i>
        </div>
        <div className={classes.horizontalNavbarWrapper}>
          <Link to="/resume" className={classes.routerLinks}>
            <i class="fas fa-file"></i>
            <span>Resume</span>
          </Link>
          <Link to="/projects" className={classes.routerLinks}>
            <i class="fas fa-project-diagram"></i>
            <span>Projects</span>
          </Link>
          {/* <Link to="/contact" className={classes.routerLinks}>
            <i class="fas fa-envelope"></i>
            <span>Contact</span>
          </Link> */}
        </div>
      </div>

      <div className={showHideClass}>
        <Link to="/" className={classes.routerLinks} onClick={changeShow}>
          <i class="fas fa-home"></i>
          <span>Home</span>
        </Link>
        <Link to="/resume" onClick={changeShow} className={classes.routerLinks}>
          <i class="fas fa-file"></i>
          <span>Resume</span>
        </Link>
        <Link
          to="/projects"
          onClick={changeShow}
          className={classes.routerLinks}
        >
          <i class="fas fa-project-diagram"></i>
          <span>Projects</span>
        </Link>
        {/* <Link
          to="/contact"
          onClick={changeShow}
          className={classes.routerLinks}
        >
          <i class="fas fa-envelope"></i>
          <span>Contact</span>
        </Link> */}
      </div>
    </div>
  );
}
