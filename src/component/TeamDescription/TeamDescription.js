import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../../images/male.png'
import female from '../../images/female.png'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarker, faMars } from '@fortawesome/free-solid-svg-icons';

const TeamDescription = () => {
    const { teamid } = useParams();
    const [teamDescription, setTeamDescription] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDescription(data.teams[0]))
    }, [])
    console.log(teamDescription);
    const { strTeam,strLeague, intFormedYear, strCountry, strGender, strSport, strTeamBadge, strDescriptionEN,  strTeamBanner } = teamDescription;
    const genderImage = strGender === "Female" ?female : male ;
    return (
        <Container>
            <div className="header">
                <Image className="mx-auto d-block h-50" src={strTeamBanner}></Image>
                <Image className="mx-auto d-block h-50" src={strTeamBadge}></Image>
            </div>
            <Row className="team-detail mt-5" style={{backgroundColor: '#3A42FF',borderRadius:'5px',padding:'5px'}}>
                <Col className="mt-5">
                    <h4>{strLeague}</h4>
                    <p> <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> Founded:{intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country:{strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sport Type:{strSport}</p>
                    <p><FontAwesomeIcon icon={faMars}></FontAwesomeIcon> Gender:{strGender}</p>
                </Col>
                <Col>
                    <img className="w-100" src={genderImage} alt=""/>
                </Col>
            </Row>
            <Row className="mt-5" style={{backgroundColor: '#0E0A2B',color: '#C6C6C6',borderRadius:'5px',padding:'5px'}}>
                <h3>About This Club</h3>
                <p>{strDescriptionEN}</p>
            </Row>
            <Footer teamDescription={teamDescription} ></Footer>
        </Container>
    );
};

export default TeamDescription;