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

import React from "react";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import { Icon, Step } from "semantic-ui-react";
const Upload = () => {
  return (
    <Layout>
      <Step.Group>
        <Step>
          <Icon name="truck" />
          <Step.Content>
            <Step.Title>Shipping</Step.Title>
            <Step.Description>Choose your shipping options</Step.Description>
          </Step.Content>
        </Step>

        <Step active>
          <Icon name="payment" />
          <Step.Content>
            <Step.Title>Billing</Step.Title>
            <Step.Description>Enter billing information</Step.Description>
          </Step.Content>
        </Step>

        <Step disabled>
          <Icon name="info" />
          <Step.Content>
            <Step.Title>Confirm Order</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
    </Layout>
  );
};

export default Upload;
