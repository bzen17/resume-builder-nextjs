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

import React from "react";
import { Button, Grid, Form, Header, Dropdown } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";

const Bio = ({ formData, setFormData, errors, setErrors }) => {
  const sumHeaderOptions = [
    { key: "1", text: "About Me", value: "About Me" },
    { key: "2", text: "Work Summary", value: "Work Summary" },
    { key: "3", text: "Professional Summary", value: "Professional Summary" },
  ];

  const onBioChange = (event, value) => {
    event.preventDefault();
    event.persist();
    console.log(errors);
    setFormData((prev) => {
      const { bio } = formData;
      if (value) {
        validateField("bio", "sumHeader", value, errors, setErrors);
        bio = {
          ...bio,
          sumHeader: value,
        };
      } else {
        validateField(
          "bio",
          event.target.name,
          event.target.value,
          errors,
          setErrors
        );
        bio = {
          ...bio,
          [event.target.name]: event.target.value,
        };
      }
      return {
        ...prev,
        bio,
      };
    });
  };
  return (
    <>
      <Header as="h3">Personal Information</Header>
      <Form.Group widths="equal">
        <Form.Input
          name="fn"
          required
          fluid
          label="First name"
          placeholder="First name"
          value={formData.bio.fn}
          onChange={(e) => onBioChange(e)}
        />
        <Form.Input
          name="ln"
          required
          fluid
          label="Last name"
          placeholder="Last name"
          value={formData.bio.ln}
          onChange={(e) => onBioChange(e)}
        />
        <Form.Input
          name="role"
          required
          fluid
          label="Designation"
          placeholder="Designation"
          value={formData.bio.role}
          onChange={(e) => onBioChange(e)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Select
          required
          fluid
          name="sumHeader"
          value={formData.bio.sumHeader}
          onChange={(e, { value }) => onBioChange(e, value?.toString())}
          label="Summary Header"
          options={sumHeaderOptions}
          placeholder="Summary Header"
          width={4}
        />
        <Form.TextArea
          name="about"
          value={formData.bio.about}
          onChange={(e) => onBioChange(e)}
          required
          label="About"
          placeholder="Tell us more about you..."
          width={12}
        />
      </Form.Group>
      {errors.bio.length !== 0 ? ErrorMessage(errors.bio) : ""}
    </>
  );
};

export default Bio;
