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

import React, { useState,useEffect } from "react";
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
import { Controller,useFieldArray } from "react-hook-form";


const Experience = ({ errors, watch, control, setValue  }) => {
  const { fields, append, remove } = useFieldArray({ name: 'exp', control });
  useEffect(() => {
    if (fields.length===0) {
    append({
      org: "",
      title: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      desc: "",
    });
  }
}, []);

console.log('Fields', watch('exp'));
  const onChange = (event, i) => {
    event.preventDefault();
    event.persist();
    console.log('change',event.target.name, event.target.value);
    setValue(`exp[${i}].${event.target.name}`, event.target.value);
  };
  const renderWorkExperience = (e, num) => {
    return (
      <>
        {fields.map((e, i) => {
          return (
            <div key={i} id={`exp${i + 1}`}>
              {i !== 0 ? <hr style={{ marginBottom: "1rem" }} /> : ""}
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    {i === 0 ? <Header as="h3">Work Experience</Header> : ""}
                  </Grid.Column>
                  <Grid.Column width={8} verticalAlign="top">
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
                            onClick={(e) => remove(i)}
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
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column>
                    
                      <Form.Group widths="equal">
                      <Controller
                        name={`exp[${i}]org`}
                        control={control}
                        rules={{ required: true }}
                        render={() => {
                        return <Form.Input
                        name='org'
                        required
                        fluid
                        label="Organization"
                        placeholder="Organization"
                        value={watch(`exp[${i}].org`)}
                        onChange={(e) => onChange(e, i)}
                        {...fields[i].org}
                      />}}
                      />
                        <Controller
                        name={`exp[${i}]title`}
                        control={control}
                        rules={{ required: true }}
                        render={() => {
                        return <Form.Input
                        name='title'
                        required
                        fluid
                        label="Designation"
                        placeholder="Designation"
                        value={watch(`exp[${i}].title`)}
                        onChange={(e) => onChange(e, i)}
                        {...fields[i].title}
                      />}}
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
                              <Controller
                                name={`exp[${i}]startMonth`}
                                control={control}
                                rules={{ required: true }}
                                render={() => {
                                return <Form.Input
                                name="startMonth"
                                required
                                fluid
                                placeholder="Month"
                                value={watch(`exp[${i}].startMonth`)}
                                onChange={(e) => onChange(e, i)}
                                {...fields[i].startMonth}
                              />}}
                              />
                                <Controller
                                name={`exp[${i}]startYear`}
                                control={control}
                                rules={{ required: true }}
                                render={() => {
                                return <Form.Input
                                name="startYear"
                                required
                                fluid
                                placeholder="Year"
                                value={watch(`exp[${i}].startYear`)}
                                onChange={(e) => onChange(e, i)}
                                {...fields[i].startYear}
                              />}}
                              />
                              </Form.Group>
                            </Form.Field>
                          </Grid.Column>
                          <Grid.Column>
                            <Form.Field required>
                              <label>End Date</label>
                              <Form.Group widths="equal">
                              <Controller
                                name={`exp[${i}]endMonth`}
                                control={control}
                                rules={{ required: true }}
                                render={() => {
                                return <Form.Input
                                name="endMonth"
                                required
                                fluid
                                placeholder="Month"
                                value={watch(`exp[${i}].endMonth`)}
                                onChange={(e) => onChange(e, i)}
                                {...fields[i].endMonth}
                              />}}
                              />
                                <Controller
                                name={`exp[${i}]endYear`}
                                control={control}
                                rules={{ required: true }}
                                render={() => {
                                return <Form.Input
                                name="endYear"
                                required
                                fluid
                                placeholder="Year"
                                value={watch(`exp[${i}].endYear`)}
                                onChange={(e) => onChange(e, i)}
                                {...fields[i].endYear}
                              />}}
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
                  name={`exp[${i}]desc`}
                  control={control}
                  render={() => {
                  return <Form.TextArea
                  name="desc"
                  label="Description"
                  placeholder="Tell us more about your role in your organisation..."
                  value={watch(`exp[${i}].desc`)}
                  onChange={(e) => onChange(e, i)}
                  {...fields[i].desc}
                />}}
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
