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

export const formError = (errors, formErrors, setFormErrors) => {
  let currentFormErrors = { ...formErrors };
  if (errors) {
    for (const [k, v] of Object.entries(errors)) {
      console.log(Object.prototype.toString.call(v));
      if (Object.prototype.toString.call(v) === "[object Array]") {
        v.forEach((obj, i) => {
          for (const [key, value] of Object.entries(obj)) {
            //console.log(fieldNameMap[k][i][key], value.message);
            if (Object.prototype.toString.call(value) === "[object Array]") {
              // console.log(true,fieldNameMap[k][i][key],value.message)
              value.forEach((fieldGroup, ifg) => {
                fieldGroup.forEach((field, i) => {
                  if (field.message !== undefined) {
                    //currentFormErrors={...currentFormErrors, [k]: [...currentFormErrors[k],field.message]}
                    //setFormErrors([prevState => {return {...prevState, [k]: [...prevState[k],field.message]}}])
                  }
                });
              });
            }
          }
        });
      } else if (Object.prototype.toString.call(v) === "[object Object]") {
        for (const [key, value] of Object.entries(v)) {
          console.log(k, value.message);
        }
      }
    }
    //setFormErrors(prevState=>{return {...prevState}})
  }

  const fieldNameMap = {
    bio: {
      fn: "First Name",
      ln: "Last Name",
      sumHeader: "Summary Header",
      about: "About",
      role: "Designation",
    },
    exp: [
      {
        org: "Organization",
        title: "Designation",
        startMonth: "Start Month",
        startYear: "Start Year",
        endMonth: "End Month",
        endYear: "End Year",
        desc: "Description",
      },
    ],
    expertise: [
      {
        title: "Title",
        desc: "Description",
      },
    ],
    skills: [
      {
        skill: [["Skill", "Skill"]],
      },
    ],
    projects: [
      {
        name: "Name",
        shortDesc: "Short Description",
        url: "URL",
        desc: "Description",
        image: "Image",
        techStack: [["Tech Stack", "Tech Stack"]],
      },
    ],
    certifications: [
      {
        name: "Name",
        url: "URL",
        image: "Image",
      },
    ],
    languages: [
      {
        language: [["Language", "Language"]],
      },
    ],
    contact: {
      email: "Email",
      phone: "Phone",
      website: "Website",
      linkedin: "LinkedIn",
      git: "Git",
      twitter: "Twitter",
      address: "Address",
    },
  };
};
