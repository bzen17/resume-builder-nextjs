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

import { Controller } from "react-hook-form";

const Contact = ({ errors, watch, control, setValue }) => {
  return (
    <>
      <Header as="h3">Contact Information</Header>
      <Form.Group widths="equal">
        <Form.Field required>
          <Controller
            name="contact.email"
            control={control}
            render={({ field }) => (
              <Form.Input
                error={
                  errors &&
                  errors.contact &&
                  errors.contact.email &&
                  !!errors.contact.email.message
                }
                required
                icon="mail"
                iconPosition="left"
                placeholder="Email ID *"
                name="email"
                {...field}
              />
            )}
          />
        </Form.Field>
        <Form.Field required>
          <Controller
            name="contact.phone"
            control={control}
            render={({ field }) => (
              <Form.Input
                error={
                  errors &&
                  errors.contact &&
                  errors.contact.phone &&
                  !!errors.contact.phone.message
                }
                required
                icon="phone"
                iconPosition="left"
                placeholder="Contact Number *"
                name="phone"
                {...field}
              />
            )}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Controller
            name="contact.website"
            control={control}
            render={({ field }) => (
              <Form.Input
                error={
                  errors &&
                  errors.contact &&
                  errors.contact.website &&
                  !!errors.contact.website.message
                }
                icon="at"
                iconPosition="left"
                placeholder="Website"
                name="website"
                {...field}
              />
            )}
          />
        </Form.Field>
        <Form.Field>
          <Controller
            name="contact.git"
            control={control}
            render={({ field }) => (
              <Form.Input
                error={
                  errors &&
                  errors.contact &&
                  errors.contact.git &&
                  !!errors.contact.git.message
                }
                icon="github"
                iconPosition="left"
                placeholder="Git"
                name="git"
                {...field}
              />
            )}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Controller
            name="contact.linkedin"
            control={control}
            render={({ field }) => (
              <Form.Input
                error={
                  errors &&
                  errors.contact &&
                  errors.contact.linkedin &&
                  !!errors.contact.linkedin.message
                }
                icon="linkedin"
                iconPosition="left"
                placeholder="LinkedIn"
                name="linkedin"
                {...field}
              />
            )}
          />
        </Form.Field>
        <Form.Field>
          <Controller
            name="contact.twitter"
            control={control}
            render={({ field }) => (
              <Form.Input
                error={
                  errors &&
                  errors.contact &&
                  errors.contact.twitter &&
                  !!errors.contact.twitter.message
                }
                icon="twitter"
                iconPosition="left"
                placeholder="Twitter"
                name="twitter"
                {...field}
              />
            )}
          />
        </Form.Field>
      </Form.Group>
      <Form.Field required>
        <label style={{ color: "gray" }}>
          <Icon name="home" /> Address
        </label>
        <Controller
          name="contact.address"
          control={control}
          render={({ field }) => (
            <Form.TextArea
              error={
                errors &&
                errors.contact &&
                errors.contact.address &&
                !!errors.contact.address.message
              }
              placeholder="Enter your permanent address..."
              name="address"
              {...field}
            />
          )}
        />
      </Form.Field>
    </>
  );
};

export default Contact;
