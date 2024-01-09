import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

const Thumbnail = ({ data, id }) => {

    const controls = useAnimation();
    const [ ref, inView ] = useInView();
    const navigate = useNavigate();

    useEffect(() => {
        if ( inView ) {
            controls.start('enter')
        }
        else {
            controls.start('exit')
        }
    }, [controls, inView])

    const imgTransition = { type: 'tween', duration: .5, ease: 'easeIn' };
    const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
    
    const thumbnailVariants = {
        initial: { scale: 1, opacity: 0 },
        enter: { scale: 1, opacity: 1, transition },
        exit: { scale: 0, opacity: 0, transition }
      };
    
    const frameVariants = { hover: { scale: 0.95 } };
    
    const imageVariants = { hover: { scale: 1.1 } };

    const onImageClick = () => {
        navigate(`/image/${id}`);

        setTimeout(() => {
            window.location.reload(false)
        }, 1000);
    }

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
                <motion.img
                    onClick={onImageClick}
                    src={require(`../pictures/${data.src}.jpg`)}
                    alt={data.alt}
                    variants={imageVariants}
                    transition={imgTransition}
                />
            </motion.div>
        </motion.div>
    )
}

export default Thumbnail;