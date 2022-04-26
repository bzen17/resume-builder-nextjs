/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Grid,
  Form,
  Popup,
  Header,
  Container,
  Input,
  Image,
  Dropdown,
} from "semantic-ui-react";
import { Controller, useFieldArray } from "react-hook-form";
import { requiredFields } from "./schema";

const Project = ({
  errors,
  setError,
  watch,
  control,
  setValue,
  techStackOptions,
  setTechStackOptions,
  setTotal,
}) => {
  const {
    fields: projects,
    append,
    update,
    remove,
  } = useFieldArray({ name: "projects", control });
  const fileRef = useRef([]);
  const onImgChange = (event, i) => {
    event.preventDefault();
    event.persist();
    if (event.target.name === "image") {
      if (event.target.files && event.target.files[0]) {
        const [file] = event.target.files;
        var reader = new FileReader();
        reader.onloadend = function () {
          const img = {
            objURL: /\.(gif|jpe?g|png)$/g.test(file.name)
              ? reader.result
              : null,
            URL: file,
          };
          setValue(`projects.${i}.${event.target.name}`, img);
        };
        reader.readAsDataURL(file);
      }
    }
  };
  const handleAddition = (e, { value }) => {
    setTechStackOptions((prevState) => [
      { key: value, text: value, value },
      ...prevState,
    ]);
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
        <Dropdown
          options={techStackOptions}
          placeholder="Choose/Add Tech Stack"
          search
          selection
          fluid
          multiple
          allowAdditions
          value={watch(`projects.${i}.techStack`)}
          onAddItem={handleAddition}
          onChange={(e, { value }) =>
            setValue(`projects.${i}.techStack`, value)
          }
        />
      </Form.Field>
    );
  };

  const renderProject = (e, num) => {
    return (
      <>
        {projects.map((project, i) => {
          return (
            <div key={"proj" + i} id={`project${i + 1}`}>
              {i !== 0 ? <hr style={{ marginBottom: "1rem" }} /> : ""}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                {i === 0 ? <Header as="h3">Projects</Header> : <div></div>}
                {projects.length - 1 === i ? (
                  <Popup
                    content="Add Project"
                    position="left center"
                    trigger={
                      <a href={`#project${projects.length}`}>
                        <Button
                          onClick={(e) => {
                            setTotal((prevState) => {
                              return prevState + requiredFields.projects.length;
                            });
                            append({
                              name: "",
                              shortDesc: "",
                              url: "",
                              desc: "",
                              image: "",
                              techStack: [],
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
                    content="Remove Project"
                    position="left center"
                    trigger={
                      <Button
                        onClick={(e) => {
                          setTotal((prevState) => {
                            return prevState - requiredFields.projects.length;
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
                <Form.Group>
                  <Controller
                    name={`projects.${i}.name`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Form.Input
                          error={
                            errors &&
                            errors.projects &&
                            errors.projects[i] &&
                            errors.projects[i].name &&
                            !!errors.projects[i].name.message
                          }
                          name="name"
                          required
                          fluid
                          width={6}
                          label="Name"
                          placeholder="Name"
                          {...field}
                        />
                      );
                    }}
                  />
                  <Controller
                    name={`projects.${i}.shortDesc`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Form.Input
                          error={
                            errors &&
                            errors.projects &&
                            errors.projects[i] &&
                            errors.projects[i].shortDesc &&
                            !!errors.projects[i].shortDesc.message
                          }
                          name="shortDesc"
                          required
                          fluid
                          width={10}
                          label="Short Description"
                          placeholder="Short Description"
                          {...field}
                        />
                      );
                    }}
                  />
                </Form.Group>
                <Controller
                  name={`projects.${i}.url`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Form.Input
                        error={
                          errors &&
                          errors.projects &&
                          errors.projects[i] &&
                          errors.projects[i].url &&
                          !!errors.projects[i].url.message
                        }
                        name="url"
                        required
                        fluid
                        width={10}
                        label="URL"
                        placeholder="URL"
                        {...field}
                      />
                    );
                  }}
                />
                {renderTechStack(project, i)}
                <Controller
                  name={`projects.${i}.desc`}
                  control={control}
                  render={({ field }) => {
                    return (
                      <Form.TextArea
                        error={
                          errors &&
                          errors.projects &&
                          errors.projects[i] &&
                          errors.projects[i].desc &&
                          !!errors.projects[i].desc.message
                        }
                        name="desc"
                        label="Description"
                        placeholder="Tell us more about your project..."
                        {...field}
                      />
                    );
                  }}
                />
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={6} verticalAlign="top">
                      <Form.Group required>
                        <Form.Button
                          error={
                            errors &&
                            errors.projects &&
                            errors.projects[i] &&
                            errors.projects[i].image &&
                            !!errors.projects[i].image.message
                          }
                          required
                          label="Project Image"
                          content="Choose File"
                          labelPosition="left"
                          color="blue"
                          icon="file"
                          onClick={(e) => {
                            e.preventDefault();
                            fileRef.current[i].click();
                          }}
                        />
                        <input
                          ref={el => (fileRef.current[i] = el)}
                          type="file"
                          name="image"
                          hidden
                          onChange={(e) => onImgChange(e, i)}
                        />
                      </Form.Group>
                    </Grid.Column>
                    <Grid.Column width={10} textAlign="center">
                      <Image
                        src={watch(`projects.${i}.image.objURL`)}
                        as="a"
                        size="medium"
                        href={watch(`projects.${i}.image.objURL`)}
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
  return <>{renderProject()}</>;
};

export default Project;
