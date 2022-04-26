
import React from "react";
import { Image } from "semantic-ui-react";

export default function Top() {
  return (
    <section
      id="section-01"
      className="section section-sub-header animation interaction-in"
    >
      <div className="section-body">
        <div className="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
          <Image
            src="/htmlTemplate/avatar.jpg"
            className="jumbotron-Image animation-translate animation-item-1"
            alt="Avatar"
          />
          <h1 className="display-1 display-animated display-animated-in animation-translate animation-item-2">
            John
            <br />
            Wilson
          </h1>
          <p className="lead animation-translate animation-item-3">
            FREELANCE WEBDEVELOPER
          </p>
        </div>
      </div>
      <div className="section-footer animation-translate animation-item-4">
        <a className="section-next goto-section" href="#section-02">
          <span className="section-next-counter">01/10</span>
          <span className="section-next-label">Next chapter</span>
          <span className="section-next-icon"></span>
        </a>
      </div>
    </section>
  );
}
