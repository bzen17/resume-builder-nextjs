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
import Project from "./Project";
import Skills from "./Skills";
import Certifications from "./Certification";
import Contact from "./Contact";
import { validateForm } from "../../utility/formValidation";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, initFormData } from "./schema";
import { formError } from "./errors";

const options = [
  { key: "1", text: "PDF", value: "pdf" },
  { key: "2", text: "HTML", value: "html" },
  { key: "3", text: "Both", value: "both" },
];

const TemplateForm = ({
  activeItem,
  handleSubmit,
  watch,
  setValue,
  control,
  errors,
  setError,
  clearErrors,
  reset,
  setTotal,
}) => {
  const initErrors = {
    bio: [],
    experience: [],
    languages: [],
    skills: [],
    projects: [],
    certifications: [],
    contact: [],
  };
  const techOptions = [
    { key: "HTML", text: "HTML", value: "HTML" },
    { key: "CSS", text: "CSS", value: "CSS" },
    { key: "JavaScript", text: "JavaScript", value: "JavaScript" },
    { key: "Linux", text: "Linux", value: "Linux" },
    { key: "Node.js", text: "Node.js", value: "Node.js" },
  ];
  const langOptions = [
    { key: "English", text: "English", value: "English" },
    { key: "French", text: "French", value: "French" },
    { key: "Spanish", text: "Spanish", value: "Spanish" },
    { key: "German", text: "German", value: "German" },
    { key: "Chinese", text: "Chinese", value: "Chinese" },
  ];
  const skillsOptions = [
    { key: "HTML", text: "HTML", value: "HTML" },
    { key: "CSS", text: "CSS", value: "CSS" },
    { key: "JavaScript", text: "JavaScript", value: "JavaScript" },
    { key: "Linux", text: "Linux", value: "Linux" },
    { key: "Node.js", text: "Node.js", value: "Node.js" },
  ];
  const [techStackOptions, setTechStackOptions] = useState(techOptions);
  const [languageOptions, setLanguageOptions] = useState(langOptions);
  const [skillOptions, setSkillOptions] = useState(skillsOptions);
  const [formErrors, setFormErrors] = useState(initErrors);
  useEffect(() => {
    console.log("Errors", errors);
  }, [errors]);
  console.log("Data", watch());
  const onSubmit = (data) => console.log("data", data);
  const formRef = useRef(null);
  const renderForm = () => {
    if (activeItem === "bio") {
      return (
        <Bio
          errors={errors}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          watch={watch}
          control={control}
          setValue={setValue}
          languageOptions={languageOptions}
          setLanguageOptions={setLanguageOptions}
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
          setTotal={setTotal}
        />
      );
    } else if (activeItem === "projects") {
      return (
        <Project
          errors={errors}
          setError={setError}
          watch={watch}
          control={control}
          setValue={setValue}
          techStackOptions={techStackOptions}
          setTechStackOptions={setTechStackOptions}
          setTotal={setTotal}
        />
      );
    } else if (activeItem === "certifications") {
      return (
        <Certifications
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
          setTotal={setTotal}
        />
      );
    } else if (activeItem === "skills") {
      return (
        <Skills
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
          watch={watch}
          control={control}
          setValue={setValue}
          skillOptions={skillOptions}
          setSkillOptions={setSkillOptions}
          setTotal={setTotal}
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
