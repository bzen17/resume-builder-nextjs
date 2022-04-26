
import React, { useState, useEffect } from "react";
import { Button, Grid, Form, Popup, Header, Dropdown } from "semantic-ui-react";
import validateField from "../../utility/formValidation";

import { Controller, useFieldArray } from "react-hook-form";
import { requiredFields } from "./schema";

const Skills = ({
  errors,
  setError,
  clearErrors,
  watch,
  control,
  setValue,
  skillOptions,
  setSkillOptions,
  setTotal,
}) => {
  const {
    fields: expertise,
    append: e_append,
    update: e_update,
    remove: e_remove,
  } = useFieldArray({ name: "expertise", control });
  const handleAddition = (e, { value }) => {
    setSkillOptions((prevState) => [
      { key: value, text: value, value },
      ...prevState,
    ]);
  };
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
                        errors.expertise[i] &&
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
                        errors.expertise[i] &&
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
                        setTotal((prevState) => {
                          return prevState + requiredFields.expertise.length;
                        });
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
                      onClick={(e) => {
                        setTotal((prevState) => {
                          return prevState - requiredFields.expertise.length;
                        });
                        e_remove(i);
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
        <Dropdown
          options={skillOptions}
          placeholder="Choose/Add Skills *"
          search
          selection
          fluid
          multiple
          required
          allowAdditions
          value={watch(`skills`)}
          onAddItem={handleAddition}
          onChange={(e, { value }) => setValue(`skills`, value)}
        />
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
