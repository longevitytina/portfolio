import React from "react"
import ProjectItem from "./ProjectItem"
import { DEFAULT_PROJECTS } from "../constants/projectPreviews"

const projects = DEFAULT_PROJECTS

export default function Projects() {
  return (
    <div style={{ marginTop: `80px`, marginLeft: `30px` }}>
      <h2>Recent Projects</h2>
      <div
        className="tiles"
        style={{
          display: `flex`,
          flexDirection: `row`,
          flexWrap: `wrap`,
          justifyContent: `space-evenly`,
          margin: `10px`,
        }}
      >
        {projects.map(project => (
          <>
            <ProjectItem {...project} />
          </>
        ))}
      </div>
    </div>
  )
}
