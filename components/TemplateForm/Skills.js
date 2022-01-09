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

import React, { useState } from "react";
import { Button, Grid, Form, Popup, Header } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";

const Skills = ({ formData, setFormData, errors, setErrors }) => {
  const onExpChange = (event, i) => {
    event.preventDefault();
    event.persist();

    setFormData((prev) => {
      const { expertise } = formData;
      validateField(
        "skills",
        event.target.name,
        event.target.value,
        errors,
        setErrors
      );
      expertise[i] = {
        ...expertise[i],
        [event.target.name]: event.target.value,
      };
      return {
        ...prev,
        expertise,
      };
    });
  };
  const onSkillChange = (event, i_sg, i_s) => {
    event.preventDefault();
    event.persist();

    setFormData((prev) => {
      const { skills } = formData;
      skills[i_sg][i_s] = event.target.value;
      validateField("skills", "skill", event.target.value, errors, setErrors);
      return {
        ...prev,
        skills,
      };
    });
  };
  const renderExp = (e) => {
    let index = 0;
    return (
      <Form.Field>
        {formData.expertise.map((e, i) => {
          index++;
          return (
            <Form.Group key={i}>
              <Form.Input
                name="title"
                required={i === 0}
                fluid
                placeholder={
                  i === 0
                    ? "Title (Skill/Expertise) *"
                    : "Title (Skill/Expertise)"
                }
                width={6}
                value={formData.expertise[i].title}
                onChange={(e) => onExpChange(e, i)}
              />

              <Form.TextArea
                name="desc"
                required={i === 0}
                placeholder={
                  i === 0
                    ? "Describe your experience on your skill/expertise... *"
                    : "Describe your experience on your skill/expertise..."
                }
                width={10}
                value={formData.expertise[i].desc}
                onChange={(e) => onExpChange(e, i)}
              />
              {i === 0 ? (
                <Popup
                  content="Add Expertise"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) =>
                        setFormData({
                          ...formData,
                          expertise: [
                            { title: "", desc: "" },
                            ...formData.expertise,
                          ],
                        })
                      }
                      icon="plus"
                      secondary
                    />
                  }
                />
              ) : (
                <Popup
                  content="Remove Expertise"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) => {
                        let expertise = formData.expertise.filter(
                          (ex, index) => {
                            return index !== i;
                          }
                        );
                        setFormData({ ...formData, expertise });
                      }}
                      icon="minus"
                      negative
                    />
                  }
                />
              )}
            </Form.Group>
          );
        })}
      </Form.Field>
    );
  };
  const renderSkills = (e) => {
    let index = 0;
    return (
      <Form.Field required>
        {formData.skills.map((sg, i_sg) => {
          index++;
          return (
            <Form.Group widths="equal" key={i_sg}>
              {sg.map((s, i_s) => {
                return (
                  <Form.Input
                    required={i_sg === 0}
                    key={i_s}
                    name={`skill${i_sg + i_s + index}`}
                    fluid
                    placeholder={
                      i_sg === 0
                        ? `#${i_sg + i_s + index} *`
                        : `#${i_sg + i_s + index}`
                    }
                    value={formData.skills[i_sg][i_s]}
                    onChange={(e) => onSkillChange(e, i_sg, i_s)}
                  />
                );
              })}

              {i_sg === 0 ? (
                <Popup
                  content="Add Skills"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) =>
                        setFormData({
                          ...formData,
                          skills: [...formData.skills, ["", ""]],
                        })
                      }
                      icon="plus"
                      secondary
                    />
                  }
                />
              ) : i_sg === formData.skills.length - 1 ? (
                <Popup
                  content="Remove Skills"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) =>
                        setFormData({
                          ...formData,
                          skills: [...formData.skills.slice(0, -1)],
                        })
                      }
                      icon="minus"
                      negative
                    />
                  }
                />
              ) : (
                <Button color="white" />
              )}
            </Form.Group>
          );
        })}
      </Form.Field>
    );
  };
  return (
    <>
      <Header as="h3">Highlighted Skills / Expertise</Header>
      {renderExp()}
      <hr />
      <Header as="h3">Skills</Header>
      {renderSkills()}
      {errors.skills.length !== 0 ? ErrorMessage(errors.skills) : ""}
    </>
  );
};

export default Skills;
