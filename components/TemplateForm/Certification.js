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
  Image,
  Form,
  Header,
  Input,
  Grid,
  Popup,
  Container,
} from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";
import { Controller, useFieldArray } from "react-hook-form";
import { requiredFields } from "./schema";

const Certifications = ({ errors, watch, control, setValue, setTotal }) => {
  const {
    fields: certifications,
    append,
    update,
    remove,
  } = useFieldArray({ name: "certifications", control });
  console.log("requiredField", requiredFields);
  const onImgChange = (event, i) => {
    event.preventDefault();
    event.persist();
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const img = {
        objURL: URL.createObjectURL(file),
        URL: file,
      };
      setValue(`certifications.${i}.${event.target.name}`, img);
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file", {
      method: "POST",
      body,
    });
  };
  const renderCertifications = (e, num) => {
    return (
      <>
        {certifications.map((e, i) => {
          return (
            <div key={i} id={`cert${i + 1}`}>
              {i !== 0 ? <hr style={{ marginBottom: "1rem" }} /> : ""}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                {i === 0 ? <Header as="h3">Certification</Header> : <div></div>}

                {certifications.length - 1 === i ? (
                  <Popup
                    content="Add Certification"
                    position="left center"
                    trigger={
                      <a href={`#cert${certifications.length}`}>
                        <Button
                          onClick={(e) => {
                            setTotal((prevState) => {
                              return (
                                prevState + requiredFields.certifications.length
                              );
                            });
                            append({
                              name: "",
                              url: "",
                              image: "",
                            });
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
                    content="Remove Certification"
                    position="left center"
                    trigger={
                      <Button
                        onClick={(e) => {
                          setTotal((prevState) => {
                            return (
                              prevState - requiredFields.certifications.length
                            );
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

              <Container id={`cert${i + 1}`} style={{ marginBottom: "1rem" }}>
                <Form.Group>
                  <Controller
                    name={`certifications.${i}.name`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Form.Input
                          error={
                            errors &&
                            errors.certifications &&
                            errors.certifications[i].name &&
                            !!errors.certifications[i].name.message
                          }
                          required
                          fluid
                          name="name"
                          label="Name"
                          placeholder="Name"
                          width={6}
                          {...field}
                        />
                      );
                    }}
                  />
                  <Controller
                    name={`certifications.${i}.url`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Form.Input
                          error={
                            errors &&
                            errors.certifications &&
                            errors.certifications[i].url &&
                            !!errors.certifications[i].url.message
                          }
                          required
                          fluid
                          name="url"
                          label="URL"
                          placeholder="URL"
                          width={10}
                          {...field}
                        />
                      );
                    }}
                  />
                </Form.Group>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={6} verticalAlign="top">
                      <Input
                        error={
                          errors &&
                          errors.certifications &&
                          errors.certifications[i].image &&
                          !!errors.certifications[i].image.message
                        }
                        type="file"
                        name="image"
                        onChange={(e) => onImgChange(e, i)}
                      />
                    </Grid.Column>
                    <Grid.Column width={10} textAlign="center">
                      <Image
                        src={watch(`certifications.${i}.image.objURL`)}
                        as="a"
                        size="medium"
                        href={watch(`certifications.${i}.image.objURL`)}
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
      {renderCertifications()}
      {/* {errors.certifications.length !== 0
        ? ErrorMessage(errors.certifications)
        : ""} */}
    </>
  );
};

export default Certifications;
