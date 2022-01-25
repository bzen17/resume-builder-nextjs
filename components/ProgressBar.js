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
import { Progress } from "semantic-ui-react";
import { requiredFields } from "../components/TemplateForm/schema";

const ProgressBar = ({ watch, errors, total }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let count = 0;
    for (const [section, fields] of Object.entries(requiredFields)) {
      if (section === "skills") {
        if (watch(`${section}`).length > 0) {
          count++;
        }
      } else {
        fields.forEach((field) => {
          if (section === "bio" || section === "contact") {
            console.log(
              "setTotal",
              section,
              field,
              watch(`${section}.${field}`)
            );
            if (
              watch(`${section}.${field}`) !== "" &&
              watch(`${section}.${field}`) !== undefined &&
              !(
                errors &&
                errors[section] &&
                errors[section][field] &&
                !!errors[section][field].message
              )
            ) {
              if (field === "languages") {
                if (watch(`${section}.${field}`).length > 0) {
                  count++;
                }
              } else {
                count++;
              }
            }
          } else {
            if (watch(`${section}`).length > 0) {
              watch(`${section}`).forEach((obj, i) => {
                if (field === "techStack") {
                  if (watch(`${section}.${i}.${field}`).length > 0) {
                    count++;
                  }
                } else {
                  if (
                    watch(`${section}.${i}.${field}`) !== "" &&
                    watch(`${section}.${i}.${field}`) !== undefined &&
                    !(
                      errors &&
                      errors[section] &&
                      errors[section][i] &&
                      errors[section][i][field] &&
                      !!errors[section][i][field].message
                    )
                  ) {
                    count++;
                  }
                }
              });
            }
          }
        });
      }
    }
    setValue(count);
  }, [watch()]);
  return (
    <Progress
      progress="percent"
      value={value}
      total={total}
      precision={0}
      indicating
    ></Progress>
  );
};

export default ProgressBar;