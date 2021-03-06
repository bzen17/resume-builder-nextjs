/* eslint-disable jsx-a11y/alt-text */
import { Controller } from "react-hook-form";
import React, { useEffect, useState, useRef } from "react";
import {
  Image,
  Input,
  Grid,
  Form,
  Header,
  Dropdown,
  Button,
} from "semantic-ui-react";
const Bio = ({
  errors,
  formErrors,
  setFormErrors,
  watch,
  control,
  setValue,
  languageOptions,
  setLanguageOptions,
}) => {
  const sumHeaderOptions = [
    { key: "About Me", text: "About Me", value: "About Me" },
    { key: "Work Summary", text: "Work Summary", value: "Work Summary" },
    {
      key: "Professional Summary",
      text: "Professional Summary",
      value: "Professional Summary",
    },
  ];
  
  const fileRef = useRef(null);
  const onImgChange = (event) => {
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
          setValue(`bio.${event.target.name}`, img);
        };
        reader.readAsDataURL(file);
      }
    }
  };
  const handleAddition = (e, { value }) => {
    setLanguageOptions((prevState) => [
      { key: value, text: value, value },
      ...prevState,
    ]);
  };
  const renderLanguageField = (e) => {
    return (
      <Form.Field required>
        <label>Language</label>
        <Dropdown
          options={languageOptions}
          placeholder="Choose/Add Languages"
          search
          selection
          fluid
          multiple
          allowAdditions
          value={watch(`bio.languages`)}
          onAddItem={handleAddition}
          onChange={(e, { value }) => setValue(`bio.languages`, value)}
        />
      </Form.Field>
    );
  };
  const renderSelectField = (e) => {
    return (
      <Form.Select
          error={
            errors &&
            errors.bio &&
            errors.bio.sumHeader &&
            !!errors.bio.sumHeader.message
          }
          name="sumHeader"
          fluid
          required
          label="Summary Header"
          options={sumHeaderOptions}
          placeholder="Summary Header"
          width={4}
          value={watch("bio.sumHeader")}
          onChange={(e, { value }) => setValue("bio.sumHeader", value)}
          
        />
    )
  }
  const renderImgField = (e) => {
    return (<Image
      src={watch('bio.image.objURL')}
      as="a"
      size="medium"
      circular
      href={watch('bio.image.objURL')}
      target="_blank"
    />)
  }
  return (
    <>
      <Header as="h3">Personal Information</Header>
      <Form.Group widths="equal">
        <Controller
          name="bio.fn"
          control={control}
          render={({ field }) => {
            return (<Form.Input
              error={
                errors && errors.bio && errors.bio.fn && !!errors.bio.fn.message
              }
              name="fn"
              fluid
              required
              label="First name"
              placeholder="First name"
              {...field}
            />)
}}
        />
        <Controller
          name="bio.ln"
          control={control}
          render={({ field }) => (
            <Form.Input
              error={
                errors && errors.bio && errors.bio.ln && !!errors.bio.ln.message
              }
              name="ln"
              fluid
              required
              label="Last name"
              placeholder="Last name"
              {...field}
            />
          )}
        />
        <Controller
          name="bio.role"
          control={control}
          render={({ field }) => (
            <Form.Input
              error={
                errors &&
                errors.bio &&
                errors.bio.role &&
                !!errors.bio.role.message
              }
              name="role"
              fluid
              label="Designation"
              placeholder="Designation"
              {...field}
            />
          )}
        />
      </Form.Group>
      {renderLanguageField()}
      <Form.Group>
        {renderSelectField()}

        <Controller
          name="bio.about"
          control={control}
          render={({ field }) => (
            <Form.TextArea
              error={
                errors &&
                errors.bio &&
                errors.bio.about &&
                !!errors.bio.about.message
              }
              name="about"
              required
              label="About"
              placeholder="Tell us more about you..."
              width={12}
              {...field}
            />
          )}
        />
      </Form.Group>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6} verticalAlign="top">
            <Form.Group required>
              <Form.Button
                error={
                  errors &&
                  errors.bio &&
                  errors.bio.image &&
                  !!errors.bio.image.message
                }
                required
                label="Display Picture"
                content="Choose File"
                labelPosition="left"
                icon="file"
                color="blue"
                onClick={(e) => {
                  e.preventDefault();
                  fileRef.current.click();
                }}
              />
              <input
                ref={fileRef}
                type="file"
                name="image"
                hidden
                onChange={(e) => onImgChange(e)}
              />
            </Form.Group>            
          </Grid.Column>
          <Grid.Column width={10} textAlign="center">
            
            {renderImgField()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Bio;
