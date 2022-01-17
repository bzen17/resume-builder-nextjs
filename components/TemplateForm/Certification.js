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
import { Controller,useFieldArray } from "react-hook-form";

const Certifications = ({ errors, watch, control, setValue   }) => {
  const { fields:certifications, append, update, remove } = useFieldArray({ name: 'projects', control });
  useEffect(() => {
    if (certifications.length===0) {
      append({
        name: "",
        url: "",
        image: "",
      });
  }
}, []);

const onCertChange = (event, i) => {
  event.preventDefault();
  event.persist();
  if (event.target.name === "image") {
    if (event.target.files && event.target.files[i]) {
      const file = event.target.files[i];
      const img = {
        objURL: URL.createObjectURL(file),
        URL: file,
      };
      setValue(`certifications[${i}].${event.target.name}`, img);
    }
  } else {
   
    setValue(`certifications[${i}].${event.target.name}`, event.target.value);
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
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    {i === 0 ? <Header as="h3">Certification</Header> : ""}
                  </Grid.Column>
                  <Grid.Column width={8} verticalAlign="top">
                    {certifications.length - 1 === i ? (
                      <Popup
                        content="Add Certification"
                        position="left center"
                        trigger={
                          <a href={`#cert${certifications.length}`}>
                            <Button
                              onClick={(e) =>append({
                                name: "",
                                url: "",
                                image: "",
                              })}
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

              <Container id={`cert${i + 1}`} style={{ marginBottom: "1rem" }}>
                <Form.Group>
                  <Form.Input
                    required
                    fluid
                    name="name"
                    label="Name"
                    placeholder="Name"
                    width={6}
                    value={watch(`certifications[${i}].name`)}
                    onChange={(e) => onCertChange(e, i)}
                  />
                  <Form.Input
                    required
                    fluid
                    name="url"
                    label="URL"
                    placeholder="URL"
                    width={10}
                    value={watch(`certifications[${i}].url`)}
                    onChange={(e) => onCertChange(e, i)}
                  />
                </Form.Group>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={6} verticalAlign="top">
                      <Input
                        type="file"
                        name="image"
                        onChange={(e) => onCertChange(e, i)}
                      />
                    </Grid.Column>
                    <Grid.Column width={10} textAlign="center">
                      <Image
                        src={watch(`certifications[${i}].image.objURL`)}
                        as="a"
                        size="medium"
                        href={watch(`certifications[${i}].image.objURL`)}
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
