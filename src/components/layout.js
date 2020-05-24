import React from "react"
import Header from "./Header"
import Projects from "./Projects"

export default function Layout({ children }) {
    return (
        <div >
            <Header />
            {children}
            <Projects />
        </div>
    )
}