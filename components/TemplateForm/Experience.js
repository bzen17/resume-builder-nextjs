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
import {
  Button,
  Grid,
  Form,
  Header,
  Popup,
  Container,
} from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";

const Experience = ({ formData, setFormData, errors, setErrors }) => {
  const onChange = (event, i) => {
    event.preventDefault();
    event.persist();

    setFormData((prev) => {
      let { exp } = formData;
      validateField(
        "experience",
        event.target.name,
        event.target.value,
        errors,
        setErrors
      );
      exp[i] = {
        ...exp[i],
        [event.target.name]: event.target.value,
      };
      return {
        ...prev,
        exp,
      };
    });
  };
  const renderWorkExperience = (e, num) => {
    return (
      <>
        {formData.exp.map((e, i) => {
          return (
            <div key={i} id={`exp${i + 1}`}>
              {i !== 0 ? <hr style={{ marginBottom: "1rem" }} /> : ""}
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    {i === 0 ? <Header as="h3">Work Experience</Header> : ""}
                  </Grid.Column>
                  <Grid.Column width={8} verticalAlign="top">
                    {formData.exp.length - 1 === i ? (
                      <Popup
                        content="Add Work Experience"
                        position="left center"
                        trigger={
                          <a href={`#exp${formData.exp.length}`}>
                            <Button
                              onClick={(e) =>
                                setFormData({
                                  ...formData,
                                  exp: [
                                    ...formData.exp,
                                    {
                                      org: "",
                                      title: "",
                                      startMonth: "",
                                      startYear: "",
                                      endMonth: "",
                                      endYear: "",
                                      desc: "",
                                    },
                                  ],
                                })
                              }
                              icon="plus"
                              floated="right"
                              primary
                            />
                          </a>
                        }
                      />
                    ) : (
                      <Popup
                        content="Remove Work Experience"
                        position="left center"
                        trigger={
                          <Button
                            onClick={(e) => {
                              let exp = formData.exp.filter((ex, index) => {
                                return i !== index;
                              });

                              setFormData({
                                ...formData,
                                exp,
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

              <Container id={`exp${i + 1}`} style={{ marginBottom: "1rem" }}>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Group widths="equal">
                        <Form.Input
                          name="org"
                          required
                          fluid
                          label="Organization"
                          placeholder="Organization"
                          value={formData.exp[i].org}
                          onChange={(e) => onChange(e, i)}
                        />
                        <Form.Input
                          name="title"
                          required
                          fluid
                          label="Designation"
                          placeholder="Designation"
                          value={formData.exp[i].title}
                          onChange={(e) => onChange(e, i)}
                        />
                      </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                      <Grid columns={2} divided>
                        <Grid.Row>
                          <Grid.Column>
                            <Form.Field required>
                              <label>Start Date</label>
                              <Form.Group widths="equal">
                                <Form.Input
                                  name="startMonth"
                                  fluid
                                  placeholder="Month"
                                  value={formData.exp[i].startMonth}
                                  onChange={(e) => onChange(e, i)}
                                />
                                <Form.Input
                                  name="startYear"
                                  fluid
                                  placeholder="Year"
                                  value={formData.exp[i].startYear}
                                  onChange={(e) => onChange(e, i)}
                                />
                              </Form.Group>
                            </Form.Field>
                          </Grid.Column>
                          <Grid.Column>
                            <Form.Field required>
                              <label>End Date</label>
                              <Form.Group widths="equal">
                                <Form.Input
                                  name="endMonth"
                                  fluid
                                  placeholder="Month"
                                  value={formData.exp[i].endMonth}
                                  onChange={(e) => onChange(e, i)}
                                />
                                <Form.Input
                                  name="endYear"
                                  fluid
                                  placeholder="Year"
                                  value={formData.exp[i].endYear}
                                  onChange={(e) => onChange(e, i)}
                                />
                              </Form.Group>
                            </Form.Field>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Form.TextArea
                  name="desc"
                  label="Description"
                  placeholder="Tell us more about your role in your organisation..."
                  value={formData.exp[i].desc}
                  onChange={(e) => onChange(e, i)}
                />
              </Container>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      {renderWorkExperience()}
      {errors.experience.length !== 0 ? ErrorMessage(errors.experience) : ""}
    </>
  );
};

export default Experience;
