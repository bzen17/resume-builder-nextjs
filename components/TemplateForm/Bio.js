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
import { Controller } from "react-hook-form";
import React, { useEffect } from "react";
import { Button, Grid, Form, Header, Dropdown } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";
import { formError } from "./errors";

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
    { key: "1", text: "About Me", value: "About Me" },
    { key: "2", text: "Work Summary", value: "Work Summary" },
    { key: "3", text: "Professional Summary", value: "Professional Summary" },
  ];
  const handleAddition = (e, { value }) => {
    setLanguageOptions((prevState) => [
      { key: value, text: value, value },
      ...prevState,
    ]);
  };
  const renderLanguageField = (e) => {
    let index = 0;
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
  return (
    <>
      <Header as="h3">Personal Information</Header>
      <Form.Group widths="equal">
        <Controller
          name="bio.fn"
          control={control}
          render={({ field }) => (
            <Form.Input
              error={
                errors && errors.bio && errors.bio.fn && !!errors.bio.fn.message
              }
              name="fn"
              fluid
              required
              label="First name"
              placeholder="First name"
              {...field}
            />
          )}
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
          onChange={(e, { value }) => setValue("bio.sumHeader", value)}
        />

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
      {/* {errors.bio.length !== 0 ? ErrorMessage(errors.bio) : ""} */}
    </>
  );
};

export default Bio;
