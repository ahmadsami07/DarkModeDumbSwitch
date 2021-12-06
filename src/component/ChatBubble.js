

import React from "react";



function ChatBubble(props){
    return (

        props.isDarkMode === true && props.msg !== "" ? (
            <div class="mine messages">
              <div class="message last">{props.msg}</div>
            </div>
          ) : (
            <div class="mine messages" style={{ visibility: "hidden" }}>
              <div class="message last" style={{ visibility: "hidden" }}>
                This is a hidden message to avoid screen jerks{" "}
              </div>
            </div>
          )
    )
}

export default ChatBubble;