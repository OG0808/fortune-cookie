import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { motion } from "framer-motion";
const Card = ({ frases, btn }) => {
  // const {phrase, author} = frases.frases

  return (
    <article>
      
      <SwitchTransition>
<CSSTransition
  key={frases.phrase}
 
  addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
  classNames='fade'
>
<div className="banner">
<h1 >{frases.phrase}</h1>
</div>
</CSSTransition>
</SwitchTransition>
           
            
        
      
      <div className="btn_container">
        <motion.button      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 70, damping: 5 }}
    onClick={btn}>PROBAR MI SUERTE</motion.button>
      </div>
    </article>
  );
};

export default Card;


