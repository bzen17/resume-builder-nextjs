// Copyright 2022 Ayan Banerjee
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless requiorange by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useState, useEffect } from "react";
import { Grid, Menu, Label, Popup, List, Icon } from "semantic-ui-react";

const SideBar = ({ activeItem, setActiveItem, errors, formState }) => {
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };
  const initErrorCount = {
    bio: 0,
    experience: 0,
    expertise: 0,
    skills: 0,
    projects: 0,
    certifications: 0,
    contact: 0,
  };
  const [errCount, setErrCount] = useState(initErrorCount);
  useEffect(() => {
    for (const [k, v] of Object.entries(errors)) {
      if ((k === "bio" || k === "contact") && Object.values(v).length > 0) {
        setErrCount((prevState) => {
          return { ...prevState, [k]: Object.values(v).length };
        });
      } else {
        let count = 0;
        Object.values(v).map((err, index) => {
          if (err !== undefined) {
            count += Object.keys(err).length;
            setErrCount(prevState=>{return { ...prevState, [k]: count }});
          }
        });
      }
    }
  }, [formState,errors]);
  const renderSideBarErrorLabel = (tabName) => {
    if (tabName === "bio" || tabName === "contact") {
      return (
        <>
          {errors && errors[tabName] ? (
            <Popup
              position="bottom left"
              trigger={<Label color="orange">{errCount[tabName]}</Label>}
              relaxed
              flowing
              hoverable
            >
              <List relaxed divided size="small">
                {Object.values(errors[tabName]).map((error, index) => {
                  return (
                    <List.Item key={index}>
                      <Icon name="close" color="red" />
                      {error.message}
                    </List.Item>
                  );
                })}
              </List>
            </Popup>
          ) : null}
        </>
      );
    } else {
      return (
        <>
          {errors && errors[tabName] ? (
            <Popup
              position="bottom left"
              trigger={<Label color="orange">{errCount[tabName]}</Label>}
              relaxed
              flowing
              hoverable
            >
              <List relaxed divided size="small">
                {Object.values(errors[tabName]).map((err, index) => {
                  return (
                    <div key={index}>
                      <List.Item>
                        <List.Content>
                          <List.Header>
                            <srong>
                              <b>Experience #{index + 1}</b>
                            </srong>
                          </List.Header>
                          <List.List>
                            {err !== undefined
                              ? Object.values(err).map((error, i) => {
                                  return (
                                    <>
                                      <List.Item key={i}>
                                        <Icon name="close" color="red" />{" "}
                                        {error.message}
                                      </List.Item>
                                    </>
                                  );
                                })
                              : ""}
                          </List.List>
                        </List.Content>
                      </List.Item>
                    </div>
                  );
                })}
              </List>
            </Popup>
          ) : null}
        </>
      );
    }
  };
  return (
    
      <Menu fluid vertical tabular pointing>
        <Menu.Item
          key="bio"
          name="bio"
          active={activeItem === "bio"}
          onClick={handleItemClick}
        >
          {renderSideBarErrorLabel("bio")}
          Bio
        </Menu.Item>
        <Menu.Item
          key="experience"
          name="experience"
          active={activeItem === "experience"}
          onClick={handleItemClick}
        >
          {renderSideBarErrorLabel("experience")}
          Experience
        </Menu.Item>
        <Menu.Item
          key="skills"
          name="skills"
          active={activeItem === "skills"}
          onClick={handleItemClick}
        >
          {renderSideBarErrorLabel("expertise")}
          Skills
        </Menu.Item>
        <Menu.Item
          key="projects"
          name="projects"
          active={activeItem === "projects"}
          onClick={handleItemClick}
        >
          {renderSideBarErrorLabel("projects")}
          Projects
        </Menu.Item>
        <Menu.Item
          key="certifications"
          name="certifications"
          active={activeItem === "certifications"}
          onClick={handleItemClick}
        >
          {renderSideBarErrorLabel("certifications")}
          Certifications
        </Menu.Item>
        <Menu.Item
          key="contact"
          name="contact"
          active={activeItem === "contact"}
          onClick={handleItemClick}
        >
          {renderSideBarErrorLabel("contact")}
          Contact
        </Menu.Item>
      </Menu>
    
  );
};

export default SideBar;
