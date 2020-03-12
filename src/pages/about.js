import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>What is LibrE Robotics?</h1>
        
        {/* <Link to="/">&larr; back to home</Link> */}
        <p>
        LibrE Robotics is inspired by KHAN academy [1] which is a non-profit organization with the goal of changing education for the better. In the same fashion, LibrE Robotics has also been thought to be a non-profit organization
        in which the main goals are fivefold:
        </p>

        <ul>
            <li>to contribute to the development of a free world-class education in Robotics for anyone anywhere;</li>
            <li>to design and build low-cost robots with high standards of quality;</li>
            <li>to improve current open source software projects so as to be more approachable by inexperienced users; </li>
            <li>to design free access material in educational Robotics, and develop activities where organization and cooperation of the participants can foster possible solutions for environmental, social and healthcare issues; and</li>
            <li>to design and build environments where participants can discover and develop their own capabilities. </li>
        </ul>
            
        <p>LibrE Robotics will provide software and hardware for educational robots that are extremely reliable (robust), modifiable, and very cheap in order to be accessible to anyone and to enable a much more rapid development of the community.</p>
        <p>In addition to that, LibrE Robotics has been adopted the philosophy of free software foundation, since free and open-source software and hardware licences state that anyone is freely licensed to use, copy, study and change in any way, and the source code is openly shared so that users are encouraged to voluntarily improve the design of the software. In [2] Meyer said: ``Libre software offers scientists the possibility of sharing with their peers how they have solved problems. This, of course is basic for the evolution of science; but libre software goes beyond that and makes this happen in a cost-effective way.'' </p>
        <p>For further information, you can read the complete documentation at</p>
        References:
        <p><Link to="/">[1] Salman Khan, Khan Academy: A free world-class education for anyone anywhere </Link></p>
        <p><Link to="/">[2] Meyer, Tony, Building Cost-effective Research Platforms : Utilising Free | Open- source Software in Research Projects </Link></p>
    </Layout>
)