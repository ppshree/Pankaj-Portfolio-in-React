import React from "react";
import classes from "./Certificates.module.css";
import { certificateData } from "./utils/certificateData";

export default function Certificates() {
  return (
    <div>
      <div className={classes.introTextWrapper}>
        <div className={classes.grey_line_div}></div>
        <h3>Certificates</h3>
      </div>
      <div className={classes.certificateDivWrapper}>
        {certificateData.map((item) => {
          const { imageUrl, name, score, institute, preview } = item;
          return (
            <div className={classes.certificateDiv}>
              <div className={classes.certificateImageWrapper}>
                <img src={imageUrl} alt={name} />
              </div>
              <div className={classes.certificateInfoWrapper}>
                <h2>{name}</h2>
                <div>
                  <h3>
                    Score: <span className={classes.scoreText}>{score}</span>
                  </h3>
                  <h3>
                    {" "}
                    <span className={classes.instituteName}>
                      ({institute})
                    </span>{" "}
                  </h3>
                </div>
                <div className={classes.viewCertificateWrapper}>
                  <a href={preview} target="_blank">
                    View Certificate
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
