import { EDUCATION } from '../constants'
import { motion } from "framer-motion";
const Education = () => {
  return (
     <div className="pb-4">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl font-bold">Education</motion.h2>
        <div>{EDUCATION.map((Education, index)=>
        (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
               
                <div className="w-full max-w-xl lg:w-3/4">
                <motion.h3 
                 whileInView={{opacity: 1, x: 0}}
                 initial={{opacity: 0, x: -100}}
                 transition={{duration: 1}}
                    className="mb-2 font-semibold text-2xl">{Education.title}</motion.h3>
                  <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
           >
            <p className="mb-full text-stone-400">{Education.academy}</p>
            <p className="mb-full text-stone-400">{Education.year}</p>
            <p className="mb-full text-stone-400">{Education.cpga}</p>
            </motion.div>

                    </div>
            </div>
        ))}</div>
       </div>
  )
}

export default Education