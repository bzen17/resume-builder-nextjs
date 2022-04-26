import React, { useEffect, useState } from "react";

const FinalTemplate = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    localStorage.getItem("userData")
      ? setData(JSON.parse(localStorage.getItem("userData")))
      : "";
  }, []);
  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  return `
  <!DOCTYPE html>
<!-- saved from url=(0049) -->
<html lang="cs">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link href="/sample/htmlTemplate/css" rel="stylesheet" />
    <link href="/sample/htmlTemplate/yellow-black.css" rel="stylesheet" />
    <link href="/sample/htmlTemplate/preview.css" rel="stylesheet" />
    <title>${data ? data.bio.fn + " " + data.bio.ln : ""} | Portfolio</title>
  </head>
  <body
    class="with-header position-relative"
    data-spy="scroll"
    data-target="#sections-nav"
    data-offset="80"
    data-new-gr-c-s-check-loaded="14.1043.0"
    data-gr-ext-installed=""
  >
    <header class="header">
      <div
        class="container-fluid-limited d-flex align-items-center justify-content-between"
      >
        <div>
        <div/>
        <button class="sections-nav-toggler" aria-label="Toggle navigation">
          <span class="sections-nav-toggler-bar"></span>
          <span class="sections-nav-toggler-bar"></span>
          <span class="sections-nav-toggler-bar"></span>
          <span class="sections-nav-toggler-bar"></span>
        </button>
      </div>
    </header>
    <nav class="sections-nav-container">
      <ul id="sections-nav" class="nav sections-nav sections-nav-animated">
        <li class="sections-nav-item">
          <a
            href="#section-01"
            class="nav-link sections-nav-link goto-section active"
          >
            <span class="sections-nav-counter">01</span>
            Top
          </a>
        </li>
        <li class="sections-nav-item">
          <a href="#section-02" class="nav-link sections-nav-link goto-section">
            <span class="sections-nav-counter">02</span>
            About me
          </a>
        </li>
        <li class="sections-nav-item">
          <a href="#section-03" class="nav-link sections-nav-link goto-section">
            <span class="sections-nav-counter">03</span>
            Experiences
          </a>
        </li>
        <li class="sections-nav-item">
          <a href="#section-04" class="nav-link sections-nav-link goto-section">
            <span class="sections-nav-counter">04</span>
            My Expertise
          </a>
        </li>
        <li class="sections-nav-item">
          <a href="#section-05" class="nav-link sections-nav-link goto-section">
            <span class="sections-nav-counter">05</span>
            Skills
          </a>
        </li>
        <li class="sections-nav-item">
          <a href="#section-06" class="nav-link sections-nav-link goto-section">
            <span class="sections-nav-counter">06</span>
            Projects
          </a>
        </li>
        <li class="sections-nav-item">
          <a href="#section-07" class="nav-link sections-nav-link goto-section">
            <span class="sections-nav-counter">07</span>
            Certifications
          </a>
        </li>
        <li class="sections-nav-item">
          <a href="#section-08" class="nav-link sections-nav-link goto-section">
            <span class="sections-nav-counter">08</span>
            Contact
          </a>
        </li>
        <li class="sections-nav-item">
          <div class="sections-nav-info">
          ${
            data && data.contact
              ? `
          <a href="${data.contact.email}">${data.contact.email}</a><br />
          <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
          `
              : ""
          }
          </div>
        </li>
        
      </ul>
    </nav>
    <main class="content">
      <div class="container-fluid-limited">
        <div class="row">
          <div class="col col-xl-9">
            <section
              id="section-01"
              class="section animation interaction-in"
            >
              <div class="section-body">
                <div class="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
                  <img
                  ${
                    data && data.bio && data.bio.image
                      ? `src="${data.bio.image.objURL}"`
                      : ""
                  }
                    class="jumbotron-img animation-translate animation-item-1"
                  />
                  <h1
                    class="display-1 display-animated display-animated-in animation-translate animation-item-2"
                  >
                  ${data ? data.bio.fn + "<br />" + data.bio.ln : ""}
                  </h1>
                  <p class="lead animation-translate animation-item-3">
                  ${data ? data.bio.role : ""}
                  </p>
                </div>
              </div>
              <div class="section-footer animation-translate animation-item-4">
                <a class="section-next goto-section" href="#section-02">
                  <span class="section-next-counter">01/08</span>
                  <span class="section-next-label">Next chapter</span>
                  <span class="section-next-icon"></span>
                </a>
              </div>
            </section>
            <section id="section-02" class="section animation interaction-in">
              <div class="section-body">
                <div class="row">
                  <div class="col col-xl-10">
                    <h2
                      class="section-title animation-translate-overline animation-item-1"
                    >
                    ${data ? data.bio.sumHeader : ""}
                    </h2>
                    
                    <article
                      class="article animation-translate animation-item-2"
                    >
                    ${data ? data.bio.about : ""}
                    </article>
                    
                   
                  </div>
                </div>
              </div>
              <div>
                    <h5>I speak:</h3>
                    <p className="card-tags">${
                      data &&
                      data.bio &&
                      data.bio.languages &&
                      data.bio.languages.join(" - ")
                    }</p>
                    </div>
              <div class="section-footer animation-translate animation-item-3">
                <a class="section-next goto-section" href="#section-03">
                  <span class="section-next-counter">02/08</span>
                  <span class="section-next-label">Next chapter</span>
                  <span class="section-next-icon"></span>
                </a>
              </div>
            </section>
            <section id="section-03" class="section animation">
              <div class="section-body">
                <h2
                  class="section-title animation-translate-overline animation-item-1"
                >
                  Experiences
                </h2>
                <div class="timeline timeline-animated">
                ${
                  data && data.experience
                    ? data.experience
                        .map((item, index) => {
                          return `<div className="timeline-item" key=${
                            "experience" + index
                          }>
                  <span className="timeline-date">${
                    item.startMonth + "/" + item.startYear
                  }&nbsp;–&nbsp;${item.endMonth + "/" + item.endYear}</span>
                  <h3 className="timeline-title">${item.org}</h3>
                  <p className="timeline-text">
                    ${item.title}
                  </p>
                </div>`;
                        })
                        .join("")
                    : ""
                }
                </div>
              </div>
              <div class="section-footer animation-translate animation-item-2">
                <a class="section-next goto-section" href="#section-04">
                  <span class="section-next-counter">03/08</span>
                  <span class="section-next-label">Next chapter</span>
                  <span class="section-next-icon"></span>
                </a>
              </div>
            </section>
            <section id="section-04" class="section animation interaction-in">
              <div class="section-body">
                <h2
                  class="section-title animation-translate-overline animation-item-1"
                >
                  My Expertise
                </h2>
                ${
                  data && data.expertise
                    ? sliceIntoChunks(data.expertise, 3)
                        .map((row, i) => {
                          return `<div className="row animation-translate animation-item-2">
                      ${row
                        .map((col, index) => {
                          return `<div className="col-12 col-md-4">
                          <div className="card card">
                            <div className="card-body">
                              <strong className="card-counter">${
                                index + 1
                              }</strong>
                              <h3 className="card-title">${col.title}</h3>
                              <p className="card-text">
                                ${col.desc}
                              </p>
                            </div>
                          </div>
                        </div>`;
                        })
                        .join("")}
                    </div>`;
                        })
                        .join("")
                    : ""
                }
              </div>
              <div class="section-footer animation-translate animation-item-3">
                <a class="section-next goto-section" href="#section-05">
                  <span class="section-next-counter">04/08</span>
                  <span class="section-next-label">Next chapter</span>
                  <span class="section-next-icon"></span>
                </a>
              </div>
            </section>
            <section id="section-05" class="section animation interaction-in">
              <div class="section-body">
                <h2
                  class="section-title animation-translate-overline animation-item-1"
                >
                  Skills
                </h2>
                ${
                  data && data.skills
                    ? sliceIntoChunks(data.skills, 2)
                        .map((row, i) => {
                          return `<div className="row animation-translate animation-item-2">
                      ${row
                        .map((col, index) => {
                          return `<div className="col-12 col-md-6">
                          <strong className="progress-label">${col}</strong>
                          <div className="progress progress-animated mb-9">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style="width: 75%"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          </div>`;
                        })
                        .join("")}
                    </div>`;
                        })
                        .join("")
                    : ""
                }
              </div>
              <div class="section-footer animation-translate animation-item-3">
                <a class="section-next goto-section" href="#section-06">
                  <span class="section-next-counter">05/08</span>
                  <span class="section-next-label">Next chapter</span>
                  <span class="section-next-icon"></span>
                </a>
              </div>
            </section>
            <section id="section-06" class="section animation interaction-in">
              <div class="section-body">
                <h2
                  class="section-title animation-translate-overline animation-item-1"
                >
                  Projects
                </h2>
                ${
                  data && data.projects
                    ? sliceIntoChunks(data.projects, 3)
                        .map((row, i) => {
                          return `<div className="row animation-translate animation-item-2">
                      ${row
                        .map((col, index) => {
                          return `<div className="col-12 col-md-4">
                          <a className="card" href="#modal-project-${
                            index + 1
                          }" data-toggle="modal">
                            <img
                              className="card-img-top"
                              src="${col.image.objURL}"
                              alt="${col.name}"
                            />
                            <div className="card-body">
                              <h3 className="card-title">${col.name}</h3>
                              <h4 className="card-subtitle">${
                                col.shortDesc
                              }</h4>
                               <p className="card-tags">${col.techStack.join(
                                 " - "
                               )}</p>
                            </div>
                          </a>
                        </div>`;
                        })
                        .join("")}
                    </div>`;
                        })
                        .join("")
                    : ""
                }
              </div>
              <div class="section-footer animation-translate animation-item-3">
                <a class="section-next goto-section" href="#section-07">
                  <span class="section-next-counter">06/08</span>
                  <span class="section-next-label">Next chapter</span>
                  <span class="section-next-icon"></span>
                </a>
              </div>
            </section>
            <section id="section-07" class="section animation interaction-in">
              <div class="section-body">
                <h2
                  class="section-title animation-translate-overline animation-item-1"
                >
                  Certifications
                </h2>
                ${
                  data && data.certifications
                    ? sliceIntoChunks(data.certifications, 3)
                        .map((row, i) => {
                          return `<div className="row animation-translate animation-item-2">
                    ${row
                      .map((col, index) => {
                        return `<div className="col-12 col-md-4">
                        <a className="card" href="${col.url}" target="_blank">
                          <img
                            className="card-img-top"
                            src="${col.image.objURL}"
                            alt="${col.name}"
                          />
                          <div className="card-body">
                            <h3 className="card-title">${col.name}</h3>
                          </div>
                        </a>
                      </div>`;
                      })
                      .join("")}
                    </div>`;
                        })
                        .join("")
                    : ""
                }
              </div>
              <div class="section-footer animation-translate animation-item-3">
                <a class="section-next goto-section" href="#section-08">
                  <span class="section-next-counter">07/08</span>
                  <span class="section-next-label">Next chapter</span>
                  <span class="section-next-icon"></span>
                </a>
              </div>
            </section>
            <section id="section-08" class="section animation">
              <div class="section-body">
                <h2
                  class="section-title animation-translate-overline animation-item-1"
                >
                  Contact
                </h2>
                <div class="row mb-10 animation-translate animation-item-2">
                  <div class="col-12 col-md-4">
                    <div class="contact">
                      <strong class="contact-label">Stay in touch</strong>
                      ${
                        data && data.contact
                          ? `
                      <a href="${data.contact.email}">${data.contact.email}</a><br />
                      <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                      `
                          : ""
                      }
                    </div>
                  </div>
                  ${
                    data &&
                    data.contact &&
                    (data.contact.website ||
                      data.contact.linkedin ||
                      data.contact.git ||
                      data.contact.twitter)
                      ? `
                  <div class="col-12 col-md-4">
                    <div class="contact">
                      <strong class="contact-label">Social</strong>
                      ${
                        data.contact.website
                          ? `<a href="${data.contact.website}" target="_blank">Website</a><br />`
                          : ""
                      }
                      ${
                        data.contact.linkedin
                          ? `<a href="${data.contact.linkedin}" target="_blank">LinkedIn</a><br />`
                          : ""
                      }
                      ${
                        data.contact.git
                          ? `<a href="${data.contact.git}" target="_blank">Git</a><br />`
                          : ""
                      }
                      ${
                        data.contact.twitter
                          ? `<a href="${data.contact.twitter}" target="_blank">Twitter</a><br />`
                          : ""
                      }
                    </div>
                  </div>`
                      : ""
                  }
                  <div class="col-12 col-md-4">
                    <div class="contact">
                      <strong class="contact-label">Address</strong>
                      ${data && data.contact ? data.contact.address : ""}
                      
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-xl-9">
                    <h3
                      class="section-subtitle animation-translate animation-item-3"
                    >
                      Leave a message
                    </h3>
                    <form
                      class="needs-validation animation-translate animation-item-4"
                      novalidate=""
                    >
                      <div class="row">
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <label for="contact-form-name">Name</label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="contact-form-name"
                              placeholder="Your name"
                              required=""
                            />
                            <div class="invalid-feedback">
                              Please enter your name.
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <div class="form-group">
                            <label for="contact-form-name">E-mail</label>
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="contact-form-email"
                              placeholder="@"
                              required=""
                            />
                            <div class="invalid-feedback">
                              Please enter a valid e-mail address.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="contact-form-message">Message</label>
                        <textarea
                          class="form-control"
                          name="message"
                          id="contact-form-message"
                          placeholder="Your message"
                          rows="5"
                          required=""
                        ></textarea>
                        <div class="invalid-feedback">
                          Please type some message.
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="section-footer animation-translate animation-item-5">
                <span class="section-next goto-section">
                  <span class="section-next-counter">08/08</span>
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <!-- Modals -->
    <div
      id="modal-project-1"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fluid">
        <div class="modal-content">
          <div class="modal-header">
            &nbsp;
            <button
              type="button"
              class="modal-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="d-none">×</span>
            </button>
          </div>
          <div class="modal-body">
            <article class="article">
              <div class="article-header">
                <h2 class="article-title">Nanovo</h2>
                <h3 class="article-subtitle">Design e-shop</h3>
                <p class="article-tags">Design — Frontend — Backend</p>
              </div>
              <div class="row flex-column-reverse flex-lg-row">
                <div class="col-12 col-lg-6">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                  <p>
                    Stet clita, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <div class="col-12 col-lg-6">
                  <img
                    class="img-fluid mb-10"
                    src="/sample/htmlTemplate/project_1.jpg"
                    alt="Nanovo"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div
      id="modal-project-2"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fluid">
        <div class="modal-content">
          <div class="modal-header">
            &nbsp;
            <button
              type="button"
              class="modal-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="d-none">×</span>
            </button>
          </div>
          <div class="modal-body">
            <article class="article">
              <div class="article-header">
                <h2 class="article-title">Bbop</h2>
                <h3 class="article-subtitle">Social Network for Musicians</h3>
                <p class="article-tags">Design — Frontend — Backend</p>
              </div>
              <div class="row flex-column-reverse flex-lg-row">
                <div class="col-12 col-lg-6">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                  <p>
                    Stet clita, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <div class="col-12 col-lg-6">
                  <img
                    class="img-fluid mb-10"
                    src="/sample/htmlTemplate/project_2.jpg"
                    alt="Nanovo"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <div
      id="modal-project-3"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fluid">
        <div class="modal-content">
          <div class="modal-header">
            &nbsp;
            <button
              type="button"
              class="modal-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span class="d-none">×</span>
            </button>
          </div>
          <div class="modal-body">
            <article class="article">
              <div class="article-header">
                <h2 class="article-title">Janja Prokić</h2>
                <h3 class="article-subtitle">Jewelry e-shop</h3>
                <p class="article-tags">Frontend — Backend</p>
              </div>
              <div class="row flex-column-reverse flex-lg-row">
                <div class="col-12 col-lg-6">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                  <p>
                    Stet clita, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua.
                  </p>
                </div>
                <div class="col-12 col-lg-6">
                  <img
                    class="img-fluid mb-10"
                    src="/sample/htmlTemplate/project_2.jpg"
                    alt="Nanovo"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <script src="/sample/htmlTemplate/all.js"></script>
    <script>
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();

        $(".preview-theme").click(function () {
          $("link")[1].href = $(this).data("theme");
          var imgSrcData =
            $(this).data("theme-bg") === "light" ? "dark-src" : "light-src";
          $("img[data-" + imgSrcData + "]").each(function () {
            $(this).attr("src", $(this).data(imgSrcData));
          });

          return false;
        });
      });

      // Bootstrap form validation example
      (function () {
        "use strict";
        window.addEventListener(
          "load",
          function () {
            var forms = document.getElementsByClassName("needs-validation");
            var validation = Array.prototype.filter.call(
              forms,
              function (form) {
                form.addEventListener(
                  "submit",
                  function (event) {
                    if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                    form.classList.add("was-validated");
                  },
                  false
                );
              }
            );
          },
          false
        );
      })();
    </script>
  </body>
  <grammarly-desktop-integration
    data-grammarly-shadow-root="true"
  ></grammarly-desktop-integration>
</html>
`;
};

export default FinalTemplate;
