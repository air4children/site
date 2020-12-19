import React from "react";
import Layout from "../components/layout";
import { Trans } from "@lingui/macro";
import Wave from "../components/wave";
import { Divider, Form, Input, InputNumber, Button } from 'antd';
import Paper from '@material-ui/core/Paper';

const layoutt = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};


export default ({ location }) => {

  const onFinish = (values) => {
    console.log(values);
  };
  
  return (
    <Layout location={location.pathname}>
      <h1>
        <Trans>Contact Us</Trans>
      </h1>

      <p>
        <Trans>
          If you have any questions about becoming a collaborator, volunteer,
          mentor, sponsor, or anything else, do not hesitate to mail us to
          `robotics.libre@gmail.com`.
        </Trans>
      </p>

      <p>
        <Trans>
          It can also be helpul to fill the following form in order to send us a mail.
        </Trans>
      </p>

      <Divider />

    <Form {...layoutt} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layoutt.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    <Divider />

    <p>
      <Trans>
        Also, you can create an issue in any of the repositories in
        https://github.com/air4children.
      </Trans>
    </p>


    </Layout>
  );
};
