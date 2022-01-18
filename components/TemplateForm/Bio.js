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
import React from "react";
import { Button, Grid, Form, Header, Dropdown } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";

const Bio = ({ schema, errors, watch, control, setValue }) => {
  const sumHeaderOptions = [
    { key: "1", text: "About Me", value: "About Me" },
    { key: "2", text: "Work Summary", value: "Work Summary" },
    { key: "3", text: "Professional Summary", value: "Professional Summary" },
  ];

  return (
    <>
      <Header as="h3">Personal Information</Header>
      <Form.Group widths="equal">
        <Controller
          name="bio.fn"
          control={control}
          render={({ field }) => (
            <Form.Input
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
              name="role"
              fluid
              label="Designation"
              placeholder="Designation"
              {...field}
            />
          )}
        />
      </Form.Group>

      <Form.Group>
        <Controller
          name="bio.sumHeader"
          control={control}
          render={({ field }) => (
            <Form.Select
              name="sumHeader"
              fluid
              required
              label="Summary Header"
              options={sumHeaderOptions}
              placeholder="Summary Header"
              width={4}
              {...field}
            />
          )}
        />

        <Controller
          name="bio.about"
          control={control}
          render={({ field }) => (
            <Form.TextArea
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
