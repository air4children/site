import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>Demo Video Releases for the proposed Low-Cost Robot</h1>
        
        <div>
        <a href="https://www.youtube.com/watch?v=BKWucKcgsP0&amp;feature=youtu.be">Video 1</a>
        <p>
            A Low Cost Robot that is capable of learning voice commands
            Duration:0:55
            Upload: 2nd July 2014
        </p>
        </div>

        <div>
        <a href="https://www.youtube.com/watch?v=f2mCCzVIxe0&amp;feature=youtu.be">Video 2</a>
        <p>
            A Demo Version of a Voice Controlled Low Cost Robot Using Arduino, Pocketsphinx, Firmata and Racket
            Duration:2:02
        </p>
        </div>

        <div>
        <a href="https://www.youtube.com/watch?v=W5yxz4Pu0zg&amp;feature=youtu.be">Video 3</a>
        <p>
            A Demo Version of the low-cost Robot
            Using Ardublok for LibrE Robotics Project
            Duration:12:13
        </p>
        </div>
    </Layout>
)