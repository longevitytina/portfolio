import React from "react"
import Header from "./Header"
import Projects from "./Projects/components/Projects"

export default function Layout({ children }) {
    return (
        <div >
            <Header />
            {children}
            <Projects />
        </div>
    )
}