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

import React, { useState, useRef } from "react";
import { Button, Grid, Form, Message, Icon } from "semantic-ui-react";
import Bio from "./Bio";
import Experience from "./Experience";
import Languages from "./Language";
import Project from "./Project";
import Skills from "./Skills";
import Certifications from "./Certification";
import Contact from "./Contact";

const options = [
  { key: "1", text: "PDF", value: "pdf" },
  { key: "2", text: "HTML", value: "html" },
  { key: "3", text: "Both", value: "both" },
];

const TemplateForm = ({ activeItem }) => {
  const initFormData = {
    bio: {
      fn: "",
      ln: "",
      sumHeader: "",
      about: "",
      role: "",
    },
    exp: [
      {
        org: "",
        title: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        desc: "",
      },
    ],
    expertise: [
      {
        title: "",
        desc: "",
      },
    ],
    skills: [["", ""]],
    projects: [
      {
        name: "",
        shortDesc: "",
        url: "",
        desc: "",
        image: "",
        techStack: [["", ""]],
      },
    ],
    certifications: [
      {
        name: "",
        url: "",
        image: "",
      },
    ],
    languages: [["", ""]],
    contact: {
      email: "",
      phone: "",
      website: "",
      linkedin: "",
      github: "",
      twitter: "",
      address: "",
    },
  };
  const initErrors = {
    bio: [],
    experience: [],
    languages: [],
    skills: [],
    projects: [],
    certifications: [],
    contact: [],
  };
  const [formData, setFormData] = useState(initFormData);
  const [errors, setErrors] = useState(initErrors);
  const formRef = useRef(null);
  const renderForm = () => {
    if (activeItem === "bio") {
      return (
        <Bio
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else if (activeItem === "contact") {
      return (
        <Contact
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else if (activeItem === "experience") {
      return (
        <Experience
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else if (activeItem === "languages") {
      return (
        <Languages
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else if (activeItem === "projects") {
      return (
        <Project
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else if (activeItem === "certifications") {
      return (
        <Certifications
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    } else if (activeItem === "skills") {
      return (
        <Skills
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      );
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };
  return (
    <>
      <Form error onSubmit={handleSubmit} id="templateForm">
        {renderForm()}

        <Button.Group floated="right" style={{ marginTop: "1rem" }}>
          <Button
            style={{ marginRight: "0.3rem" }}
            onClick={() => {
              setFormData(initFormData);
              setErrors(initErrors);
            }}
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
