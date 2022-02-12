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

import React, { useState, useRef, useEffect } from "react";
import { Button, Grid, Form, Step, Icon, Modal,Popup,Header,Container } from "semantic-ui-react";
import GooglePicker from 'react-google-picker';
import Bio from "./Bio";
import Experience from "./Experience";
import Project from "./Project";
import Skills from "./Skills";
import Certifications from "./Certification";
import Contact from "./Contact";

const options = [
  { key: "1", text: "PDF", value: "pdf" },
  { key: "2", text: "HTML", value: "html" },
  { key: "3", text: "Both", value: "both" },
];

const TemplateForm = ({
  activeItem,
  handleSubmit,
  watch,
  setValue,
  control,
  errors,
  setError,
  clearErrors,
  reset,
  setTotal,
  API_KEY,CLIENT_ID
}) => {
  const initErrors = {
    bio: [],
    experience: [],
    languages: [],
    skills: [],
    projects: [],
    certifications: [],
    contact: [],
  };
  const steps = ["Download", "Upload", "Info"];
  const [submitFlag, setSubmitFlag] = useState(false);
  const [activeStep, setActiveStep] = useState('Download');
  const [stepCompleted, setStepCompleted] = useState({Download:false,Upload:false});
  const onStepClick = (e, { title }) => {
    setActiveStep(title);
  }
  const onStepComplete = (e) => {
    setActiveStep(steps[steps.indexOf(activeStep)+1]);
    setStepCompleted({ ...stepCompleted, [activeStep]: true });
  }
  function exampleReducer(state, action) {
    switch (action.type) {
      case "close":
        return { open: false };
      case "open":
        return { open: true, size: action.size };
      default:
        throw new Error("Unsupported action...");
    }
  }
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  });
  const { open, size } = state;
  const techOptions = [
    { key: "HTML", text: "HTML", value: "HTML" },
    { key: "CSS", text: "CSS", value: "CSS" },
    { key: "JavaScript", text: "JavaScript", value: "JavaScript" },
    { key: "Linux", text: "Linux", value: "Linux" },
    { key: "Node.js", text: "Node.js", value: "Node.js" },
  ];
  const langOptions = [
    { key: "English", text: "English", value: "English" },
    { key: "French", text: "French", value: "French" },
    { key: "Spanish", text: "Spanish", value: "Spanish" },
    { key: "German", text: "German", value: "German" },
    { key: "Chinese", text: "Chinese", value: "Chinese" },
  ];
  const skillsOptions = [
    { key: "HTML", text: "HTML", value: "HTML" },
    { key: "CSS", text: "CSS", value: "CSS" },
    { key: "JavaScript", text: "JavaScript", value: "JavaScript" },
    { key: "Linux", text: "Linux", value: "Linux" },
    { key: "Node.js", text: "Node.js", value: "Node.js" },
  ];
  const [techStackOptions, setTechStackOptions] = useState(techOptions);
  const [languageOptions, setLanguageOptions] = useState(langOptions);
  const [skillOptions, setSkillOptions] = useState(skillsOptions);
  const [formErrors, setFormErrors] = useState(initErrors);
  useEffect(() => {
    console.log("Errors", errors);
  }, [errors]);
  console.log("Data", watch());
  const onSubmit = (data) => {
    console.log("submittedData", data);
    localStorage.setItem("userData", JSON.stringify(data));
    setSubmitFlag(true)
    //dispatch({ type: "close" });
    //window.open("/generate", "_blank");
  };
  const onError = (errors, e) => dispatch({ type: "close" });
  const renderForm = () => {
    if (activeItem === "bio") {
      return (
        <Bio
          errors={errors}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          watch={watch}
          control={control}
          setValue={setValue}
          languageOptions={languageOptions}
          setLanguageOptions={setLanguageOptions}
        />
      );
    } else if (activeItem === "contact") {
      return (
        <Contact
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
        />
      );
    } else if (activeItem === "experience") {
      return (
        <Experience
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
          setTotal={setTotal}
        />
      );
    } else if (activeItem === "projects") {
      return (
        <Project
          errors={errors}
          setError={setError}
          watch={watch}
          control={control}
          setValue={setValue}
          techStackOptions={techStackOptions}
          setTechStackOptions={setTechStackOptions}
          setTotal={setTotal}
        />
      );
    } else if (activeItem === "certifications") {
      return (
        <Certifications
          errors={errors}
          watch={watch}
          control={control}
          setValue={setValue}
          setTotal={setTotal}
        />
      );
    } else if (activeItem === "skills") {
      return (
        <Skills
          errors={errors}
          setError={setError}
          clearErrors={clearErrors}
          watch={watch}
          control={control}
          setValue={setValue}
          skillOptions={skillOptions}
          setSkillOptions={setSkillOptions}
          setTotal={setTotal}
        />
      );
    }
  };
  const renderStep = () => {
    switch (activeStep) {
      case "Download":
        return (
          <Grid.Row>
            <Grid.Column width={16}>
              <Container style={{padding:"2rem 6rem",textAlign: "center"}}>
              <p style={{fontSize:'16px'}}>Open your HTML resume in a new tab and press <b>Ctrl + S (Windows)</b> or <b>Cmd + S (MacOS)</b> to save the complete webpage.</p>
              <Button primary style={{margin:"1rem"}} onClick={(e)=>window.open("/generate", "_blank")}>Open in New Tab</Button>
              </Container>
              
            </Grid.Column>
          </Grid.Row>
        )
      case "Upload":
        return (
          <Grid.Row>
            <Grid.Column width={16}>
              <Container style={{padding:"2rem 6rem",textAlign: "center"}}>
              <p style={{fontSize:'16px'}}>Upload the downloaded HTML file and accompanied folder to your Google Drive in a seperate folder (example: /Portfolio).</p>
              <GooglePicker clientId={CLIENT_ID}
              developerKey={API_KEY}
              scope={['https://www.googleapis.com/auth/drive.readonly']}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              navHidden={true}
              authImmediate={false}
              viewId={'DOCS'}
              mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
              createPicker={ (google, oauthToken) => {
                const uploadView = new google.picker.DocsUploadView().setIncludeFolders(true);
                const picker = new window.google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.MINE_ONLY)
                .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                    .addView(uploadView)/*DocsUploadView added*/
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey(API_KEY)
                    .setCallback((data)=>{
                      if (data.action == google.picker.Action.PICKED) {
                          var fileId = data.docs[0].id;
                          alert('The user selected: ' + fileId);
                          picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            <Button primary style={{margin:"1rem"}}>Upload to G-Drive</Button>
            <div className="google"></div>
        </GooglePicker>
              </Container>
              
            </Grid.Column>
          </Grid.Row>
        )
  }
}
  const renderModal = () => {
    if (submitFlag) {
      return (
        <Modal
          size="large"
          open={open}
          closeIcon
          onClose={() => dispatch({ type: "close" })}
        >
          <Modal.Header style={{textAlign:"center"}}>✅ All Set!</Modal.Header>
          <Modal.Content>
          <Header as="h2" textAlign="center">Follow the below steps to get your Resume hosted right now!</Header>
            <Step.Group widths={3}>
              <Step active={activeStep === steps[0]}
              icon='download'
              link
              completed={stepCompleted[steps[0]]}
              onClick={onStepClick}
              title='Download'
              description='Save Webpage'
              />
              <Step active={activeStep === steps[1]}
              icon='google drive'
              link
              completed={stepCompleted[steps[1]]}
              onClick={onStepClick}
              title='Upload'
              description='Upload to GDrive'
              />
            </Step.Group>
            {renderStep()}
            
            <p style={{textAlign:'center'}}>Click Done once this step is completed</p>
          </Modal.Content>
          <Modal.Actions style={{textAlign:'center'}}>
              <Button positive onClick={onStepComplete}>Done</Button>
          </Modal.Actions>
        </Modal>)
    } else {
      return (
        <Modal
          size="tiny"
          open={open}
          closeIcon
          onClose={() => dispatch({ type: "close" })}
        >
          <Modal.Header>Confirmation</Modal.Header>
          <Modal.Content>
            <p>Would you like to preview your HTML Resume before Confirming?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              animated="vertical"
              onClick={(e) => {
                dispatch({ type: "close" });
                localStorage.setItem("userData", JSON.stringify(watch()));
                window.open("/preview", "_blank");
              }}
            >
              <Button.Content visible>Preview</Button.Content>
              <Button.Content hidden>
                <Icon name="eye" />
              </Button.Content>
            </Button>
            <Button positive id="submitConfirm" form="templateForm" type="submit">
              Confirm
            </Button>
          </Modal.Actions>
        </Modal>)
    }
    
  }
  return (
    <>
      <Form error onSubmit={handleSubmit(onSubmit, onError)} id="templateForm">
        {renderForm()}
      </Form>
      <Button.Group floated="right" style={{ marginTop: "1rem" }}>
        <Button
          style={{ marginRight: "0.3rem" }}
          onClick={() => reset()}
          negative
        >
          Cancel
        </Button>
        <Button.Or />
        <Button
          style={{ marginLeft: "0.3rem", borderRadius: "0 0.3rem 0.3rem 0" }}
          icon
          onClick={() => dispatch({ type: "open" })}
          labelPosition="left"
          positive
        >
          <Icon name="settings" />
          Generate
        </Button>
      </Button.Group>
      {renderModal()}
    </>
  );
};

export default TemplateForm;
