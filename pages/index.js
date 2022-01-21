import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TemplateForm from "../components/TemplateForm";
import Layout from "../components/Layout";
import { Grid, Button, Segment, Progress, Dropdown } from "semantic-ui-react";
import SideBar from "../components/SideBar";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, initFormData } from "../components/TemplateForm/schema";
import { useForm, useFieldArray } from "react-hook-form";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  const [activeItem, setActiveItem] = useState("bio");

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
    defaultValues: initFormData,
  });

  const [total, setTotal] = useState(27);
  useEffect(() => {
    console.log("Errors1", errors);
  }, [formState]);

  return (
    <Layout>
      <ProgressBar watch={watch} errors={errors} total={total} />
      <Grid>
        <SideBar
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          errors={errors}
          formState={formState}
        />
        <Grid.Column stretched width={12}>
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
            />
          </Segment>
        </Grid.Column>
      </Grid>
    </Layout>
  );
}
