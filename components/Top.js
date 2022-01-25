// Copyright 2022 Ayan Banerjee
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from "react";
import Image from "next/image";

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
