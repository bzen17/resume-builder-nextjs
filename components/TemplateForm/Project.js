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

import React, { useState, useRef } from "react";
import {
  Button,
  Grid,
  Form,
  Popup,
  Header,
  Container,
  Input,
  Image,
} from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";

const Project = ({ formData, setFormData, errors, setErrors }) => {
  const myRefs = useRef([]);
  const onProjectChange = (event, i) => {
    event.preventDefault();
    event.persist();
    console.log(formData);
    setFormData((prev) => {
      const { projects } = formData;
      if (event.target.name === "image") {
        if (event.target.files && event.target.files[i]) {
          const file = event.target.files[i];
          const img = {
            objURL: URL.createObjectURL(file),
            URL: file,
          };
          validateField("projects", event.target.name, img, errors, setErrors);
          projects[i] = {
            ...projects[i],
            [event.target.name]: img,
          };
        }
      } else {
        validateField(
          "projects",
          event.target.name,
          event.target.value,
          errors,
          setErrors
        );
        projects[i] = {
          ...projects[i],
          [event.target.name]: event.target.value,
        };
      }
      return {
        ...prev,
        projects,
      };
    });
  };

  const onTechStackChange = (event, i, i_tsg, i_ts) => {
    event.preventDefault();
    event.persist();

    setFormData((prev) => {
      const { projects } = formData;
      validateField(
        "projects",
        "techStack",
        event.target.value,
        errors,
        setErrors
      );
      projects[i].techStack[i_tsg][i_ts] = event.target.value;
      return {
        ...prev,
        projects,
      };
    });
  };
  const scrollToRef = (i) => {
    console.log(0, myRefs.current[i].offsetTop);
    window.scrollTo(0, myRefs.current[i].offsetTop);
  };
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };
  const renderTechStack = (project, i) => {
    let index = 0;
    return (
      <Form.Field required>
        <label>Tech Stack</label>
        {formData.projects[i].techStack.map((tsg, i_tsg) => {
          index++;
          return (
            <Form.Group key={i_tsg} widths="equal">
              {tsg.map((ts, i_ts) => {
                return (
                  <Form.Input
                    key={i_ts}
                    name={`#${i_tsg + i_ts + index}`}
                    fluid
                    placeholder={`#${i_tsg + i_ts + index}`}
                    value={formData.projects[i].techStack[i_tsg][i_ts]}
                    onChange={(e) => onTechStackChange(e, i, i_tsg, i_ts)}
                  />
                );
              })}

              {i_tsg === 0 ? (
                <Popup
                  content="Add Tech Stack"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) => {
                        const { projects } = formData;
                        projects[i].techStack.push(["", ""]);
                        setFormData({
                          ...formData,
                          projects,
                        });
                      }}
                      icon="plus"
                      secondary
                    />
                  }
                />
              ) : i_tsg === formData.projects[i].techStack.length - 1 ? (
                <Popup
                  content="Remove Tech Stack"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) => {
                        const { projects } = formData;
                        projects[i].techStack.pop();
                        setFormData({
                          ...formData,
                          projects,
                        });
                      }}
                      icon="minus"
                      negative
                    />
                  }
                />
              ) : (
                <Button style={{ color: "#fff" }} />
              )}
            </Form.Group>
          );
        })}
      </Form.Field>
    );
  };

  const renderProject = (e, num) => {
    return (
      <>
        {formData.projects.map((project, i) => {
          return (
            <div
              key={i}
              id={`project${i + 1}`}
              ref={(el) => (myRefs.current[i] = el)}
            >
              {i !== 0 ? <hr style={{ marginBottom: "1rem" }} /> : ""}
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    {i === 0 ? <Header as="h3">Project</Header> : ""}
                  </Grid.Column>
                  <Grid.Column width={8} verticalAlign="top">
                    {formData.projects.length - 1 === i ? (
                      <Popup
                        content="Add Project"
                        position="left center"
                        trigger={
                          <a href={`#project${formData.projects.length}`}>
                            <Button
                              onClick={(e) => {
                                console.log(formData.projects.length);
                                setFormData({
                                  ...formData,
                                  projects: [
                                    ...formData.projects,
                                    {
                                      name: "",
                                      shortDesc: "",
                                      url: "",
                                      desc: "",
                                      image: "",
                                      techStack: [["", ""]],
                                    },
                                  ],
                                });
                                //scrollToRef(formData.projects.length-1);
                              }}
                              icon="plus"
                              floated="right"
                              primary
                            />
                          </a>
                        }
                      />
                    ) : (
                      <Popup
                        content="Remove Project"
                        position="left center"
                        trigger={
                          <Button
                            onClick={(e) => {
                              let projects = formData.projects.filter(
                                (project, index) => {
                                  return i !== index;
                                }
                              );

                              setFormData({
                                ...formData,
                                projects,
                              });
                            }}
                            icon="minus"
                            floated="right"
                            negative
                          />
                        }
                      />
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Container style={{ marginBottom: "1rem" }}>
                <Form.Group>
                  <Form.Input
                    name="name"
                    required
                    fluid
                    label="Name"
                    placeholder="Name"
                    width={6}
                    value={formData.projects[i].name}
                    onChange={(e) => onProjectChange(e, i)}
                  />
                  <Form.Input
                    name="shortDesc"
                    required
                    fluid
                    label="Short Description"
                    placeholder="Short Description"
                    width={10}
                    value={formData.projects[i].shortDesc}
                    onChange={(e) => onProjectChange(e, i)}
                  />
                </Form.Group>
                <Form.Input
                  name="url"
                  required
                  fluid
                  label="URL"
                  placeholder="URL"
                  value={formData.projects[i].url}
                  onChange={(e) => onProjectChange(e, i)}
                />
                {renderTechStack(project, i)}
                <Form.TextArea
                  name="desc"
                  label="Description"
                  placeholder="Tell us more about your project..."
                  value={formData.projects[i].desc}
                  onChange={(e) => onProjectChange(e, i)}
                />
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={6} verticalAlign="top">
                      <Input
                        type="file"
                        name="image"
                        id={`${i + 1}`}
                        onChange={(e) => onProjectChange(e, i)}
                      />
                    </Grid.Column>
                    <Grid.Column width={10} textAlign="center">
                      <Image
                        src={formData.projects[i].image.objURL}
                        as="a"
                        size="medium"
                        href={formData.projects[i].image.objURL}
                        target="_blank"
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      {renderProject()}
      {errors.projects.length !== 0 ? ErrorMessage(errors.projects) : ""}
    </>
  );
};

export default Project;
