import React from "react";

const questionmarkClass="bi bi-question-diamond-fill";
const iconClass=["bi bi-alarm-fill",
"bi bi-bell-fill",
"bi bi-bug-fill",
"bi bi-chat-left-text-fill",
"bi bi-controller",
"bi bi-emoji-laughing",
"bi bi-code-slash",
"bi bi-camera-reels-fill"
];

const Card = (props) => {
  return (
    <div className="col-3 ">
      <center>
        <div className={`card bg-${props.theme} mx-2 my-3 py-2 `}onClick={()=>props.handleSelection(props.value)}>
        <h2 className={`text-${props.theme=== "light" ? "dark" : "light"}`}>
          <i style={{color: props.bgCol==='success'?'green':props.bgCol==='danger'?'red':""}}
          className={`${props.visible?iconClass[props.value%8]:questionmarkClass}`}></i>{}
        </h2>
        </div>
        
      </center>
    </div>
  );
};

export default Card;
