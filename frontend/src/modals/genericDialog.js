import React from "react";
import ReactDOM from "react-dom";

function genericModal(props) {
  return ReactDOM
    .createPortal(
       <div className="dialog-background">
         <div className="dialog-box">
          <span>{props.message}</span>
         </div>
       </div>,
       document.querySelector("#modal")                      //target DOM element
     );
}
export default genericModal;