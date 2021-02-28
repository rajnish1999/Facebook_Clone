import React from 'react'
import '../componentsStyle/StoryReel.css'
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://picsum.photos/200"
                profileSrc="https://picsum.photos/200"
                title="Rajnish Tiwari"
            />
            <Story 
                image="https://picsum.photos/200"
                profileSrc="https://picsum.photos/200"
                title="Rajnish Tiwari"
            />
            <Story 
                image="https://picsum.photos/200"
                profileSrc="https://picsum.photos/200"
                title="Rajnish Tiwari"
            />
            <Story 
                image="https://picsum.photos/200"
                profileSrc="https://picsum.photos/200"
                title="Rajnish Tiwari"
            />
            <Story 
                image="https://picsum.photos/200"
                profileSrc="https://picsum.photos/200"
                title="Rajnish Tiwari"
            />
        </div>
    )
}

export default StoryReel
