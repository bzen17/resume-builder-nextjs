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
import { Button, Header, Form, Icon, Input } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";

const Contact = ({ formData, setFormData, errors, setErrors }) => {
  const onContactChange = (event) => {
    event.preventDefault();
    event.persist();
    setFormData((prev) => {
      const { contact } = formData;
      validateField(
        "contact",
        event.target.name,
        event.target.value,
        errors,
        setErrors
      );
      contact = {
        ...contact,
        [event.target.name]: event.target.value,
      };
      return {
        ...prev,
        contact,
      };
    });
  };
  return (
    <>
      <Header as="h3">Contact Information</Header>
      <Form.Group widths="equal">
        <Form.Field required>
          <Input
            required
            icon="mail"
            iconPosition="left"
            placeholder="Email ID *"
            name="email"
            value={formData.contact.email}
            onChange={(e) => onContactChange(e)}
          />
        </Form.Field>
        <Form.Field required>
          <Input
            icon="phone"
            iconPosition="left"
            placeholder="Contact Number *"
            name="phone"
            value={formData.contact.phone}
            onChange={(e) => onContactChange(e)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Input
            icon="at"
            iconPosition="left"
            placeholder="Website"
            name="website"
            value={formData.contact.website}
            onChange={(e) => onContactChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            icon="github"
            iconPosition="left"
            placeholder="Github"
            name="github"
            value={formData.contact.github}
            onChange={(e) => onContactChange(e)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Input
            icon="linkedin"
            iconPosition="left"
            placeholder="LinkedIn"
            name="linkedin"
            value={formData.contact.linkedin}
            onChange={(e) => onContactChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            icon="twitter"
            iconPosition="left"
            placeholder="Twitter"
            name="twitter"
            value={formData.contact.twitter}
            onChange={(e) => onContactChange(e)}
          />
        </Form.Field>
      </Form.Group>
      <Form.Field required>
        <label style={{ color: "gray" }}>
          <Icon name="home" /> Address
        </label>
        <Form.TextArea
          placeholder="Enter your permanent address..."
          name="address"
          value={formData.contact.address}
          onChange={(e) => onContactChange(e)}
        />
      </Form.Field>
      {errors.contact.length !== 0 ? ErrorMessage(errors.contact) : ""}
    </>
  );
};

export default Contact;
