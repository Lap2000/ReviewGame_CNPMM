
import React from "react";
// reactstrap components
//import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardColumns,
  CardGroup,
  CardDeck,
  CardLink,
  CardHeader,
  CardFooter,
  Button,
  Row,
  Col
} from 'reactstrap';

import img1 from '../assets/img/big/img1.jpg';
import img2 from '../assets/img/big/img1.jpg';
import img3 from '../assets/img/big/img1.jpg';
import img4 from '../assets/img/big/img1.jpg';
import img5 from '../assets/img/big/img1.jpg';
import img6 from '../assets/img/big/img1.jpg';


function Icons() {
  return (
        <div className="content">
            <Row>
                <Col md="12">
                    <h5 className="mb-3">Basic Cards</h5>
                    <Row>
                        <Col xs="12" md="4">
                            {/* --------------------------------------------------------------------------------*/}
                            {/* Card-1*/}
                            {/* --------------------------------------------------------------------------------*/}
                            <Card>
                                <CardImg top width="100%" src={img1} />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                                    <Button>View</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            {/* --------------------------------------------------------------------------------*/}
                            {/* Card-1*/}
                            {/* --------------------------------------------------------------------------------*/}
                            <Card>
                                <CardImg top width="100%" src={img2} />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                                    <Button>View</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="12" md="4">
                            {/* --------------------------------------------------------------------------------*/}
                            {/* Card-1*/}
                            {/* --------------------------------------------------------------------------------*/}
                            <Card>
                                <CardImg top width="100%" src={img3} />
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the cards content.</CardText>
                                    <Button>View</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
  );
}

export default Icons;
