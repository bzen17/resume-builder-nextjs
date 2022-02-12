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

import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Form,
  Header,
  Popup,
  Container,
} from "semantic-ui-react";
import { Controller, useFieldArray } from "react-hook-form";
import { requiredFields } from "./schema";

const Experience = ({ errors, watch, control, setValue, setTotal }) => {
  const { fields, append, prepend, remove } = useFieldArray({
    name: "experience",
    control,
  });
  console.log("requiredField", requiredFields);
  const renderWorkExperience = (e, num) => {
    return (
      <>
        {fields.map((experience, i) => {
          return (
            <div key={i} id={`experience${i + 1}`}>
              {i !== 0 ? <hr style={{ marginBottom: "1rem" }} /> : ""}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                {i === 0 ? (
                  <Header as="h3">Work Experience</Header>
                ) : (
                  <div></div>
                )}
                {i === 0 ? (
                  <Popup
                    content="Add Work Experience"
                    position="left center"
                    trigger={
                      <a href={`#experience${fields.length}`}>
                        <Button
                          onClick={(e) => {
                            setTotal((prevState) => {
                              return (
                                prevState + requiredFields.experience.length
                              );
                            });
                            prepend({
                              org: "",
                              title: "",
                              startMonth: "",
                              startYear: "",
                              endMonth: "",
                              endYear: "",
                              desc: "",
                            });
                          }}
                          icon="plus"
                          //floated="right"
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
                          setTotal((prevState) => {
                            return prevState - requiredFields.experience.length;
                          });
                          remove(i);
                        }}
                        icon="minus"
                        floated="right"
                        negative
                      />
                    }
                  />
                )}
              </div>

              <Container style={{ marginBottom: "1rem" }}>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                      <Form.Group widths="equal">
                        <Controller
                          name={`experience.${i}.org`}
                          control={control}
                          render={({ field }) => (
                            <Form.Input
                              error={
                                errors &&
                                errors.experience &&
                                errors.experience[i] &&
                                errors.experience[i].org &&
                                !!errors.experience[i].org.message
                              }
                              name="org"
                              required
                              fluid
                              label="Organization"
                              placeholder="Organization"
                              {...field}
                            />
                          )}
                        />
                        <Controller
                          name={`experience.${i}.title`}
                          control={control}
                          render={({ field }) => (
                            <Form.Input
                              error={
                                errors &&
                                errors.experience &&
                                errors.experience[i] &&
                                errors.experience[i].title &&
                                !!errors.experience[i].title.message
                              }
                              name="title"
                              required
                              fluid
                              label="Designation"
                              placeholder="Designation"
                              {...field}
                            />
                          )}
                        />
                      </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                      <Grid columns={2} divided>
                        <Grid.Row>
                          <Grid.Column>
                            <Form.Field
                              required
                              error={
                                errors &&
                                errors.experience &&
                                errors.experience[i] &&
                                errors.experience[i].startMonth &&
                                errors.experience[i].startYear &&
                                !!errors.experience[i].startMonth.message |
                                  !!errors.experience[i].startYear.message
                              }
                            >
                              <label>Start Date</label>
                              <Form.Group widths="equal">
                                <Controller
                                  name={`experience.${i}.startMonth`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <Form.Input
                                        error={
                                          errors &&
                                          errors.experience &&
                                          errors.experience[i] &&
                                          errors.experience[i].startMonth &&
                                          !!errors.experience[i].startMonth
                                            .message
                                        }
                                        name="startMonth"
                                        required
                                        fluid
                                        placeholder="Month"
                                        {...field}
                                      />
                                    );
                                  }}
                                />
                                <Controller
                                  name={`experience.${i}.startYear`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <Form.Input
                                        error={
                                          errors &&
                                          errors.experience &&
                                          errors.experience[i] &&
                                          errors.experience[i].startYear &&
                                          !!errors.experience[i].startYear
                                            .message
                                        }
                                        name="startYear"
                                        required
                                        fluid
                                        placeholder="Year"
                                        {...field}
                                      />
                                    );
                                  }}
                                />
                              </Form.Group>
                            </Form.Field>
                          </Grid.Column>
                          <Grid.Column>
                            <Form.Field
                              required
                              error={
                                errors &&
                                errors.experience &&
                                errors.experience[i] &&
                                errors.experience[i].endMonth &&
                                errors.experience[i].endYear &&
                                !!errors.experience[i].endYear.message |
                                  !!errors.experience[i].endMonth.message
                              }
                            >
                              <label>End Date</label>
                              <Form.Group widths="equal">
                                <Controller
                                  name={`experience.${i}.endMonth`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <Form.Input
                                        error={
                                          errors &&
                                          errors.experience &&
                                          errors.experience[i] &&
                                          errors.experience[i].endMonth &&
                                          !!errors.experience[i].endMonth
                                            .message
                                        }
                                        name="endMonth"
                                        required
                                        fluid
                                        placeholder="Month"
                                        {...field}
                                      />
                                    );
                                  }}
                                />
                                <Controller
                                  name={`experience.${i}.endYear`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <Form.Input
                                        error={
                                          errors &&
                                          errors.experience &&
                                          errors.experience[i] &&
                                          errors.experience[i].endYear &&
                                          !!errors.experience[i].endYear.message
                                        }
                                        name="endYear"
                                        required
                                        fluid
                                        placeholder="Year"
                                        {...field}
                                      />
                                    );
                                  }}
                                />
                              </Form.Group>
                            </Form.Field>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Controller
                  name={`experience.${i}.desc`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Form.TextArea
                        error={
                          errors &&
                          errors.experience &&
                          errors.experience[i] &&
                          errors.experience[i].desc &&
                          !!errors.experience[i].desc.message
                        }
                        required
                        name="desc"
                        label="Description"
                        placeholder="Tell us more about your role in your organisation..."
                        {...field}
                      />
                    );
                  }}
                />
              </Container>
            </div>
          );
        })}
      </>
    );
  };
  return <>{renderWorkExperience()}</>;
};

export default Experience;
