import { Button } from '@material-ui/core';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TeamDetail = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
    return (
        <Col md={4} >
            <Card className="mx-5 mt-5 ">
                <Card.Img className="rounded" variant="top" src={strTeamBadge} />
                <Card.Body className="text-dark">
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sports Type: {strSport}</Card.Text>
                    <Button onClick={() => props.teamDetailHandle(idTeam)} variant="contained" color="primary">Explore {" "}<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TeamDetail;