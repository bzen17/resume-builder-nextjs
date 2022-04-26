/* eslint-disable react-hooks/exhaustive-deps */

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
      style={{ margin: "0 0 1.5em 0", flexGrow:'0'}}
    ></Progress>
  );
};

export default ProgressBar;
