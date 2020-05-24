import React from 'react'
import styling from './ProjectItem.module.css'

export default function ProjectItem({ source }) {
    return (
        <div>
            <img src={source} className={styling.image} alt="" />
        </div>
    )
}
