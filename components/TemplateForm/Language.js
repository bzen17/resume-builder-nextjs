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
import { Button, Grid, Form, Header, Popup } from "semantic-ui-react";
import validateField from "../../utility/formValidation";
import ErrorMessage from "./Message";
import { Controller, useFieldArray } from "react-hook-form";

const Languages = ({ errors, setError, watch, control, setValue }) => {
  const {
    fields: languages,
    append,
    update,
    remove,
  } = useFieldArray({ name: "languages", control });

  const renderLanguages = (e) => {
    let index = 0;
    return (
      <Form.Field required>
        {languages.length !== 0 &&
          languages[0].language.map((lg, i_lg) => {
            index++;
            return (
              <Form.Group widths="equal" key={`lang_g${i_lg}`}>
                {lg.map((l, i_l) => {
                  return (
                    <Form.Input
                      error={
                        i_lg === 0 &&
                        errors &&
                        errors.languages &&
                        errors.languages[0].language &&
                        errors.languages[0].language[i_lg][i_l] &&
                        !!errors.languages[0].language[i_lg][i_l].message
                      }
                      name={`lang${i_lg + i_l + index}`}
                      fluid
                      placeholder={
                        i_lg === 0 && i_l === 0
                          ? `#${i_lg + i_l + index} *`
                          : `#${i_lg + i_l + index}`
                      }
                      value={watch(`languages[0].language[${i_lg}][${i_l}]`)}
                      onChange={(e) => {
                        if (i_lg === 0 && i_l === 0 && e.target.value === "") {
                          setError(`languages.0.language[${i_lg}][${i_l}]`, {
                            message: `Language #${
                              2 * i_lg + i_l + 1
                            }: Required`,
                          });
                        } else if (
                          i_lg > 0 &&
                          watch(`languages[0].language[0][0]`) === ""
                        ) {
                          if (!watch(`languages[0].language[0][0]`)) {
                            setError(`languages.0.language.0.0`, {
                              message: `Language #1: Required`,
                            });
                          }
                        } else {
                          setError(`languages.0.language[${i_lg}][${i_l}]`, "");
                        }
                        setValue(
                          `languages.0.language[${i_lg}][${i_l}]`,
                          e.target.value
                        );
                      }}
                    />
                  );
                })}
                {i_lg === 0 ? (
                  <Popup
                    content="Add Language"
                    position="top right"
                    trigger={
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          update(0, {
                            language: [...languages[0].language, ["", ""]],
                          });
                        }}
                        icon="plus"
                        secondary
                      />
                    }
                  />
                ) : i_lg === languages[0].language.length - 1 ? (
                  <Popup
                    content="Remove Language"
                    position="top right"
                    trigger={
                      <Button
                        onClick={(e) =>
                          update(0, {
                            language: [...languages[0].language.slice(0, -1)],
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
      <Header as="h3">Languages</Header>
      {renderLanguages()}
    </>
  );
};

export default Languages;
