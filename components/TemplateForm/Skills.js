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

import React, { useState, useEffect } from "react";
import { Button, Grid, Form, Popup, Header } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";
import { Controller, useFieldArray } from "react-hook-form";

const Skills = ({
  errors,
  setError,
  clearErrors,
  watch,
  control,
  setValue,
}) => {
  const {
    fields: expertise,
    append: e_append,
    update: e_update,
    remove: e_remove,
  } = useFieldArray({ name: "expertise", control });
  const {
    fields: skills,
    append: s_append,
    update: s_update,
    remove: s_remove,
  } = useFieldArray({ name: "skills", control });
  const renderExp = (e) => {
    let index = 0;
    return (
      <Form.Field>
        {expertise.map((e, i) => {
          index++;
          return (
            <Form.Group key={("exp", i)}>
              <Controller
                name={`expertise.${i}.title`}
                control={control}
                rules={i === 0 ? { required: true } : {}}
                render={({ field }) => {
                  return (
                    <Form.Input
                      error={
                        errors &&
                        errors.expertise &&
                        errors.expertise[i].title &&
                        !!errors.expertise[i].title.message
                      }
                      name="title"
                      fluid
                      placeholder={
                        i === 0
                          ? "Title (Skill/Expertise) *"
                          : "Title (Skill/Expertise)"
                      }
                      width={6}
                      {...field}
                    />
                  );
                }}
              />
              <Controller
                name={`expertise.${i}.desc`}
                control={control}
                render={({ field }) => {
                  return (
                    <Form.TextArea
                      error={
                        errors &&
                        errors.expertise &&
                        errors.expertise[i].desc &&
                        !!errors.expertise[i].desc.message
                      }
                      name="desc"
                      placeholder={
                        i === 0
                          ? "Describe your experience on your skill/expertise... *"
                          : "Describe your experience on your skill/expertise..."
                      }
                      width={10}
                      {...field}
                    />
                  );
                }}
              />
              {i === 0 ? (
                <Popup
                  content="Add Expertise"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        e_append({
                          title: "",
                          desc: "",
                        });
                      }}
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
                      onClick={(e) => e_remove(i)}
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
        {skills.length !== 0 &&
          skills[0].skill.map((sg, i_sg) => {
            index++;
            return (
              <Form.Group widths="equal" key={"skill_g" + i_sg}>
                {sg.map((s, i_s) => {
                  return (
                    <Form.Input
                      error={
                        i_sg === 0 &&
                        errors &&
                        errors.skills &&
                        errors.skills[0].skill &&
                        errors.skills[0].skill[i_sg][i_s] &&
                        !!errors.skills[0].skill[i_sg][i_s].message
                      }
                      name={`skill${i_sg + i_s + index}`}
                      fluid
                      placeholder={
                        i_sg === 0
                          ? `#${2 * i_sg + i_s + 1} *`
                          : `#${2 * i_sg + i_s + 1}`
                      }
                      value={watch(`skills[0].skill[${i_sg}][${i_s}]`)}
                      onChange={(e) => {
                        if (i_sg === 0 && e.target.value === "") {
                          setError(`skills.0.skill[0][${i_s}]`, {
                            message: `Skill #${2 * i_sg + i_s + 1}: Required`,
                          });
                        } else if (
                          i_sg > 0 &&
                          (watch(`skills[0].skill[0][0]`) === "" ||
                            watch(`skills[0].skill[0][1]`) === "")
                        ) {
                          console.log(
                            "Error watch",
                            !watch(`skills[0].skill[0][0]`)
                          );
                          if (!watch(`skills[0].skill[0][0]`)) {
                            setError(`skills.0.skill.0.0`, {
                              message: `Skill #1: Required`,
                            });
                          }
                          if (!watch(`skills[0].skill[0][1]`)) {
                            setError(`skills.0.skill.0.1`, {
                              message: `Skill #2: Required`,
                            });
                          }
                        } else {
                          clearErrors(`skills`);
                        }
                        setValue(
                          `skills.0.skill[${i_sg}][${i_s}]`,
                          e.target.value
                        );
                      }}
                    />
                  );
                })}

                {i_sg === 0 ? (
                  <Popup
                    content="Add Skills"
                    position="top right"
                    trigger={
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          s_update(0, {
                            skill: [...skills[0].skill, ["", ""]],
                          });
                        }}
                        icon="plus"
                        secondary
                      />
                    }
                  />
                ) : i_sg === skills[0].skill.length - 1 ? (
                  <Popup
                    content="Remove Skills"
                    position="top right"
                    trigger={
                      <Button
                        onClick={(e) =>
                          s_update(0, {
                            skill: [...skills[0].skill.slice(0, -1)],
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
    </>
  );
};

export default Skills;
