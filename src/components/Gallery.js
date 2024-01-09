import React from 'react';
import { motion  } from 'framer-motion';
import { images } from '../images-data/Images';

import Thumbnail from './Thumbnail';

import '../styles/Gallery.scss';

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
                    { 
                        images.map(( i, id ) => (
                            <Thumbnail key={id} data={i} id={id} />
                        ))
                    }
                </motion.div>
            </div>
        </>
    )
}

export default Gallery