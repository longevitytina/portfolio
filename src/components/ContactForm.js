import React from "react"
// import alert from "react-alert-template-mui"

export default function ContactForm() {
  const reset = function () {
    document.getElementById("contact").reset()
  }

  return (
    <div
      style={{
        padding: `10px`,
        backgroundColor: `rgba(212, 210, 213, 0.913)`,

        boxShadow: `8px 4px 8px 10px rgba(0, 0, 0, 0.2), 20px 6px 20px 0 rgba(0, 0, 0, 0.19)`,
      }}
    >
      <h2
        style={{
          textAlign: `center`,
          marginBottom: `25px`,
          marginTop: `10px`,
        }}
      >
        Get in touch!
      </h2>
      <form
        style={{ margin: `10px` }}
        id="contact"
        name="contact"
        method="post"
        action={reset}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p hidden>
          <input name="bot-field" />
        </p>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            id="ControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary btn-block">
          Submit
        </button>
      </form>
    </div>
  )
}
