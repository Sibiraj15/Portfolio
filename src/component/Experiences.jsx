import { EXPERIENCES } from "../constants"
import {motion} from "framer-motion"
const Experiences = () => {
  return (
    <div className="pb-4">
        <motion.h2 
         whileInView={{opacity: 1, y: 0}}
         initial={{opacity: 0, y: -100}}
         transition={{duration: 0.5}}
        className="my-20 text-center text-4xl font-bold">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full max-w-xl lg:w-3/4">
                <motion.h3 
                 whileInView={{opacity: 1, x: 0}}
                 initial={{opacity: 0, x: -100}}
                 transition={{duration: 1}}
                className="mb-2 font-semibold text-2xl">{experience.title}</motion.h3>
                <motion.p 
                 whileInView={{opacity: 1, x: 0}}
                 initial={{opacity: 0, x: 100}}
                 transition={{duration: 1}}
                className="mb-full text-stone-400">{experience.description}</motion.p>
                    </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Experiences