import React from 'react'
import { Avatar } from '@material-ui/core';
import '../componentsStyle/Story.css';

function Story({ image, prfileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})`}} className="story">
            <Avatar className="story__avatar">RT</Avatar>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
