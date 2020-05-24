import React from 'react'
import ProjectItem from './ProjectItem'
import { DEFAULT_PROJECTS } from '../constants/projectPreviews'

const projects = DEFAULT_PROJECTS

export default function Projects() {
    return (
        <div>
            <h2>All Projects</h2>
            {projects.map((project) => (
                <ProjectItem
                    {...project}
                />

            ))
            }
        </div>
    )
}
