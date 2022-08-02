import styles from './CircularProgress.module.scss';
import React from 'react';

interface CircularProgressProps{
    className?: string,
}

const CircularProgress: React.FC<CircularProgressProps> = (props) => {
    const {className} = props;
    return(
        <div className={`${styles.cpContainer}  ${className ? className :'' }`}>
            <img src="https://newassets.apollo247.com/images/loader.gif" alt="" />
        </div>
    )
}

export default CircularProgress;