import React from "react";
import classes from "./Projects.module.css";
import cricketImage from "./images/cricket-app-min.png";
import adminPanelImage from "./images/basic-admin-panel-min.png";
import calculatorImage from "./images/calculator-app-min.png";
import hotelMenuImage from "./images/hotel-menu-app-min.png";
import movieAppImage from "./images/movies-app-min.png";
import musicPlayerImage from "./images/music-player-app-min.png";
import nuukWebsiteImage from "./images/nuuk_replica_app_min.png";
import quizAppImage from "./images/quiz-app-min.png";
import shoppingAppImage from "./images/shopping-app-min.png";
import simpleTodoAppImage from "./images/simple-todo-app-min.png";
import videoPlayerAppImage from "./images/video-player-app-min.png";

import { projectData } from "./utils/projectData";

export default function Projects() {
  const imagesArr = [
    cricketImage,
    adminPanelImage,
    calculatorImage,
    hotelMenuImage,
    movieAppImage,
    musicPlayerImage,
    nuukWebsiteImage,
    quizAppImage,
    shoppingAppImage,
    simpleTodoAppImage,
    videoPlayerAppImage,
  ];
  return (
    <div>
      <div className={classes.qualificationWrapper}>
        <div className={classes.grey_line_div}></div>
        <h2>Projects</h2>
      </div>
      <div className={classes.projectDivWrapper}>
        {projectData.map((item, pos) => {
          const { name, description, previewLink, repoLink } = item;
          return (
            <div className={classes.projectDiv}>
              <div className={classes.projectDivLeft}>
                <img src={imagesArr[pos]} alt="nuuk website" />
              </div>
              <div className={classes.projectDivRight}>
                <h2>{name}</h2>
                <h3>{`(${description})`}</h3>
                <div className={classes.projectLinksWrapper}>
                  <a href={previewLink} target="_blank">
                    Project Preview <i class="fas fa-arrow-right"></i>
                  </a>
                  <a href={repoLink} target="_blank">
                    Project Repository
                    <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
