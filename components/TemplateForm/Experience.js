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
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";
import { Controller, useFieldArray } from "react-hook-form";

const Experience = ({ errors, watch, control, setValue }) => {
  const { fields, append, remove } = useFieldArray({ name: "exp", control });

  const renderWorkExperience = (e, num) => {
    return (
      <>
        {fields.map((exp, i) => {
          return (
            <div key={i} id={`exp${i + 1}`}>
              {i !== 0 ? <hr style={{ marginBottom: "1rem" }} /> : ""}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                {i === 0 ? <Header as="h3">Work Experience</Header> : ""}
                {fields.length - 1 === i ? (
                  <Popup
                    content="Add Work Experience"
                    position="left center"
                    trigger={
                      <a href={`#exp${fields.length}`}>
                        <Button
                          onClick={(e) =>
                            append({
                              org: "",
                              title: "",
                              startMonth: "",
                              startYear: "",
                              endMonth: "",
                              endYear: "",
                              desc: "",
                            })
                          }
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
                        onClick={(e) => remove(i)}
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
                          name={`exp.${i}.org`}
                          control={control}
                          render={({ field }) => (
                            <Form.Input
                              error={
                                errors &&
                                errors.exp &&
                                errors.exp[i].org &&
                                !!errors.exp[i].org.message
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
                          name={`exp.${i}.title`}
                          control={control}
                          render={({ field }) => (
                            <Form.Input
                              error={
                                errors &&
                                errors.exp &&
                                errors.exp[i].title &&
                                !!errors.exp[i].title.message
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
                              required
                              error={
                                errors &&
                                errors.exp &&
                                errors.exp[i].startMonth &&
                                errors.exp[i].startYear &&
                                !!errors.exp[i].startMonth.message |
                                  !!errors.exp[i].startYear.message
                              }
                            >
                              <label>Start Date</label>
                              <Form.Group widths="equal">
                                <Controller
                                  name={`exp.${i}.startMonth`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <Form.Input
                                        error={
                                          errors &&
                                          errors.exp &&
                                          errors.exp[i].startMonth &&
                                          !!errors.exp[i].startMonth.message
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
                                  name={`exp.${i}.startYear`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <Form.Input
                                        error={
                                          errors &&
                                          errors.exp &&
                                          errors.exp[i].startYear &&
                                          !!errors.exp[i].startYear.message
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
                                errors.exp &&
                                errors.exp[i].endMonth &&
                                errors.exp[i].endYear &&
                                !!errors.exp[i].endYear.message |
                                  !!errors.exp[i].endMonth.message
                              }
                            >
                              <label>End Date</label>
                              <Form.Group widths="equal">
                                <Controller
                                  name={`exp.${i}.endMonth`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <Form.Input
                                        error={
                                          errors &&
                                          errors.exp &&
                                          errors.exp[i].endMonth &&
                                          !!errors.exp[i].endMonth.message
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
                                  name={`exp.${i}.endYear`}
                                  control={control}
                                  render={({ field }) => {
                                    return (
                                      <Form.Input
                                        error={
                                          errors &&
                                          errors.exp &&
                                          errors.exp[i].endYear &&
                                          !!errors.exp[i].endYear.message
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
                  name={`exp.${i}.desc`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Form.TextArea
                        error={
                          errors &&
                          errors.exp &&
                          errors.exp[i].desc &&
                          !!errors.exp[i].desc.message
                        }
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
  return (
    <>
      {renderWorkExperience()}
      {/*  {errors.experience.length !== 0 ? ErrorMessage(errors.experience) : ""} */}
    </>
  );
};

export default Experience;
