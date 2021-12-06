import "../App.css";
import React from "react";
import Anime from "react-anime";
import {
  GiMailedFist,
  GiUnstableOrb,
  GiDoubleRingedOrb,
  GiMoonOrbit,
  GiOrbitalRays,
  GiConcentrationOrb,
} from "react-icons/gi";
import FadeIn from "react-fade-in";

function Orbs(props) {
  const orbs = [
    <GiUnstableOrb
      color="#fdcc6c"
      style={{ marginTop: "25px" }}
      className={"flip"}
    />,
    <GiMailedFist
      color="#fdcc6c"
      style={{ marginTop: "25px" }}
      className={"flip"}
    />,
    <GiDoubleRingedOrb
      color="#fdcc6c"
      style={{ marginTop: "25px" }}
      className={"flip"}
    />,
    <GiMoonOrbit
      color="#fdcc6c"
      style={{ marginTop: "25px" }}
      className={"flip"}
    />,
    <GiOrbitalRays
      color="#fdcc6c"
      style={{ marginTop: "25px" }}
      className={"flip"}
    />,
    <GiConcentrationOrb
      color="#fdcc6c"
      style={{ marginTop: "25px" }}
      className={"flip"}
    />,
  ];
  return props.punch ? (
    <FadeIn transitionDuration={1000}>
      <Anime
        color={"#fdcc6c"}
        loop={false}
        duration={200}
        direction="alternate"
        delay={(el, index) => {
          return 860;
        }}
        translateX={[-170, -320]}
        complete={props.hidePunch}
        style={{ visibility: "hidden" }}
        scale={[2, 2]}
      >
        <div>{orbs[Math.floor(Math.random() * orbs.length)]}</div>
      </Anime>
    </FadeIn>
  ) : (
    <Anime
      style={{ visibility: "hidden" }}
      color={"#fdcc6c"}
      loop={false}
      duration={200}
      direction="alternate"
      delay={(el, index) => 860}
      translateX={[-170, -320]}
      //  translateY='15rem'
      scale={[2, 2]}
    >
      <div>
        <GiUnstableOrb
          color="#fdcc6c"
          style={{ marginTop: "25px", visibility: "hidden" }}
          className={"flip"}
        />
      </div>
    </Anime>
  );
}

export default Orbs;
