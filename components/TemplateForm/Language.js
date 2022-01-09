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
import { Button, Grid, Form, Header, Popup } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";

const Languages = ({ formData, setFormData, errors, setErrors }) => {
  const onLanguageChange = (event, i_lg, i_l) => {
    event.preventDefault();
    event.persist();

    setFormData((prev) => {
      const { languages } = formData;
      validateField("languages", null, event.target.value, errors, setErrors);
      languages[i_lg][i_l] = event.target.value;
      return {
        ...prev,
        languages,
      };
    });
  };
  const renderLanguages = (e) => {
    let index = 0;
    return (
      <Form.Field required>
        {formData.languages.map((lg, i_lg) => {
          index++;
          return (
            <Form.Group widths="equal" key={i_lg}>
              {lg.map((l, i_l) => {
                return (
                  <Form.Input
                    required={i_lg === 0 && i_l === 0}
                    key={i_l}
                    name={`skill${i_lg + i_l + index}`}
                    fluid
                    placeholder={
                      i_lg === 0 && i_l === 0
                        ? `#${i_lg + i_l + index} *`
                        : `#${i_lg + i_l + index}`
                    }
                    value={formData.languages[i_lg][i_l]}
                    onChange={(e) => onLanguageChange(e, i_lg, i_l)}
                  />
                );
              })}
              {i_lg === 0 ? (
                <Popup
                  key={i_lg}
                  content="Add Language"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) =>
                        setFormData({
                          ...formData,
                          languages: [...formData.languages, ["", ""]],
                        })
                      }
                      icon="plus"
                      secondary
                    />
                  }
                />
              ) : i_lg === formData.languages.length - 1 ? (
                <Popup
                  key={i_lg}
                  content="Remove Language"
                  position="top right"
                  trigger={
                    <Button
                      onClick={(e) =>
                        setFormData({
                          ...formData,
                          languages: [...formData.languages.slice(0, -1)],
                        })
                      }
                      icon="minus"
                      negative
                    />
                  }
                />
              ) : (
                <Button key={i_lg} color="white" />
              )}
            </Form.Group>
          );
        })}
      </Form.Field>
    );
  };
  return (
    <>
      <Header as="h3">Languages</Header>
      {renderLanguages()}
      {errors.languages.length !== 0 ? ErrorMessage(errors.languages) : ""}
    </>
  );
};

export default Languages;
