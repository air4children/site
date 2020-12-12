import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Image from "gatsby-image";
import ReadLink from "../components/read-link";
import { Card, Col, Avatar } from 'antd';

const { Meta } = Card;

const PostPreview = ({ post }) => (
  <article>
    <Col span={8}>
      <Card
        style={{ width: 300 }}
        bordered={false}
        hoverable
        cover={<Image css={css`* {margin-top: 0;}`} fluid={post.image.sharp.fluid} alt={post.title} />}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<Link to={post.slug}>{post.title}</Link>}
          description={<p>{post.author}</p>}
        />
        <p>{post.excerpt}</p>

        <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
      </Card>
    </Col>
  </article>
);

export default PostPreview;
