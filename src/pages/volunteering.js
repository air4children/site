import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout'
import { Nav, Tabs, Tab, Row, Col, ListGroup, Sonnet } from "react-bootstrap";

const Volunteering = () => {
  return (
    <Layout pageTitle="Become a Volunteer">
        <p>
            People from different fields of study can help us to improve the project in different ways. Henceforth, some professions, possible activities and open-source software to use are described below.
        </p>
        <br/>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={5}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item><Nav.Link eventKey="first">Psychologists</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="second">Pedagogues</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="third">Mechatronic/Electronic/Mechanical</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="fourth">Computer Engineers</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="fiveth">Webpage and social-network maintainers</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="sixth">Graphical designers/animators/artists</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link eventKey="seventh">Architects</Nav.Link></Nav.Item>
                    </Nav>
                </Col>
                <Col sm={7}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            To help us to produce the major development of each person. For instance, mentors should know how to treat each participant by knowing the answer of following questions: What are the potentiality of each person? What are the necessities of participants who are between 10 and 16 years old? By applying surveys to the participants, we can understand how to treat each kid in order to know how to communicate better with him.
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            to help us to design collaborative activities for the participants who will propose practical solutions for either community challenges or creation of conditions for a better world.
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            to help us to design, modify, improve the proposed robot. Open source software to use:
                            Arduino,
                            BeableBone,
                            Raspberry Pi,
                            Blender,
                            etc     
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            to help us to modify Ardublock code in order to create more fancy tools to inexperienced users. They are also going to help us to proposed the computers’s hardware and the process of installation. Open source software to use:
                            Ardublock,
                            Apache Maven,
                            stable release of Debian,
                            etc,
                        </Tab.Pane>
                        <Tab.Pane eventKey="fiveth">
                            to help us to be kindly in touch with subcriptors in different social networks, namely: facebook, tweeter, google+, and youtube. Open source software to use:
                            Mozilla Firefox
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth">
                            to help us to design friendly posters, logos, and videos. Open source software to use:
                            Gimp
                            Inkscape Vector
                            OpenShot Video Editor
                            etc
                        </Tab.Pane>
                        <Tab.Pane eventKey="seventh">
                            to help us to design a building where serendipity and comfortable environmental factors would be priority. Open source software to use:
                            Sweet Home 3D
                        </Tab.Pane>

                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        <br/>
        <StaticImage
          alt="photo"
          src="../images/IMG_0076.JPG"
        />
        <br/>
        <br/>
        <p>
        In the case that your field of study or profession were not included in the previous list, please let us know by either sending an e-mail to `robotics.libre@gmail.com` or contacting us by using the [forum](http://libre-robotics.1008580.n3.nabble.com/Feeling-like-volunteering-f8.html).
        </p>
        <p>
        Find donors/sponsors to help us purchase the robot parts, and material for the participants: [sponsors](https://sites.google.com/site/librerobotics/sponsors)
        </p>
    </Layout>
  )
}

export default Volunteering