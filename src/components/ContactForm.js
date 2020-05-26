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
      <h2>Get in touch!</h2>
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
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}
