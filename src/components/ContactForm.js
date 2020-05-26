import React from "react"
// import alert from "react-alert-template-mui"

export default function ContactForm() {
  // alert.show("Thanks for Submitting!", {
  //   actions: [
  //     {
  //       copy: "Back to website",
  //       onClick: reset,
  //     },
  //   ],
  // })

  const reset = function () {
    document.getElementById("contact").reset()
  }

  return (
    <div style={{ margin: `30px` }}>
      <h2 style={{ textAlign: `center` }}>Get in touch!</h2>
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
          <label>
            Don’t fill this out:
            <input name="bot-field" />
          </label>
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
        <div class="form-group">
          <label for="Textarea1"></label>
          <textarea
            class="form-control"
            id="ControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
      </form>
    </div>
  )
}
