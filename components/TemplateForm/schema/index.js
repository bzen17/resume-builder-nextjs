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
        .required("First Name:  Required")
        .max(50, "First Name:  Cannot be more than 50 characters"),
      ln: yup
        .string()
        .required("Last Name:  Required")
        .max(50, "Last Name:  Cannot be more than 50 characters"),
      role: yup
        .string()
        .required("Designation:  Required")
        .max(100, "Designation:  Cannot be more than 100 characters"),
      languages: yup
        .array()
        .of(
          yup.string().max(100, "Language:  Cannot be more than 100 characters")
        )
        .required("Language:  Required"),
      sumHeader: yup.string().required("Summary Header:  Required"),
      about: yup
        .string()
        .required("About:  Required")
        .max(300, "About:  Cannot be more than 300 characters"),
    }),
    experience: yup.array().of(
      yup.object().shape({
        org: yup
          .string()
          .required("Organisation:  Required")
          .max(100, "Organisation:  Cannot be more than 100 characters"),
        title: yup
          .string()
          .required("Designation:  Required")
          .max(100, "Designation:  Cannot be more than 100 characters"),
        startMonth: yup
          .number()
          .typeError("Start Month:  Must be a number between 1 and 12")
          .required("Start Month:  Required")
          .moreThan(0, "Start Month:  Must be a number between 1 and 12")
          .lessThan(13, "Start Month:  Must be a number between 1 and 12"),
        startYear: yup
          .number()
          .typeError("Start Year:  Must be a number greater than 1900")
          .required("Start Year:  Required")
          .moreThan(1900, "Start Year:  Cannot be lesser than 1900"),
        endMonth: yup
          .number()
          .typeError("End Month:  Must be a number between 1 and 12")
          .required("End Month:  Required")
          .moreThan(0, "End Month:  Must be a number between 1 and 12")
          .lessThan(13, "End Month:  Must be a number between 1 and 12"),
        endYear: yup
          .number()
          .typeError(`End Year:  Must be greater than Start Year`)
          .required("End Year:  Required")
          .min(
            yup.ref("startYear"),
            "End Year:  Cannot be lesser than Start Year"
          ),
        desc: yup
          .string()
          .required("Description:  Required")
          .max(300, "Description:  Cannot be more than 300 characters"),
      })
    ),
    expertise: yup.array().of(
      yup.object().shape({
        title: yup
          .string()
          .max(100, "Title:  Cannot be more than 100 characters")
          .required("Title:  Required"),
        desc: yup
          .string()
          .max(300, "Description:  Cannot be more than 300 characters")
          .required("Description:  Required"),
      })
    ),
    skills: yup
      .array()
      .of(yup.string().max(100, "Skill:  Cannot be more than 100 characters"))
      .required(),
    projects: yup.array().of(
      yup.object().shape({
        name: yup
          .string()
          .required("Name:  Required")
          .max(100, "Name:  Cannot be more than 100 characters"),
        shortDesc: yup
          .string()
          .required("Short Description:  Required")
          .max(150, "Short Description:  Cannot be more than 150 characters"),
        url: yup.string().required("URL:  Required").url("URL:  Invalid URL"),
        desc: yup
          .string(),
        image: yup
          .object()
          .shape({
            URL: yup.object(),
            objURL: yup
              .string()
              .matches(/^blob:https?:\/\//, "Image:  Invalid Image"),
          })
          .required("Image:  Required"),
        techStack: yup
          .array()
          .of(
            yup
              .string()
              .max(100, "Tech Stack:  Cannot be more than 100 characters")
          )
          .required(),
      })
    ),
    certifications: yup.array().of(
      yup.object().shape({
        name: yup
          .string()
          .required("Name:  Required")
          .max(150, "Name:  Cannot be more than 150 characters"),
        url: yup.string().required("URL:  Required").url("URL:  Invalid URL"),
        image: yup
          .object()
          .shape({
            URL: yup.object(),
            objURL: yup
              .string()
              .matches(/^blob:https?:\/\//, "Image:  Invalid Image"),
          })
          .required("Image:  Required"),
      })
    ),
    contact: yup.object().shape({
      email: yup
        .string()
        .required("Email:  Required")
        .email("Email:  Invalid Email"),
      phone: yup
        .string()
        .required("Phone:  Required")
        .matches(
          /^(\+91)?[-]?([0-9]{10})$/,
          "Phone number is invalid (Format:  +91-9999999999)"
        ),
      address: yup
        .string()
        .required("Address:  Required")
        .max(200, "Address:  Cannot be more than 200 characters"),
      website: yup.string().url("Website:  Invalid URL"),
      git: yup.string().url("Git:  Invalid URL"),
      linkedin: yup.string().url("LinkedIn:  Invalid URL"),
      twitter: yup.string().url("Twitter:  Invalid URL"),
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
  experience: [
    {
      org: "",
      title: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      desc: "",
      languages: [],
    },
  ],
  expertise: [
    {
      title: "",
      desc: "",
    },
  ],
  skills: [],
  projects: [
    {
      name: "",
      shortDesc: "",
      url: "",
      desc: "",
      image: "",
      techStack: [],
    },
  ],
  certifications: [
    {
      name: "",
      url: "",
      image: "",
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

export const requiredFields = {
  bio: ["fn", "ln", "sumHeader", "about", "role", "languages"],
  experience: ["org", "title", "startMonth", "startYear", "endMonth", "endYear","desc"],
  expertise: ["title", "desc"],
  skills: [],
  projects: ["name", "shortDesc", "url", "image", "techStack"],
  certifications: ["name", "url", "image"],
  contact: ["email", "phone", "address"],
}