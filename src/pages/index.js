import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Container, Col, Row, Card, Button } from "react-bootstrap"

import {
  containerBody 
} from '../css/index.module.css'


const IndexPage = ({data}) => {
  return (
    <>
      <Carousel>
        {data.slideShow.edges.map(({node}) => (
          <Carousel.Item key={node.id}>
            <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base}/>
            <Carousel.Caption>
              <h1>Air 4 Children</h1>
              <h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Layout pageTitle="Air For Children">
        
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br/>
        
        <Container className={containerBody}>
          {/* <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row> */}
          <Row>
            <Col>
              <Card>
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="../images/IMG_0088.JPG"
                />
                <Card.Body>
                  <Card.Title>Workshops</Card.Title>
                  <Card.Text>
                    Some quick example text to build here.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              {/* <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                src="../images/carousel/IMG_0161.JPG"
              /> */}
            </Col>
            <Col>
              <Card>
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="../images/IMG_0092.JPG"
                />
                <Card.Body>
                  <Card.Title>Workshops</Card.Title>
                  <Card.Text>
                    Some quick example text to build here.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <StaticImage
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="../images/IMG_0133.JPG"
                />
                <Card.Body>
                  <Card.Title>Workshops</Card.Title>
                  <Card.Text>
                    Some quick example text to build here.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br/>
        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <br/>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/IMG_0074.JPG"
        />

      </Layout>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    slideShow: allFile(
      filter: {relativeDirectory: {eq: "carousel"}}
      sort: {fields: base, order: ASC}
    ) 
    {
      edges {
        node {
          id
          relativePath
          base
          childImageSharp {
            gatsbyImageData(
              height: 600
              width: 1900
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width: 100}
              transformOptions: {cropFocus: ATTENTION, fit: COVER}
            )
          }
        }
      }
    }
  }
`