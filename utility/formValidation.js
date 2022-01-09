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

const fieldValidationErrors = {
  charLimit(key, value, charLimit) {
    var isValid = value.length <= charLimit;
    return {
      isValid,
      error: `${key} must be between 1 and ${charLimit} characters`,
    };
  },
  isAlpha(key, value) {
    const re = /^[A-Za-z]+$/;
    var isValid = re.test(value);
    console.log(isValid);
    return {
      isValid,
      error: `${key} must contain letters only`,
    };
  },
  isAlphaNumeric(key, value) {
    const re = /^[A-Za-z0-9]+$/;
    var isValid = re.test(value);
    return {
      isValid,
      error: `${key} must contain letters or numbers only`,
    };
  },
  isMonth(key, value) {
    const re = /^\b([1-9]|1[0-2])\b$/;
    var isValid = re.test(value);
    return {
      isValid,
      error: `${key} must be a valid month (1-12)`,
    };
  },
  isYear(key, value) {
    const re = /^[0-9]{4}$/;
    var isValid = re.test(value);
    return {
      isValid,
      error: `${key} must be a valid year (YYYY)`,
    };
  },
  isURL(key, value) {
    const re =
      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    var isValid = re.test(value);
    return {
      isValid,
      error: `${key} is not valid`,
    };
  },
  isEmail(key, value) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var isValid = re.test(value);
    return {
      isValid,
      error: `${key} is not valid`,
    };
  },
  isImage(key, value) {
    const re1 = /\.(gif|jpe?g|png)$/i;
    const re2 = /^blob:https?:\/\//i;
    var isValid = re1.test(value.URL.name) && re2.test(value.objURL);
    return {
      isValid,
      error: `${key} is not valid. (jpg, jpeg, png, gif)`,
    };
  },
  isPhone(key, value) {
    const re = /^(\+91)?[-]?([0-9]{10})$/;
    var isValid = re.test(value);
    return {
      isValid,
      error: `${key} is not valid (10 digits). Country code is optional`,
    };
  },
};

const addError = (key, error, setErrors) => {
  return setErrors((prev) => {
    //console.log('add',{...prev, [key]: [...new Set([...prev[key], error])]})
    return { ...prev, [key]: [...new Set([...prev[key], error])] };
  });
};

const removeError = (key, error, errors, setErrors) => {
  const { [key]: _ } = errors;
  if (_.includes(error)) {
    setErrors((prev) => {
      return {
        ...prev,
        [key]: _.filter((e) => {
          return e !== error;
        }),
      };
    });
  }
};

