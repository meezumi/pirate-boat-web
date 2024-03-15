import { motion } from "framer-motion";
import { animationStart, reveal } from "./utils/animation";

function HeroText(){
  return (
  <motion.div
    layout
    initial={{height: 0}}
    animate={{height: "unset"}}
    transition={{delay: animationStart, duration: 1}}
    className="flex flex-col items-center text-center"
    > 
            <motion.div 
            variants={reveal} 
            initial="hiddenVariant" 
            animate="revealedVariant"
            transition={{ delay: animationStart + 1, duration: 0.5}} 
            className="flex flex-col text-3vw cmd:text-24px font-bold mb-30px pt-100px">
              <span>hello everyneean OwO</span>
              <span>how are you? finee thenkyouz</span>
            </motion.div>
            <motion.span
            variants={reveal} 
            initial="hiddenVariant" 
            animate="revealedVariant"
            transition={{ delay: animationStart + 1.2, duration: 0.5}}
            className="mb-30px w-1/4 clg:w-1/3 cmd:w-1/2 text-14px leading-tight">
              ouhh myy gaaahh! ahh I wishh i were a bird!! but i am a neko. If not a neko then what am I ? Mori, ur face looks like the previous prime minister, mori. 
            </motion.span>
  </motion.div>
  )
}

export default HeroText;

// definee animationStart in animationStart.ts under utils folder