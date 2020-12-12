import React from "react";
import Layout from "../components/layout";
import { Card, Col, Row, Divider } from 'antd';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

export default ({ location }) => {

  const { imagef, imagem } = useStaticQuery(graphql`
    query {
      imagem: file(relativePath: { eq: "user_male.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imagef: file(relativePath: { eq: "user_female.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout location={location.pathname}>
       <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card 
              title="User Name" 
              bordered={false}
              hoverable
              cover={<Img objectFit="cover" Tag="section" fluid={imagef.sharp.fluid} fadeIn="soft"/>}
            >
              <Divider />
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Card>
          </Col>
          <Col span={8}>
            <Card 
                title="User Name 2" 
                bordered={false}
                hoverable
                cover={<Img objectFit="cover" Tag="section" fluid={imagem.sharp.fluid} fadeIn="soft"/>}
            >
              <Divider />
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col span={8}>
            <Card 
                title="User Name 2" 
                bordered={false}
                hoverable
                cover={<Img objectFit="cover" Tag="section" fluid={imagem.sharp.fluid} fadeIn="soft"/>}
            >
              <Divider />
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};