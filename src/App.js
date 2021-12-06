import "./App.css";
import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { Grid } from "@material-ui/core";
import Portal from "./component/Portal";
import Orbs from "./component/Orbs";
import ChatBubble from "./component/ChatBubble";
import { insultsList } from "./constants/insults";

function App() {
 
  const insults = insultsList;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [punch, setPunch] = useState(false);
  const [msg, setMsg] = useState("");


  function handleSwitch() {
    if(isDarkMode===true){
      return
    }
    setIsDarkMode(!isDarkMode);
    if (isDarkMode === false) {
      setMsg("");
    }
  }
  function delay(n) {
    return new Promise(function (resolve) {
      setTimeout(resolve, n * 500);
    });
  }

  async function showPunch() {
    const rand = Math.floor(Math.random() * 3);
    console.log(rand);
    if (rand === 1) {
      setMsg(insults[Math.floor(Math.random() * insults.length)]);
      await delay(5);
      setPunch(true);
    } else {
      setMsg("");
      setPunch(true);
    }
  }
  function hidePunch() {
    setIsDarkMode(false);

    setPunch(false);
  }

  return (
    <div className="App">
      <header className={isDarkMode ? "App-header-dark" : "App-header-light"}>
      
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={6}>
              <Grid key={1} item>
                <DarkModeToggle
                  onChange={handleSwitch}
                  checked={isDarkMode}
                  size={180}
                  speed={1.5}
                />
              </Grid>
              {/* PORTAL GRID */}
              <Grid
                justifyContent="center"
                key={2}
                item
                style={{ "margin-left": "50px" }}
              >
                <Portal showPunch={showPunch} isDarkMode={isDarkMode} />
              </Grid>

              {/* PUNCH GRID */}

              <Grid key={3} item>
                <Orbs punch={punch} hidePunch={hidePunch} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <ChatBubble msg={msg} isDarkMode={isDarkMode} />
        
      </header>
    </div>
  );
}

export default App;
