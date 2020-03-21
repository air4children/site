import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Box from '../components/box';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
    
    const posts = usePosts(); 

    return (
        <>
            <Layout>
                <Box>
                    <h2>Cocinando Robots (Verano 2015)</h2>
                    <p>Our aim is to create the first Summer Workshop in 2015 of LibrE Robotics in Xicohtzinco, Tlaxcala, Mexico. Children between 10 and 15 years old will be invited to participate in a week full of activities that are going to be  thoughtfully designed for finding delightfulness in the robotics field.</p>
                    <p>We are working on the logistic, evaluating material, creating activities, organizing the project's timeline, selecting mentors, and getting sponsorship.</p>
                </Box>
                <h2>Most recent new from air4children</h2>
                {posts.map(post => (
                            <PostPreview key={post.slug} post={post}/>
                ))}
            </Layout>
        </>
    );
};