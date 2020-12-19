import React, { useState } from "react";
import Layout from "../components/layout";
import { Trans } from "@lingui/macro";
import { LocalizedLink } from "gatsby-theme-i18n";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Divider
} from 'antd';

export default ({ location }) => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Layout location={location.pathname}>

      <h1><Trans>Donate</Trans></h1>
      <p><Trans>We offer fun literacy programs for kids in Xicohtzinco and volunteer opportunities for literacy lovers who want to see kids thrive. </Trans></p>
      <LocalizedLink to="/">&larr; <Trans>back to home</Trans></LocalizedLink>


      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Divider orientation="left">Donate to</Divider>
        <Form.Item label="Donate to">
          <Select>
            <Select.Option value="demo">where it is needed most</Select.Option>
            <Select.Option value="uno">blocky robots</Select.Option>
          </Select>
        </Form.Item>

        <Divider orientation="left">Donation amount</Divider>

        <Form.Item
          name="radio-button"
          label="Radio.Button"
          rules={[
            {
              required: true,
              message: 'Please pick an item!',
            },
          ]}
        >
          <Radio.Group span="20">
            <Radio.Button value="a">$50</Radio.Button>
            <Radio.Button value="b">$100</Radio.Button>
            <Radio.Button value="c">$200</Radio.Button>
            <Radio.Button value="d">$300</Radio.Button>
            <Radio.Button value="e">$500</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>

        <Divider orientation="left">Donation frequency</Divider>

        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>




    </Layout>
  );
};