const validateField = (key, fieldName, value, errors, setErrors) => {
  const addErr = (err) => {
    return addError(key, err, setErrors);
  };
  const removeErr = (err) => {
    return removeError(key, err, errors, setErrors);
  };

  switch (key) {
    case "bio":
      switch (fieldName) {
        case "fn":
          let { isValid: v1, error: e1 } = fieldValidationErrors.isAlpha(
            "First Name",
            value
          );
          !v1 ? addErr(e1) : removeErr(e1);
          let { isValid: v2, error: e2 } = fieldValidationErrors.charLimit(
            "First Name",
            value,
            30
          );
          !v2 ? addErr(e2) : removeErr(e2);
          break;
        case "ln":
          let { isValid: v3, error: e3 } = fieldValidationErrors.isAlpha(
            "Last Name",
            value
          );
          !v3 ? addErr(e3) : removeErr(e3);
          let { isValid: v4, error: e4 } = fieldValidationErrors.charLimit(
            "Last Name",
            value,
            30
          );
          !v4 ? addErr(e4) : removeErr(e4);
          break;
        case "role":
          let { isValid: v5, error: e5 } = fieldValidationErrors.isAlpha(
            "Designation",
            value
          );
          !v5 ? addErr(e5) : removeErr(e5);
          let { isValid: v6, error: e6 } = fieldValidationErrors.charLimit(
            "Designation",
            value,
            30
          );
          !v6 ? addErr(e6) : removeErr(e6);
          break;
        case "sumHeader":
          break;
        case "about":
          let { isValid: v7, error: e7 } = fieldValidationErrors.isAlphaNumeric(
            "About",
            value
          );
          !v7 ? addErr(e7) : removeErr(e7);
          let { isValid: v8, error: e8 } = fieldValidationErrors.charLimit(
            "About",
            value,
            300
          );
          !v8 ? addErr(e8) : removeErr(e8);
      }
      break;
    case "experience":
      switch (fieldName) {
        case "org":
          let { isValid: v9, error: e9 } = fieldValidationErrors.isAlpha(
            "Organisation",
            value
          );
          !v9 ? addErr(e9) : removeErr(e9);
          let { isValid: v10, error: e10 } = fieldValidationErrors.charLimit(
            "Organisation",
            value,
            30
          );
          !v10 ? addErr(e10) : removeErr(e10);
          break;
        case "title":
          let { isValid: v11, error: e11 } = fieldValidationErrors.isAlpha(
            "Designation",
            value
          );
          !v11 ? addErr(e11) : removeErr(e11);
          let { isValid: v12, error: e12 } = fieldValidationErrors.charLimit(
            "Designation",
            value,
            30
          );
          !v12 ? addErr(e12) : removeErr(e12);
          break;
        case "startMonth":
          let { isValid: v13, error: e13 } = fieldValidationErrors.isMonth(
            "Start Month",
            value
          );
          !v13 ? addErr(e13) : removeErr(e13);
          break;
        case "startYear":
          let { isValid: v14, error: e14 } = fieldValidationErrors.isYear(
            "Start Year",
            value
          );
          !v14 ? addErr(e14) : removeErr(e14);
          break;
        case "endMonth":
          let { isValid: v15, error: e15 } = fieldValidationErrors.isMonth(
            "End Month",
            value
          );
          !v15 ? addErr(e15) : removeErr(e15);
          break;
        case "endYear":
          let { isValid: v16, error: e16 } = fieldValidationErrors.isYear(
            "End Year",
            value
          );
          !v16 ? addErr(e16) : removeErr(e16);
          break;
        case "desc":
          let { isValid: v17, error: e17 } =
            fieldValidationErrors.isAlphaNumeric("Description", value);
          !v17 ? addErr(e17) : removeErr(e17);
          let { isValid: v18, error: e18 } = fieldValidationErrors.charLimit(
            "Description",
            value,
            300
          );
          !v18 ? addErr(e18) : removeErr(e18);
          break;
      }
      break;
    case "skills":
      switch (fieldName) {
        case "title":
          let { isValid: v19, error: e19 } = fieldValidationErrors.isAlpha(
            "Title",
            value
          );
          !v19 ? addErr(e19) : removeErr(e19);
          let { isValid: v20, error: e20 } = fieldValidationErrors.charLimit(
            "Title",
            value,
            100
          );
          !v20 ? addErr(e20) : removeErr(e20);
          break;
        case "desc":
          let { isValid: v21, error: e21 } =
            fieldValidationErrors.isAlphaNumeric("Description", value);
          !v21 ? addErr(e21) : removeErr(e21);
          let { isValid: v22, error: e22 } = fieldValidationErrors.charLimit(
            "Description",
            value,
            300
          );
          !v22 ? addErr(e22) : removeErr(e22);
          break;
        case "skill":
          let { isValid: v23, error: e23 } = fieldValidationErrors.isAlpha(
            "Skills",
            value
          );
          !v23 ? addErr(e23) : removeErr(e23);
          let { isValid: v24, error: e24 } = fieldValidationErrors.charLimit(
            "Skills",
            value,
            50
          );
          !v24 ? addErr(e24) : removeErr(e24);
          break;
      }
      break;
    case "projects":
      switch (fieldName) {
        case "name":
          let { isValid: v25, error: e25 } = fieldValidationErrors.isAlpha(
            "Project Name",
            value
          );
          !v25 ? addErr(e25) : removeErr(e25);
          let { isValid: v26, error: e26 } = fieldValidationErrors.charLimit(
            "Project Name",
            value,
            100
          );
          !v26 ? addErr(e26) : removeErr(e26);
          break;
        case "shortDesc":
          let { isValid: v27, error: e27 } = fieldValidationErrors.isAlpha(
            "Short Description",
            value
          );
          !v27 ? addErr(e27) : removeErr(e27);
          let { isValid: v28, error: e28 } = fieldValidationErrors.charLimit(
            "Short Description",
            value,
            150
          );
          !v28 ? addErr(e28) : removeErr(e28);
          break;
        case "desc":
          let { isValid: v29, error: e29 } =
            fieldValidationErrors.isAlphaNumeric("Description", value);
          !v29 ? addErr(e29) : removeErr(e29);
          let { isValid: v30, error: e30 } = fieldValidationErrors.charLimit(
            "Description",
            value,
            400
          );
          !v30 ? addErr(e30) : removeErr(e30);
          break;
        case "url":
          let { isValid: v31, error: e31 } = fieldValidationErrors.isURL(
            "URL",
            value
          );
          !v31 ? addErr(e31) : removeErr(e31);
          break;
        case "image":
          let { isValid: v32, error: e32 } = fieldValidationErrors.isImage(
            "Image",
            value
          );
          !v32 ? addErr(e32) : removeErr(e32);
          break;
        case "techStack":
          let { isValid: v33, error: e33 } = fieldValidationErrors.isAlpha(
            "Tech Stacks",
            value
          );
          !v33 ? addErr(e33) : removeErr(e33);
          let { isValid: v34, error: e34 } = fieldValidationErrors.charLimit(
            "Tech Stacks",
            value,
            100
          );
          !v34 ? addErr(e34) : removeErr(e34);
          break;
      }
      break;
    case "certifications":
      switch (fieldName) {
        case "name":
          let { isValid: v33, error: e33 } = fieldValidationErrors.isAlpha(
            "Certification Name",
            value
          );
          !v33 ? addErr(e33) : removeErr(e33);
          let { isValid: v34, error: e34 } = fieldValidationErrors.charLimit(
            "Certification Name",
            value,
            100
          );
          !v34 ? addErr(e34) : removeErr(e34);
          break;
        case "url":
          let { isValid: v35, error: e35 } = fieldValidationErrors.isURL(
            "URL",
            value
          );
          !v35 ? addErr(e35) : removeErr(e35);
          break;
        case "image":
          let { isValid: v36, error: e36 } = fieldValidationErrors.isImage(
            "Image",
            value
          );
          !v36 ? addErr(e36) : removeErr(e36);
          break;
      }
      break;
    case "languages":
      let { isValid: v37, error: e37 } = fieldValidationErrors.isAlpha(
        "Languages",
        value
      );
      !v37 ? addErr(e37) : removeErr(e37);
      let { isValid: v38, error: e38 } = fieldValidationErrors.charLimit(
        "Languages",
        value,
        50
      );
      !v38 ? addErr(e38) : removeErr(e38);
      break;
    case "contact":
      switch (fieldName) {
        case "email":
          let { isValid: v39, error: e39 } = fieldValidationErrors.isEmail(
            "Email Address",
            value
          );
          !v39 ? addErr(e39) : removeErr(e39);
          break;
        case "phone":
          let { isValid: v40, error: e40 } = fieldValidationErrors.isPhone(
            "Phone Number",
            value
          );
          !v40 ? addErr(e40) : removeErr(e40);
          break;
        case "website":
          let { isValid: v41, error: e41 } = fieldValidationErrors.isURL(
            "Website URL",
            value
          );
          !v41 ? addErr(e41) : removeErr(e41);
          break;
        case "linkedin":
          let { isValid: v42, error: e42 } = fieldValidationErrors.isURL(
            "LinkedIn URL",
            value
          );
          !v42 ? addErr(e42) : removeErr(e42);
          break;
        case "github":
          let { isValid: v43, error: e43 } = fieldValidationErrors.isURL(
            "GitHub URL",
            value
          );
          !v43 ? addErr(e43) : removeErr(e43);
          break;
        case "twitter":
          let { isValid: v44, error: e44 } = fieldValidationErrors.isURL(
            "Twitter URL",
            value
          );
          !v44 ? addErr(e44) : removeErr(e44);
          break;
        case "address":
          let { isValid: v45, error: e45 } = fieldValidationErrors.charLimit(
            "Address",
            value,
            300
          );
          !v45 ? addErr(e45) : removeErr(e45);
          break;
      }
      break;
    default:
      break;
  }
};

const validateForm = (formData, formName) => {};
export default validateField;
