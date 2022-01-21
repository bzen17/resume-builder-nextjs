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
import { Menu, Dropdown, Button, Icon } from "semantic-ui-react";
import Link from "next/link";

export default function Header() {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Link href="/">
        <a className="item">Resume Builder</a>
      </Link>

      <Menu.Menu position="right">
        <Dropdown item text="Sample Resume">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link href="/sample/html-template.html">
                <a className="item" target="_blank">
                  HTML
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/sample/pdf-template.html" target="_blank">
                <a className="item">PDF</a>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
