import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Card = ({ frases, btn }) => {
  // const {phrase, author} = frases.frases
 
  return (
    <article>
      <div className="banner">
      <SwitchTransition>
      <CSSTransition classNames='fade' key={frases.phrase}
      addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
      
        <h1>{frases.phrase}</h1>
      
      </CSSTransition>
      </SwitchTransition>
      </div>
      <div className="btn_container">
        <button onClick={btn}>PROBAR MI SUERTE</button>
      </div>
    </article>
  );
};

export default Card;
