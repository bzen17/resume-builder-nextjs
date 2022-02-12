import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
import TemplateForm from "../components/TemplateForm";
import Layout from "../components/Layout";
import { Grid, Button, Segment, Progress, Icon } from "semantic-ui-react";
import SideBar from "../components/SideBar";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, initFormData } from "../components/TemplateForm/schema";
import { useForm, useFieldArray } from "react-hook-form";
import ProgressBar from "../components/ProgressBar";
import "semantic-ui-css/semantic.min.css";

export default function Home({API_KEY,CLIENT_ID}) {
  const [activeItem, setActiveItem] = useState("bio");
  const fileRef = useRef(null);
  const {
    handleSubmit,
    watch,
    setValue,
    control,
    formState,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues:  typeof window !== 'undefined'?localStorage.getItem("userData")?JSON.parse(localStorage.getItem("userData")):initFormData:initFormData,
  });
  const onFileUpload = (e) => {};
  const [total, setTotal] = useState(27);
  useEffect(() => {
    console.log("Errors1", errors);
  }, [formState, errors]);

  return (
    <Layout>
      <Grid centered style={{ padding: "3rem 0" }}>
        <Grid.Row>
          <Grid.Column width={4} style={{ marginTop: "5rem" }}>
            <SideBar
              activeItem={activeItem}
              setActiveItem={setActiveItem}
              errors={errors}
              formState={formState}
            />
            <Button
              required
              content="Import Json"
              icon="upload"
              secondary
              fluid
              onClick={(e) => {
                e.preventDefault();
                fileRef.current.click();
              }}
            />
            <input
              ref={fileRef}
              type="file"
              name="json"
              hidden
              onChange={(e) => onFileUpload(e)}
            />
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <ProgressBar watch={watch} errors={errors} total={total} />
            <Segment raised>
              <TemplateForm
                activeItem={activeItem}
                handleSubmit={handleSubmit}
                watch={watch}
                setValue={setValue}
                control={control}
                errors={errors}
                setError={setError}
                clearErrors={clearErrors}
                reset={reset}
                setTotal={setTotal}
                API_KEY={API_KEY}
                CLIENT_ID={CLIENT_ID}
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props:{
      API_KEY:process.env.GOOGLE_API_KEY,
      CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
    }
  }
  // ...
}