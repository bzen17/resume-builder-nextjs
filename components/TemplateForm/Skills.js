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

import React, { useState,useEffect } from "react";
import { Button, Grid, Form, Popup, Header } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";
import { Controller,useFieldArray } from "react-hook-form";

const Skills = ({ errors, watch, control, setValue }) => {
  const { fields:expertise, append:e_append, update:e_update, remove:e_remove } = useFieldArray({ name: 'expertise', control });
  const { fields:skills, append:s_append, update:s_update, remove:s_remove } = useFieldArray({ name: 'skills', control });
  useEffect(() => {
    if (expertise.length===0) {
      e_append( {
        title: "",
        desc: "",
      });
  }
  if (skills.length===0) {
    s_append({skill:[["",""]]});
}
}, []);
console.log('skills',skills)
  const onExpChange = (event, i) => {
    event.preventDefault();
    event.persist();
    console.log('change',event.target.name, event.target.value);
    setValue(`expertise[${i}].${event.target.name}`, event.target.value);
  };
  const onSkillChange = (event, i_tsg, i_ts) => {
    console.log('change',event.target.name, event.target.value);
    event.preventDefault();
    event.persist();
    setValue(`skills[0].skill[${i_tsg}][${i_ts}]`, event.target.value);
  };
  const renderExp = (e) => {
    let index = 0;
    return (
      <Form.Field>
        {expertise.map((e, i) => {
          index++;
          return (
            <Form.Group key={'exp',i}>
              <Controller
                name={`expertise[${i}]title`}
                control={control}
                rules={i===0?{ required: true }:{}}
                render={() => {
                return <Form.Input
                name="title"
                fluid
                placeholder={
                  i === 0
                    ? "Title (Skill/Expertise) *"
                    : "Title (Skill/Expertise)"
                }
                value={watch(`expertise[${i}].title`)}
                width={6}
                onChange={(e) => onExpChange(e, i)}
              />}}
              />
              <Controller
                name={`expertise[${i}]desc`}
                control={control}
                rules={i===0?{ required: true }:{}}
                render={() => {
                return <Form.TextArea
                name="desc"
                placeholder={
                  i === 0
                    ? "Describe your experience on your skill/expertise... *"
                    : "Describe your experience on your skill/expertise..."
                }
                value={watch(`expertise[${i}]desc`)}
                width={10}
                onChange={(e) => onExpChange(e, i)}
              />}}
              />
              {i === 0 ? (
                <Popup
                  content="Add Expertise"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) =>e_append( {
                        title: "",
                        desc: "",
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
        {skills.length!==0&&skills[0].skill.map((sg, i_sg) => {
          index++;
          return (
            <Form.Group widths="equal" key={'skill_g'+i_sg}>
              {sg.map((s, i_s) => {
                return (
                  <Controller
                  key={'skill'+i_s}
                name={`skills[${i_sg}][${i_s}]`}
                control={control}
                rules={i_sg===0?{ required: true }:{}}
                render={() => {
                return <Form.Input
                required={i_sg === 0}
                key={i_s}
                name={`skill${i_sg + i_s + index}`}
                fluid
                placeholder={
                  i_sg === 0
                    ? `#${2*i_sg + i_s + 1} *`
                    : `#${2*i_sg + i_s + 1}`
                }
                value={watch(`skills[0].skill[${i_sg}][${i_s}]`)}
                onChange={(e) => onSkillChange(e, i_sg, i_s)}
              />}}
              />
                  
                );
              })}

              {i_sg === 0 ? (
                <Popup
                  content="Add Skills"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) => s_update(0,{skill:[...skills[0].skill,["",""]]})}
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
                      onClick={(e) =>s_update(0,{skill:[...skills[0].skill.slice(0,-1)]})}
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
