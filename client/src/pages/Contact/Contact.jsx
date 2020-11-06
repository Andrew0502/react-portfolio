import React from "react";
import "./contactstyle.css";

const Contact = () => {
  return (
    <main class="container">
      <div class="row">
        <div class="col-sm-7">
          <div class="card">
            <div class="card-body">
              <div class="col-md-12 mb-3">
                <label for="firstName">
                  <h1 class="h3 mb-3 font-weight-normal display-5">
                    Contact Me!
                  </h1>
                </label>
              </div>
              <hr id="underline"></hr>
              <section class="col-md-12 mb-3">
                <label for="firstName">
                  <h1 class="h3 mb-3 font-weight-normal ">Name</h1>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  placeholder="Name..."
                  value=""
                  required=""
                ></input>
                <div class="invalid-feedback">Valid name is required.</div>
              </section>

              <section class="col-md-12 mb-3">
                <label for="email">
                  <h1 class="h3 mb-3 font-weight-normal">Email</h1>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                ></input>
                <div class="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </section>

              <section class="col-md-12 mb-3">
                <label for="Message">
                  Message<span class="text-muted">(Optional)</span>
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="message"
                  placeholder="message"
                ></textarea>
              </section>

              <section class="col-md-12 offset-md-3">
                <button
                  class="btn btn-primary btn-lg btn-block submit-button"
                  type="submit"
                >
                  Submit
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
