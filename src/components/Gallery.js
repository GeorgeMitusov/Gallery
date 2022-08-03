import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { images } from '../images-data/Images'
import { useInView } from "react-intersection-observer";

import '../styles/Gallery.scss';

const imgTransition = { type: 'tween', duration: .5, ease: 'easeIn' };
const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
    initial: { scale: 1, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: { scale: 0, opacity: 0, transition }
  };

const frameVariants = { hover: { scale: 0.95 } };

const imageVariants = { hover: { scale: 1.1 } };


const Thumbnail = ({ id, i }) => {

    const controls = useAnimation();
    const [ref, inView ] = useInView();

    useEffect(() => {
        if ( inView ) {
            controls.start('enter')
        }
        else {
            controls.start('exit')
        }
    }, [controls, inView])

    return (
        <motion.div 
            ref={ref}
            className='thumbnail' 
            variants={thumbnailVariants} 
            initial="initial"
            animate={controls}
            exit='exit'
        >
            <motion.div
                className='frame'
                whileHover='hover'
                variants={frameVariants}
                transition={imgTransition}
                >
                <Link to={`/image/${i}`}>
                    <motion.img
                        src={`https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/t/${id}.jpg?format=1500w`}
                        alt="The Barbican"
                        variants={imageVariants}
                        transition={imgTransition}
                        />
                </Link>
            </motion.div>
        </motion.div>
    )
}

const Gallery = () => {

    return (
        <>
            <h1 className='title'> Barbican </h1>
            <div className='gallery'>
                <motion.div
                    className='thumbnails'
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={{ 
                        enter: { transition: { staggerChildren: 0.1 } },
                        exit: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    { images.map(( id, i ) => (
                        <Thumbnail key={i} id={id} i={i} />
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default Gallery