import "../App.css";
import React from "react";
import Anime from "react-anime";
import FadeIn from "react-fade-in";

function Portal(props) {
  return (
    props.isDarkMode ? (
        <FadeIn transitionDuration={1000} onComplete={props.showPunch}>
          <Anime opacity={[0, 1]}>
            <div
              className="backDoor"
              style={{
                backgroundColor: props.isDarkMode
                  ? "#282c34"
                  : "whitesmoke",
              }}
            ></div>
          </Anime>
        </FadeIn>
      ) : (
        <Anime style={{ visibility: "hidden" }}>
          <div
            className="backDoor"
            style={{
              backgroundColor: props.isDarkMode ? "#282c34" : "whitesmoke",
              visibility: "hidden",
            }}
          ></div>
        </Anime>
      )
  );
}

export default Portal;
