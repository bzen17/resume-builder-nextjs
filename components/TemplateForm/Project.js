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
  Popup,
  Header,
  Container,
  Input,
  Image,
} from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";
import { Controller,useFieldArray } from "react-hook-form";

const Project = ({ errors, watch, control, setValue   }) => {
  const { fields:projects, append, update, remove } = useFieldArray({ name: 'projects', control });
 //const { fields:techStack, append:t_append, remove:t_remove } = useFieldArray({ name: 'techStack', control });
  useEffect(() => {
    if (projects.length===0) {
      append({
      name: "",
      shortDesc: "",
      url: "",
      desc: "",
      image: "",
      techStack: [["",""]],
    });
  }
}, [projects]);

  const onTechStackChange = (event, i, i_tsg, i_ts) => {
    console.log('change',event.target.name, event.target.value);
    event.preventDefault();
    event.persist();
    setValue(`projects[${i}].${event.target.name}[${i_tsg}][${i_ts}]`, event.target.value);
  };
  const onChange = (event, i) => {
    console.log('change',event.target.name, event.target.value);
    event.preventDefault();
    event.persist();
    if (event.target.name === "image") {
      if (event.target.files && event.target.files[i]) {
        const file = event.target.files[i];
        const img = {
          objURL: URL.createObjectURL(file),
          URL: file,
        };
        setValue(`projects[${i}].${event.target.name}`, img);
      }
    } else {
     
      setValue(`projects[${i}].${event.target.name}`, event.target.value);
    }
    
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
        {projects.length!==0&&projects[i].techStack.map((tsg, i_tsg) => {
          console.log('tsg',tsg,'techStack',projects[i].techStack);
          index++;
          return (
            <Form.Group key={'tsg'+i_tsg} widths="equal">
              {tsg.map((ts, i_ts) => {
                return (
                  <Controller
                    key={'ts'+i_ts}
                    name={`projects[${i}]techStack`}
                    control={control}
                    rules={{ required: true }}
                    render={() => {
                    return <Form.Input
                    name="techStack"
                    fluid
                    placeholder={`#${2*i_tsg + i_ts+1}`}
                    value={watch(`projects[${i}].techStack[${i_tsg}][${i_ts}]`)}
                    onChange={(e) => onTechStackChange(e, i, i_tsg, i_ts)}
                  />}}
                  />
                  
                );
              })}

              {i_tsg === 0 ? (
                <Popup
                  content="Add Tech Stack"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) => update(i,{...projects[i],techStack:[...projects[i].techStack,["",""]]})}
                      icon="plus"
                      secondary
                    />
                  }
                />
              ) : i_tsg === projects[i].techStack.length - 1 ? (
                <Popup
                  content="Remove Tech Stack"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) => update(i,{...projects[i],techStack:projects[i].techStack.slice(0,-1)})}
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
        {projects.map((project, i) => {
          return (
            <div
              key={'proj'+i}
              id={`project${i + 1}`}
            >
              {i !== 0 ? <hr style={{ marginBottom: "1rem" }} /> : ""}
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    {i === 0 ? <Header as="h3">Project</Header> : ""}
                  </Grid.Column>
                  <Grid.Column width={8} verticalAlign="top">
                    {projects.length - 1 === i ? (
                      <Popup
                        content="Add Project"
                        position="left center"
                        trigger={
                          <a href={`#project${projects.length}`}>
                            <Button
                              onClick={(e) => 
                                append({
                                  name: "",
                                  shortDesc: "",
                                  url: "",
                                  desc: "",
                                  image: "",
                                  techStack: [["", ""]],
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
                        content="Remove Project"
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
                <Form.Group>
                  <Controller
                    name={`projects[${i}]name`}
                    control={control}
                    rules={{ required: true }}
                    render={() => {
                    return <Form.Input
                    name='name'
                    required
                    fluid
                    width={6}
                    label="Name"
                    placeholder="Name"
                    value={watch(`projects[${i}].name`)}
                    onChange={(e) => onChange(e, i)}
                    {...projects[i].name}
                  />}}
                  />
                  <Controller
                    name={`projects[${i}]shortDesc`}
                    control={control}
                    rules={{ required: true }}
                    render={() => {
                    return <Form.Input
                    name='shortDesc'
                    required
                    fluid
                    width={10}
                    label="Short Description"
                    placeholder="Short Description"
                    value={watch(`projects[${i}].shortDesc`)}
                    onChange={(e) => onChange(e, i)}
                    {...projects[i].shortDesc}
                  />}}
                  />
                </Form.Group>
                <Controller
                    name={`projects[${i}]url`}
                    control={control}
                    rules={{ required: true }}
                    render={() => {
                    return <Form.Input
                    name='url'
                    required
                    fluid
                    width={10}
                    label="URL"
                    placeholder="URL"
                    value={watch(`projects[${i}].url`)}
                    onChange={(e) => onChange(e, i)}
                    {...projects[i].url}
                  />}}
                  />
                {renderTechStack(project, i)}
                <Controller
                    name={`projects[${i}]desc`}
                    control={control}
                    rules={{ required: true }}
                    render={() => {
                    return <Form.TextArea
                    name='desc'
                    label="Description"
                    placeholder="Tell us more about your project..."
                    value={watch(`projects[${i}].desc`)}
                    onChange={(e) => onChange(e, i)}
                    {...projects[i].desc}
                  />}}
                  />
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={6} verticalAlign="top">
                    <Controller
                    name={`projects[${i}]image`}
                    control={control}
                    rules={{ required: true }}
                    render={() => {
                    return <Input
                    type="file"
                    name="image"
                    onChange={(e) => onChange(e, i)}
                    {...projects[i].image}
                  />}}
                  />
                      
                    </Grid.Column>
                    <Grid.Column width={10} textAlign="center">
                      <Image
                        src={watch(`projects[${i}].image.objURL`)}
                        as="a"
                        size="medium"
                        href={watch(`projects[${i}].image.objURL`)}
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
    </>
  );
};

export default Project;
