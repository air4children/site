import * as React from 'react'
import Layout from '../components/layout'
import { Card, Button } from "react-bootstrap";
const Workshops = () => {
  return (
    <Layout pageTitle="Robotics Workshop">
        <h1>
        Workshops we are developing
        </h1>
        <p>
            air4children is inspired by KHAN academy which is a non-profit
            organization with the goal of changing education for the better. In
            the same fashion, LibrE Robotics has also been thought to be a
            non-profit organization in which the main goals are fivefold:
        </p>

        <Card className="text-center">
            <Card.Header>Pilot Workshop I</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">May 2021</Card.Footer>
        </Card>
    </Layout>
  )
}

export default Workshops