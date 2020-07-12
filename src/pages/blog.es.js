import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.es';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import { Trans } from "@lingui/macro";
import { I18nProvider } from "@lingui/react";
import catalogEN from "../locales/en/messages";
import catalogES from "../locales/es/messages";

export default () => {

    const posts = usePosts();

    return (
      <I18nProvider language="es" catalogs={{ en: catalogEN, es: catalogES }}>
        <Layout>
            <h1>Blog</h1>
            <p><Trans>Entry blog posts</Trans></p>
            <Link to="/">&larr; <Trans>back to home</Trans></Link>

            {posts.map(post => (
                        <PostPreview key={post.slug} post={post}/>
            ))}

        </Layout>
      </I18nProvider>
    );
};
