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

import React, { useState } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

const SideBar = ({ activeItem, setActiveItem }) => {
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <Grid.Column width={4}>
      <Menu fluid vertical tabular>
        <Menu.Item
          key="bio"
          name="bio"
          active={activeItem === "bio"}
          onClick={handleItemClick}
        />
        <Menu.Item
          key="experience"
          name="experience"
          active={activeItem === "experience"}
          onClick={handleItemClick}
        />
        <Menu.Item
          key="skills"
          name="skills"
          active={activeItem === "skills"}
          onClick={handleItemClick}
        />
        <Menu.Item
          key="projects"
          name="projects"
          active={activeItem === "projects"}
          onClick={handleItemClick}
        />
        <Menu.Item
          key="certifications"
          name="certifications"
          active={activeItem === "certifications"}
          onClick={handleItemClick}
        />
        <Menu.Item
          key="language"
          name="languages"
          active={activeItem === "languages"}
          onClick={handleItemClick}
        />
        <Menu.Item
          key="contact"
          name="contact"
          active={activeItem === "contact"}
          onClick={handleItemClick}
        />
      </Menu>
    </Grid.Column>
  );
};

export default SideBar;
