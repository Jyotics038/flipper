import React from "react";

const questionmarkClass="bi bi-question-diamond-fill";
const iconClass=["bi bi-alarm-fill",
"bi bi-bell-fill",
"bi bi-bug-fill",
"bi bi-chat-left-text-fill",
"bi bi-constroller",
"bi bi-git",
"bi bi-code-slash",
"bi bi-camera-reels-fill"
];

const Card = (props) => {
  return (
    <div className="card col-3 ">
      <center>
        <div className="card mx-2 my-3 py-2 "onClick={()=>props.handleSelection(props.value)}>
        <h2>
          <i className={`${props.visible?iconClass[props.value%8]:questionmarkClass}`}></i>{props.value}
        </h2>
        </div>
        
      </center>
    </div>
  );
};

export default Card;
