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

import React, { useState, useRef, useEffect } from "react";
import { Button, Grid, Form, Message, Icon } from "semantic-ui-react";
import Bio from "./Bio";
import Experience from "./Experience";
import Languages from "./Language";
import Project from "./Project";
import Skills from "./Skills";
import Certifications from "./Certification";
import Contact from "./Contact";
import { validateForm } from "../../utility/formValidation";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {schema,initFormData} from './schema'

const options = [
  { key: "1", text: "PDF", value: "pdf" },
  { key: "2", text: "HTML", value: "html" },
  { key: "3", text: "Both", value: "both" },
];

const TemplateForm = ({ activeItem }) => {
  
  const initErrors = {
    bio: [],
    experience: [],
    languages: [],
    skills: [],
    projects: [],
    certifications: [],
    contact: [],
  };
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: initFormData,
  });

  const onSubmit = (data) => console.log("data", data);
  console.log("Errors", errors);
  console.log("Data", watch());
  const formRef = useRef(null);
  const renderForm = () => {
    if (activeItem === "bio") {
      return (
        <Bio
          schema={schema}
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
        />
      );
    } else if (activeItem === "contact") {
      return (
        <Contact
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
        />
      );
    } else if (activeItem === "experience") {
      return (
        <Experience
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
        />
      );
    } else if (activeItem === "languages") {
      return (
        <Languages
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
        />
      );
    } else if (activeItem === "projects") {
      return (
        <Project
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
        />
      );
    } else if (activeItem === "certifications") {
      return (
        <Certifications
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
        />
      );
    } else if (activeItem === "skills") {
      return (
        <Skills
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
        />
      );
    }
  };

  return (
    <>
      <Form error onSubmit={handleSubmit(onSubmit)} id="templateForm">
        {renderForm()}

        <Button.Group floated="right" style={{ marginTop: "1rem" }}>
          <Button
            style={{ marginRight: "0.3rem" }}
            onClick={() => reset()}
            negative
          >
            Cancel
          </Button>
          <Button.Or />
          <Button
            style={{ marginLeft: "0.3rem", borderRadius: "0 0.3rem 0.3rem 0" }}
            icon
            labelPosition="left"
            positive
            onClick={(e) => formRef.current.focus()}
          >
            <Icon name="settings" />
            Generate
          </Button>
          <input
            ref={formRef}
            id="formSubmitBtn"
            type="submit"
            style={{ display: "none" }}
          />
        </Button.Group>
      </Form>
    </>
  );
};

export default TemplateForm;
