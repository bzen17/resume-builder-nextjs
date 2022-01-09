import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TemplateForm from "../components/TemplateForm";
import Layout from "../components/Layout";
import { Grid, Button, Segment, Progress, Dropdown } from "semantic-ui-react";
import SideBar from "../components/SideBar";

export default function Home() {
  const [activeItem, setActiveItem] = useState("bio");

  const [progress, setProgress] = useState(20);

  return (
    <Layout>
      <Progress progress="percent" value={3} total={10} indicating />
      <Grid>
        <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />
        <Grid.Column stretched width={12}>
          <Segment>
            <TemplateForm activeItem={activeItem} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Layout>
  );
}
