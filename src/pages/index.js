import React from "react";
import Layout from "../components/layout";
import Box from "../components/box";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/post-preview";
import { Trans } from "@lingui/macro";
import { LocalesList } from "gatsby-theme-i18n";
import { Tabs, Divider } from 'antd';
import { Row } from 'antd';

const { TabPane } = Tabs;

const IndexPage = ({ location }) => {
  const posts = usePosts();

  return (
    <Layout location={location.pathname}>
      
      <Divider />

     
        <Tabs type="card" size="large" tabPosition="left">
          <TabPane tab="The project" key="1">
            <Box>
              <h2>
                <Trans>Robots (summer 2015)</Trans>
              </h2>
              <p>
                <Trans>
                  Our aim is to create the first Summer Workshop in 2015 of LibrE
                  Robotics in Xicohtzinco, Tlaxcala, Mexico. Children between 10 and
                  15 years old will be invited to participate in a week full of
                  activities that are going to be thoughtfully designed for finding
                  delightfulness in the robotics field.
                </Trans>
              </p>
              <p>
                <Trans>
                  We are working on the logistic, evaluating material, creating
                  activities, organizing the project's timeline, selecting mentors,
                  and getting sponsorship.
                </Trans>
              </p>
            </Box>
          </TabPane>
          <TabPane tab="Tab Title 2" key="2">
            <p>Content of Tab Pane 2</p>
          </TabPane>
          <TabPane tab="Tab Title 3" key="3">
            <p>Content of Tab Pane 3</p>
          </TabPane>
        </Tabs>


      <Divider />

      <h2>
        <Trans>Most recent news from air4children</Trans>
      </h2>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          {posts.map(post => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </Row>
      </div>

      <LocalesList />

      <Divider />
    </Layout>
  );
};

export default IndexPage;
