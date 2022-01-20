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

import * as yup from "yup";

export const schema = yup
  .object({
    bio: yup.object().shape({
      fn: yup
        .string()
        .required("Required")
        .max(50, "Cannot be more than 50 characters"),
      ln: yup
        .string()
        .required("Required")
        .max(50, "Cannot be more than 50 characters"),
      role: yup
        .string()
        .required("Required")
        .max(100, "Cannot be more than 100 characters"),
      sumHeader: yup.string().required("Required"),
      about: yup
        .string()
        .required("Required")
        .max(300, "Cannot be more than 300 characters"),
    }),
    exp: yup.array().of(
      yup.object().shape({
        org: yup
          .string()
          .required("Required")
          .max(100, "Cannot be more than 100 characters"),
        title: yup
          .string()
          .required("Required")
          .max(100, "Cannot be more than 100 characters"),
        startMonth: yup
          .number()
          .typeError("Must be a number between 1 and 12")
          .required("Required")
          .moreThan(0, "Must be a greater than 0")
          .lessThan(13, "Cannot be greater than 12"),
        startYear: yup
          .number()
          .typeError("Must be a number greater than 1900")
          .required("Required")
          .moreThan(1900, "Cannot be lesser than 1900"),
        endMonth: yup
          .number()
          .typeError("Must be a number between 1 and 12")
          .required("Required")
          .moreThan(0, "Must be a greater than 0")
          .lessThan(13, "Cannot be greater than 12"),
        endYear: yup
          .number()
          .typeError(`Must be greater than Start Year`)
          .required("Required")
          .min(yup.ref("startYear"), "Cannot be lesser than Start Year"),
        desc: yup
          .string()
          .required("Required")
          .max(300, "Cannot be more than 300 characters"),
      })
    ),
    expertise: yup.array().of(
      yup.object().shape({
        title: yup.string().max(100, "Cannot be more than 100 characters"),
        desc: yup.string().max(300, "Cannot be more than 300 characters"),
      })
    ),
    skills: yup.array().of(
      yup.object().shape({
        skill: yup
          .array()
          .of(
            yup
              .array()
              .of(
                yup.string().max(100, "Cannot be more than 100 characters"),
                yup.string().max(100, "Cannot be more than 100 characters")
              )
          ),
      })
    ),
    projects: yup.array().of(
      yup.object().shape({
        name: yup
          .string()
          .required("Required")
          .max(100, "Cannot be more than 100 characters"),
        shortDesc: yup
          .string()
          .required("Required")
          .max(150, "Cannot be more than 150 characters"),
        url: yup.string().required("Required").url("Invalid URL"),
        desc: yup
          .string()
          .required("Required")
          .max(300, "Cannot be more than 300 characters"),
        image: yup
          .object()
          .shape({
            URL: yup.object(),
            objURL: yup.string().matches(/^blob:https?:\/\//),
          })
          .required("Required"),
        techStack: yup
          .array()
          .of(
            yup
              .array()
              .of(
                yup.string().max(100, "Cannot be more than 100 characters"),
                yup.string().max(100, "Cannot be more than 100 characters")
              )
          )
          .test({
            name: "firstRequired",
            message: "Required",
            test: (val) => {
              console.log("Test", val[0][0], val[0][1], val.length); //!(val[0][0]===''&&val[0][1]===''&&val.length>1)
              return true;
            },
          }),
      })
    ),
    certifications: yup.array().of(
      yup.object().shape({
        name: yup
          .string()
          .required("Required")
          .max(150, "Cannot be more than 150 characters"),
        url: yup.string().required("Required").url("Invalid URL"),
        image: yup
          .object()
          .shape({
            URL: yup.object(),
            objURL: yup.string().matches(/^blob:https?:\/\//),
          })
          .required("Required"),
      })
    ),
    languages: yup.array().of(
      yup.object().shape({
        language: yup
          .array()
          .of(
            yup
              .array()
              .of(
                yup.string().max(50, "Cannot be more than 50 characters"),
                yup.string().max(50, "Cannot be more than 50 characters")
              )
          ),
      })
    ),
    contact: yup.object().shape({
      email: yup.string().required("Required").email("Invalid Email"),
      phone: yup
        .string()
        .required("Required")
        .matches(
          /^(\+91)?[-]?([0-9]{10})$/,
          "Phone number is invalid (Format: +91-9999999999)"
        ),
      address: yup
        .string()
        .required("Required")
        .max(200, "Cannot be more than 200 characters"),
      website: yup.string().url("Invalid URL"),
      git: yup.string().url("Invalid URL"),
      linkedin: yup.string().url("Invalid URL"),
      twitter: yup.string().url("Invalid URL"),
    }),
  })
  .required("Required");

export const initFormData = {
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
  skills: [
    {
      skill: [["", ""]],
    },
  ],
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
  languages: [
    {
      language: [["", ""]],
    },
  ],
  contact: {
    email: "",
    phone: "",
    website: "",
    linkedin: "",
    git: "",
    twitter: "",
    address: "",
  },
};
