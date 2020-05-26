import React from "react"
import { Button } from "react-bootstrap"
import styling from "./ProjectItem.module.css"

export default function ProjectItem({ source, link }) {
  return (
    <div
      style={{
        position: `relative`,
      }}
    >
      <img
        src={source}
        className={styling.image}
        alt=""
        style={{
          boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        }}
      />
      <Button
        variant="outline-secondary"
        size="sm"
        style={{
          position: `absolute`,
          top: `50%`,
          left: `35%`,
        }}
        href={link}
        target="_blank"
      >
        View Project
      </Button>
    </div>
  )
}
