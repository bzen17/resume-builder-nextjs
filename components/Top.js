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

export default function Top() {
  return (
    <section
      id="section-01"
      class="section section-sub-header animation interaction-in"
    >
      <div class="section-body">
        <div class="jumbotron jumbotron-fluid pt-6 pt-lg-8 pb-0 mb-0">
          <img
            src="/htmlTemplate/avatar.jpg"
            class="jumbotron-img animation-translate animation-item-1"
            alt="Avatar"
          />
          <h1 class="display-1 display-animated display-animated-in animation-translate animation-item-2">
            John
            <br />
            Wilson
          </h1>
          <p class="lead animation-translate animation-item-3">
            FREELANCE WEBDEVELOPER
          </p>
        </div>
      </div>
      <div class="section-footer animation-translate animation-item-4">
        <a class="section-next goto-section" href="#section-02">
          <span class="section-next-counter">01/10</span>
          <span class="section-next-label">Next chapter</span>
          <span class="section-next-icon"></span>
        </a>
      </div>
    </section>
  );
}
