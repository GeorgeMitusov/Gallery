import * as React from 'react'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { images } from "../images-data/Images";

import '../styles/SingleImage.scss';

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  
const imageVariants = {
    exit: { y: "50%", opacity: 0, transition },
    enter: {
      y: "0%",
      opacity: 1,
      transition
    }
};

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

const SingleImage = () => {
    
    const params = useParams();

    const id = images[parseInt(params.id, 10)];

    const imgSrc = require(`../pictures/${id.src}.jpg`);

    return (
        <motion.div className='single' initial="exit" animate="enter" exit='exit'>
           <motion.img
                variants={imageVariants}
                src={imgSrc}
                alt="The Barbican"
            />
            <motion.div className='back' variants={backVariants}>
                <Link to="/"> ← Back </Link>
            </motion.div>
        </motion.div>
    )
}

export default SingleImage